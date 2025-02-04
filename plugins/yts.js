

/*
Please Give Credit 🙂❤️
⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚
*/
//=============================================
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const yts = require('yt-search');
const domain = `https://manul-official-api-site-4a4d3aa3fe73.herokuapp.com`;
//===== Api Link එක මට Message එකක් දාල ඉල්ලගන්න, +94 74 227 4855 සල්ලි ගන්න නෙවේ, කීයක් Use කරනවද දැනගන්න...❤️=====
//=============================================
cmd({
    pattern: "song",
    alias: ["audio"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply('Please provide a title.');
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*ꜱɪʟᴠᴀ ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
        
🏷️ *\`Title\` :* *_${data.title}_*

👁 *\`Views\` ➜* *_${data.views}_*
⏳ *\`TIME\` ➜* *_${data.timestamp}_*
📆 *\`AGO\` ➜* *_${data.ago}_*
📃 *\`DESCRIPTION\` ➜* *_${data.description}_*

*_Reply This Message With Nambars_*

*1. Audio*
*2. Document*

> *ꜱᴜʟᴠᴀ ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
    const response = await fetchJson(`${domain}/ytmp3-fix?url=${data.url}`);
    
    const downloadUrl = response.dl_link;

//============Send Audio======================
await conn.sendMessage(from,{audio:{url: downloadUrl },mimetype:"audio/mpeg",caption :"> *ꜱɪʟᴠᴀ ᴍᴅ*"},{quoted:mek})
                        break;
       
                    case '2':               
const responsex = await fetchJson(`${domain}/ytmp3-fix?url=${data.url}`);
    
    const downloadUrlx = response.dl_link;

//=============Send Document=================
await conn.sendMessage(from,{document:{url: downloadUrlx },mimetype:"audio/mpeg",fileName: data.title + ".mp3" ,caption :"> *ꜱɪʟᴠᴀ ᴍᴅ*"},{quoted:mek})
                        break;
 
                    default:
                        reply("Invalid option. Please select a valid option.");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request');
    }
});
//=============©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚==========
