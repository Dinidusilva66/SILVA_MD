/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "⚙️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ*

     *${pushname}*,

■ *ʀᴜɴᴛɪᴍᴇ* ➜ ${runtime(process.uptime())}
■ *ʜᴏsᴛɴᴀᴍᴇ* ➜ *[${os.hostname()}]*
■ *ʀᴀᴍ ᴜsᴇ* ➜ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
■ *ɴᴀᴍᴇ ʙᴏᴛ* ➜ *ꜱɪʟᴠᴀ ᴍᴅ*

> *ꜱɪʟᴠᴀ ᴍᴅ*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
