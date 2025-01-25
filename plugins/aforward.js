cmd({
    pattern: "fw",
    alias: ["forward"],
    react: "📤",
    desc: "Forward media or any file to a group with status updates",
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

        // Check if quoted message contains media or document
        const mediaMessage = quoted.message.videoMessage || 
                             quoted.message.imageMessage || 
                             quoted.message.documentMessage || 
                             quoted.message.audioMessage || 
                             quoted.message.stickerMessage;

        if (mediaMessage) {
            // Download the media file (image, video, document, etc.)
            const media = await conn.downloadMediaMessage(quoted);

            // Check file size (2GB limit for WhatsApp)
            if (media.byteLength > 2 * 1024 * 1024 * 1024) {
                await conn.sendMessage(from, { text: "❌ *The file size exceeds 2GB. Unable to forward.*" }, { quoted: mek });
                return;
            }

            // Determine the media type and prepare the message accordingly
            let mediaType = "document"; // Default type for document
            if (quoted.message.videoMessage) mediaType = "video";
            if (quoted.message.imageMessage) mediaType = "image";
            if (quoted.message.audioMessage) mediaType = "audio";
            if (quoted.message.stickerMessage) mediaType = "sticker";
            else if (quoted.message.documentMessage) mediaType = "document";

            // Send the media to the specified group
            await conn.sendMessage(groupJID, {
                [mediaType]: media,
                mimetype: quoted.message[mediaType + "Message"]?.mimetype || "",
                fileName: quoted.message[mediaType + "Message"]?.fileName || "",
                caption: quoted.message[mediaType + "Message"]?.caption || ""
            }, { quoted: mek });

            // Notify success
            await conn.sendMessage(from, { text: "✅ *Forwarding successful!*" }, { quoted: mek });
        } else {
            await conn.sendMessage(from, { text: "❌ *Please reply to a valid media or document message.*" }, { quoted: mek });
        }
    } catch (error) {
        console.error(error);

        // Notify error
        await conn.sendMessage(from, { text: `❌ *Error: ${error.message}*` }, { quoted: mek });
    }
});
