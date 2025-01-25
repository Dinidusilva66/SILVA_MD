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
            return reply("❌ Please reply to a document, image, or video message.");
        }

        // Debugging the quoted message structure
        console.log("Quoted Message:", quoted.message);

        // Safeguard: Check if quoted.message exists
        const quotedMessage = quoted.message || {};
        const isDocument = quotedMessage.documentMessage;
        const isImage = quotedMessage.imageMessage;
        const isVideo = quotedMessage.videoMessage;

        if (!isDocument && !isImage && !isVideo) {
            return reply("❌ Unsupported message type. Please reply to a document, image, or video.");
        }

        // Check file size for documents
        if (isDocument && quotedMessage.documentMessage.fileLength > 2 * 1024 * 1024 * 1024) {
            return reply("❌ File size exceeds 2GB. Cannot forward.");
        }

        // Define target group JID (replace this with your group JID)
        const targetGroupJID = "120363376684737580@g.us";

        // Extract caption
        const caption =
            quotedMessage.documentMessage?.caption ||
            quotedMessage.imageMessage?.caption ||
            quotedMessage.videoMessage?.caption ||
            "";

        // Prepare message content
        let messageContent;
        if (isDocument) {
            messageContent = {
                document: { url: await conn.downloadMediaMessage(quoted) },
                mimetype: quotedMessage.documentMessage.mimetype,
                fileName: quotedMessage.documentMessage.fileName,
                caption: caption // Retain original caption
            };
        } else if (isImage) {
            messageContent = {
                image: { url: await conn.downloadMediaMessage(quoted) },
                caption: caption // Retain original caption
            };
        } else if (isVideo) {
            messageContent = {
                video: { url: await conn.downloadMediaMessage(quoted) },
                caption: caption // Retain original caption
            };
        }

        // Send message to target group without forward tag
        await conn.sendMessage(targetGroupJID, messageContent);
        reply("✅ File successfully sent to the target group with its original caption!");

    } catch (error) {
        console.error("Error:", error);
        reply(`⚠️ An error occurred: ${error.message}`);
    }
});
