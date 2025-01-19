/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "info",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*┏━━━━━━━━━━━━━┓*
*👋 ʜᴇʟʟᴏ ${pushname}*
*┗━━━━━━━━━━━━━┛*
 
┏━━━━━━━━━━━━━━┓
┃       𝗠𝗬 𝗜𝗡𝗧𝗥𝗢
┃
┣ Name    ➜ ᴍʀ ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ
┣ Place   ➜ ꜱʀɪ ʟᴀɴᴋᴀ
┣ Gender  ➜ ᴍᴀʟᴇ
┣ Age     ➜ ᴜɴʟɪᴍɪᴛᴇᴅ
┣ Status  ➜ ᴅᴇᴠᴇʟᴏᴘᴇʀ
┣ Phone   ➜ wa.me/94710164941
┣ IG ID   ➜ undefined 
┣ Connect ➜ undefined 
┣ Github  ➜ kingmalvin
┣ Website ➜ undefined 
┃
┗━━━━━━━━━━━━━┛

> *ꜱɪʟᴠᴀ ᴍᴅ*
`

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
