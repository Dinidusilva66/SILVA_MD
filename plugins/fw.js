const { cmd } = require('../command');

cmd({
    pattern: "fw",
    alias: ["forward"],
    react: "📤",
    desc: "Forward MP4 or any file to a group with status updates",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, args, quoted, reply }) => {
    try {
        // Arguments validation
        if (!quoted) {
            return reply("✋ *Please reply to a message you want to forward.*");
        }
        if (args.length === 0) {
            return reply("✋ *Usage:* .fw <group_jid>");
        }

        const groupJID = args[0]; // Group JID to forward the message to

        // Notify user that forwarding has started
        const forwardingMsg = await reply("⏳ *Forwarding...*");

        // Check if the quoted message contains media
        if (quoted.message.videoMessage || quoted.message.documentMessage) {
            // Download the media file
            const media = await conn.downloadMediaMessage(quoted);

            // Check file size (2GB limit for WhatsApp)
            if (media.byteLength > 2 * 1024 * 1024 * 1024) {
                await conn.sendMessage(from, { text: "❌ *The file size exceeds 2GB. Unable to forward.*" }, { quoted: mek });
                return;
            }

            // Send the video or document
            const mediaType = quoted.message.videoMessage ? "video" : "document";
            const mimeType = quoted.message[mediaType + "Message"].mimetype || "video/mp4";
            const fileName = quoted.message[mediaType + "Message"].fileName || "file.mp4";

            await conn.sendMessage(groupJID, {
                [mediaType]: media,
                mimetype: mimeType,
                fileName: fileName,
                caption: quoted.message[mediaType + "Message"].caption || ""
            }, { quoted: mek });

            // Notify success
            await conn.sendMessage(from, { text: "✅ *Forwarding successful!*" }, { quoted: mek });
        } else {
            await conn.sendMessage(from, { text: "❌ *Please reply to a valid MP4 file or document.*" }, { quoted: mek });
        }
    } catch (error) {
        console.error(error);

        // Notify error
        await conn.sendMessage(from, { text: `❌ *Error: ${error.message}*` }, { quoted: mek });
    }
});
