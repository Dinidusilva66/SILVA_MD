const { cmd } = require('../command');
const fetch = require('node-fetch');
const yts = require("yt-search");
const API = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com/ytmp3-dl-fixed?url=`;

cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🔊",
    category: 'download',
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*ꜱɪʟᴠᴀ ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
      
*🔊 Title:* ${data.title}
*👁 Views:* ${data.views}
*⏳ Duration:* ${data.timestamp}
*📆 Published:* ${data.ago}
*📃 Description:* ${data.description}

*Reply with the number of the format you prefer:*
1️⃣ Audio
2️⃣ Document

> *ꜱɪʟᴠᴀ ᴍᴅ*
        `;

        const msg = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Listen for the user's response
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const userMsg = msgUpdate.messages[0];
            if (!userMsg.message || !userMsg.message.extendedTextMessage) return;

            const selectedOption = userMsg.message.extendedTextMessage.text.trim();
            const contextId = userMsg.message.extendedTextMessage.contextInfo?.stanzaId;

            if (contextId === msg.key.id) {
                const response = await fetch(`${API}${url}`);
                const result = await response.json();

                if (!result.data || !result.data[2]) {
                    return reply('Error: Could not fetch download URL.');
                }

                const downloadUrl = result.data[2].downloadUrl;

                switch (selectedOption) {
                    case '1': // Audio
                        await conn.sendMessage(from, { 
                            audio: { url: downloadUrl }, 
                            mimetype: "audio/mpeg", 
                            caption: "> *ꜱɪʟᴠᴀ ᴍᴅ*" 
                        }, { quoted: mek });
                        break;

                    case '2': // Document
                        await conn.sendMessage(from, { 
                            document: { url: downloadUrl }, 
                            mimetype: "audio/mpeg", 
                            fileName: `${data.title}.mp3`, 
                            caption: "> *ꜱɪʟᴠᴀ ᴍᴅ*" 
                        }, { quoted: mek });
                        break;

                    default:
                        reply("Invalid option. Please select 1 or 2.");
                }
            }
        });
    } catch (e) {
        console.error(e);
        reply('An error occurred while processing your request.');
    }
});
