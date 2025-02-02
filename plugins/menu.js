


const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📖",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
◻️ *\`ʀᴜɴᴛɪᴍᴇ\`* ➜ *${runtime(process.uptime())}*
◻️ *\`ᴍᴏᴅᴇ\`* ➜ *[${config.MODE}]*
◻️ *\`ᴘʀᴇғɪx\`* ➜ *[${config.PREFIX}]*
◻️ *\`ʀᴀᴍ ᴜsᴇ\`* ➜ *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
◻️ *\`ᴄʀᴇᴀᴛᴏʀ\`* : *ꜱɪʟᴠᴀ ᴍᴅ | ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ*


1️⃣ 𝗢𝗪𝗡𝗘𝗥
2️⃣ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧
3️⃣ 𝗔𝗜
4️⃣ 𝗦𝗘𝗔𝗥𝗖𝗛
5️⃣ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗
6️⃣ 𝗠𝗔𝗜𝗡
7️⃣ 𝗚𝗥𝗢𝗨𝗣
8️⃣ 𝗙𝗨𝗡
9️⃣ 𝗔𝗡𝗜𝗠𝗘
🔟 𝗢𝗧𝗛𝗘𝗥

*_ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ_*

> *ꜱɪʟᴠᴀ ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`1️⃣ 𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴏᴡɴᴇʀ*
▫ *.ʀᴇᴘᴏ*
▫ *.ꜱʏꜱᴛᴇᴍ*
▫ *.ꜱᴛᴀᴛᴜꜱ*
▫ *.ʙʟᴏᴄᴋ*
▫ *.ᴜɴʙʟᴏᴄᴋ*
▫ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
▫ *.sᴇᴛᴘᴘ*
▫ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
▫ *.ᴊɪᴅ*
▫ *.ɢᴊɪᴅ*
▫ *.ʀᴇꜱᴛᴀʀᴛ*
▫ *.ᴜᴘᴅᴀᴛᴇ*
▫ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
▫ *.sʜᴜᴛᴅᴏᴡɴ*
▫ *.ᴀʟɪᴠᴇ*
▫ *.ᴀʙᴏᴜᴛ*
▫ *.ᴅᴇʟᴇᴛᴇ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴏᴡɴᴇʀ: 18*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '2':               
                        reply(`2️⃣ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴄᴏɴᴠᴇʀᴛ* 
▫ *.sꜱ* 
▫ *.sᴛɪᴄᴋᴇʀ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴄᴏɴᴠᴇʀᴛ: 2*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '3':               
                        reply(`3️⃣ 𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴀɪ* 
▫ *.ɢᴏᴏɢʟᴇ*
▫ *.ɢᴇᴍɪɴ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴀɪ: 4*

> *ꜱɪʟᴠᴀ ᴍᴅ`);
                        break;
                    case '4':               
                        reply(`4️⃣ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴘʟᴀʏ* 
▫ *.sᴏɴɢ*
▫ *.ᴠɪᴅᴇᴏ* 
▫ *.ʏᴛ  <ᴛᴇxᴛ>*
▫ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
▫ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
▫ *.ɪᴍɢ <ᴛᴇxᴛ>*
▫ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ sᴇᴀʀᴄʜ: 8*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '5':               
                       reply(`5️⃣ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ɢɪᴛᴄʟᴏɴᴇ*
▫ *.ᴀᴘᴋ* 
▫ *.ᴛᴡɪᴛᴛᴇʀ* 
▫ *.ɢᴅʀɪᴠᴇ* 
▫ *.ᴍᴇᴅɪᴀғɪʀᴇ* 
▫ *.ғʙ*
▫ *.ɪɢ* 
▫ *.ᴍᴏᴠɪᴇ*
▫ *.soɴɢ* 
▫ *.ᴠɪᴅᴇᴏ*
▫ *.ᴘʟᴀʏ*
▫ *.ᴘʟᴀʏ2*
▫ *.ʏᴛ*
▫ *.ᴛɪᴋᴛᴏᴋ/ᴛᴛ* 
▫ *.ɪᴍɢ* 

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴅᴏᴡɴʟᴏᴀᴅ: 15*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '6':               
                        reply(`6️⃣ 𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴀʟɪᴠᴇ* 
▫ *.ᴀʙᴏᴜᴛ* 
▫ *.ᴍᴇɴᴜ* 
▫ *.ᴀʟʟᴍᴇɴᴜ* 
▫ *.sᴜᴘᴘᴏʀᴛ* 
▫ *.ꜱʏꜱᴛᴇᴍ* 
▫ *.ᴘɪɴɢ* 
▫ *.ʀᴜɴᴛɪᴍᴇ* 

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴍᴀɪɴ: 8*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '7':               
                        reply(`7️⃣ 𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴘʀᴏᴍᴏᴛᴇ*
▫ *.ᴅᴇᴍᴏᴛᴇ*
▫ *.ᴋɪᴄᴋ*
▫ *.ᴀᴅᴅ*
▫ *.ɢᴇᴛᴘɪᴄ* 
▫ *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
▫ *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
▫ *.ᴀᴅᴍɪɴs*
▫ *.ɢɴᴀᴍᴇ*
▫ *.ᴛᴀɢᴀʟʟ*
▫ *.ᴛᴀɢᴀᴅᴍɪɴ*
▫ *.ᴏᴘᴇɴᴛɪᴍʀ/ᴄʟᴏsᴇᴛɪᴍᴇ*
▫ *.ɢɪɴғᴏ*
▫ *.ɢʟɪɴᴋ*
▫ *.ɢᴅᴇsᴄ*
▫ *.ᴍᴜᴛᴇ*
▫ *.ᴜɴᴍᴜᴛᴇ*
▫ *.ʟᴏᴄᴋ*
▫ *.ᴜɴʟᴏᴄᴋ*
▫ *.ᴅᴇʟᴇᴛᴇ*
▫ *.ᴋɪᴄᴋᴀʟʟ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ɢʀᴏᴜᴘ: 21*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                       break;
                    case '8':               
                        reply(`8️⃣ 𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ғᴀᴄᴛ*
▫ *.ʜᴀᴄᴋ*
▫ *.ϙᴜᴏᴛᴇ*
▫ *.ʀᴠɪᴅᴇᴏ*
▫ *.ʙɪʙʟᴇ*
▫ *.ᴀɴɢᴇʀ*
▫ *.ʜᴀᴘᴘʏ*
▫ *.ʜᴇᴀʀᴛ*
▫ *.ʜᴀɴᴅ*
▫ *.ꜱᴀᴅ*
▫ *.ꜱʜʏ*
▫ *.ᴍᴏᴏɴ*
▫ *.ᴄᴏɴꜰᴜꜱᴇᴅ*
▫ *.ᴋɪꜱꜱ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ғᴜɴ: 14*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                       break;
                    case '9':               
                        reply(`9️⃣ 𝗔𝗡𝗜𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴡᴀɪғᴜ*
▫ *.ɴᴇᴋᴏ*
▫ *.ᴍᴇɢᴜᴍɪɴ*
▫ *.ᴍᴀɪᴅ*
▫ *.ᴀᴡᴏᴏ*
▫ *.ʟᴏʟɪ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴄᴏɴᴠᴇʀᴛ: 6*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);
                        break;
                    case '10':               
                        reply(`🔟 𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

▫ *.ᴛʀᴛ*
▫ *.ᴀɴɪᴍᴇ*
▫ *.ᴍᴏᴠɪᴇ*
▫ *.ɢɪᴛ*
▫ *.ɢᴘᴀꜱꜱ*
▫ *.ǫᴜᴏᴛᴇ*
▫ *.ғᴀɴᴄʏ*
▫ *.ᴅᴇꜰɪɴᴇ*
▫ *.ᴜʀʟ*
▫ *.sᴀᴠᴇ*

◻️ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏꜰ ᴏᴛʜᴇʀ 10*

> *ꜱɪʟᴠᴀ ᴍᴅ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
