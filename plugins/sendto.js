const Asena = require("../Utilis/events");
const { sendMessage } = require("../Utilis/groupmute"); // Function to send a message
const { downloadContentFromMessage } = require("@adiwajshing/baileys"); // To download media

Asena.addCommand(
    { pattern: 'sendto ?(.*)', fromMe: true, desc: "Send replied message to inbox or group" },
    async (message, match) => {
        if (!match) return await message.sendMessage("*Provide a valid JID (user or group)*\nExample: .sendto 94770123456@s.whatsapp.net or 12345-67890@g.us");
        if (!message.reply_message) return await message.sendMessage("*Reply to a message to send it!*");

        const targetJID = match.trim(); // Extract the target JID (inbox or group)
        const { messageType, mimeType, body } = message.reply_message;

        let mediaBuffer = null;

        // Download media if the message has media content
        if (["image", "video", "audio", "document"].includes(messageType)) {
            const stream = await downloadContentFromMessage(message.reply_message.message, messageType);
            let bufferArray = [];
            for await (const chunk of stream) {
                bufferArray.push(chunk);
            }
            mediaBuffer = Buffer.concat(bufferArray); // Combine chunks into a buffer
        }

        // Send the message to the target JID
        if (mediaBuffer) {
            // For media messages
            const options = {
                mimetype: mimeType,
                caption: message.reply_message.caption || "Here's your file!", // Add a caption if needed
            };
            await sendMessage(targetJID, mediaBuffer, messageType, options);
        } else {
            // For text messages
            await sendMessage(targetJID, body, "conversation");
        }

        return await message.sendMessage(`Message sent to: ${targetJID}`);
    }
);
