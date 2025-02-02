const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "🫂",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 ʜᴇʟʟᴏ ${pushname}*
          
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ (🇱🇰)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *1.0.0* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

> *ꜱɪʟᴠᴀ ᴍᴅ*

${readMore}
*ᴍʀ ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ*
wa.me/94710164941?text=ꜱᴜᴘʟᴏʀᴛ+ᴇᴋᴀᴋ+ᴏɴᴇ+ʙɴ

> *ꜱɪʟᴠᴀ ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://envs.sh/HLh.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
