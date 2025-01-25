const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "fw", // Command name
    alias: ["forward"], // Alternative names for the command
    react: "📤", // Reaction emoji for the command
    desc: "Forward a file from one group to another (retain caption)", // Command description
    category: "main", // Category of the command
    filename: __filename // Current file path
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, groupMetadata, reply }) => {
    try {
        if (!quoted) {
            return reply("❌ Please reply to a document or media file to forward.");
        }

        // Check if the quoted message contains a document or media
        const quotedMessage = quoted.message;
        const isDocument = quotedMessage.documentMessage;
        const isMedia = quotedMessage.imageMessage || quotedMessage.videoMessage;

        if (!isDocument && !isMedia) {
            return reply("❌ Only document, image, or video messages can be forwarded.");
        }

        // Check file size for documents (if applicable)
        if (isDocument && quotedMessage.documentMessage.fileLength > 2 * 1024 * 1024 * 1024) {
            return reply("❌ File size exceeds 2GB. Cannot forward.");
        }

        // Define target group JID (replace this with your group JID)
        const targetGroupJID = "1234567890-123456@g.us";

        // Get the caption from the quoted message
        const caption = quotedMessage.caption || quotedMessage.documentMessage?.caption || quotedMessage.imageMessage?.caption || quotedMessage.videoMessage?.caption || "";

        // Prepare message content
        let messageContent;
        if (isDocument) {
            messageContent = {
                document: { url: await conn.downloadMediaMessage(quoted) },
                mimetype: quotedMessage.documentMessage.mimetype,
                fileName: quotedMessage.documentMessage.fileName,
                caption: caption // Retain original caption
            };
        } else if (quotedMessage.imageMessage) {
            messageContent = {
                image: { url: await conn.downloadMediaMessage(quoted) },
                caption: caption // Retain original caption
            };
        } else if (quotedMessage.videoMessage) {
            messageContent = {
                video: { url: await conn.downloadMediaMessage(quoted) },
                caption: caption // Retain original caption
            };
        }

        // Send message to target group without forward tag
        await conn.sendMessage(targetGroupJID, messageContent);
        reply("✅ File successfully sent to the target group with its original caption!");

    } catch (error) {
        console.error(error);
        reply(`⚠️ An error occurred: ${error}`);
    }
});
