const { cmd } = require('../command');

cmd({
    pattern: "fw",
    alias: ["forward"],
    react: "📤",
    desc: "Send messages/media to a specified JID without forward tag.",
    category: "utility",
    filename: __filename
},
async (conn, mek, m, { from, quoted, args, reply }) => {
    try {
        if (!quoted) return reply("Reply to a message or media with `.fw <jid>`");
        if (!args[0]) return reply("Provide a valid JID. Example: `.fw 1234567890@s.whatsapp.net`");

        const targetJID = args[0];
        const quotedMsg = quoted.message;

        // Check if quoted message is defined
        if (!quotedMsg) return reply("The quoted message is invalid or not supported.");

        // Forward a document
        if (quotedMsg.documentMessage) {
            const documentBuffer = await conn.downloadMediaMessage(quoted);
            const caption = quotedMsg.documentMessage.caption || "";
            await conn.sendMessage(targetJID, {
                document: documentBuffer,
                mimetype: quotedMsg.documentMessage.mimetype,
                fileName: quotedMsg.documentMessage.fileName,
                caption: caption
            });
            return reply(`Document sent to ${targetJID}`);
        }

        // Forward an image
        if (quotedMsg.imageMessage) {
            const imageBuffer = await conn.downloadMediaMessage(quoted);
            const caption = quotedMsg.imageMessage.caption || "";
            await conn.sendMessage(targetJID, {
                image: imageBuffer,
                caption: caption
            });
            return reply(`Image sent to ${targetJID}`);
        }

        // Forward a video
        if (quotedMsg.videoMessage) {
            const videoBuffer = await conn.downloadMediaMessage(quoted);
            const caption = quotedMsg.videoMessage.caption || "";
            await conn.sendMessage(targetJID, {
                video: videoBuffer,
                caption: caption
            });
            return reply(`Video sent to ${targetJID}`);
        }

        // Forward text message
        if (quotedMsg.conversation || quotedMsg.extendedTextMessage) {
            const text = quotedMsg.conversation || quotedMsg.extendedTextMessage.text;
            await conn.sendMessage(targetJID, { text });
            return reply(`Text message sent to ${targetJID}`);
        }

        // If no supported message type is found
        reply("The quoted message type is not supported for forwarding.");

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
