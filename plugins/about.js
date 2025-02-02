/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["king"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `╭┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*👋 ʜᴇʟʟᴏ ᴜsᴇʀ ${pushname}*\n\n *ɪ ᴀᴍ ᴍᴀʟᴠɪɴ xᴍᴅ*\n\n
  ɪ ᴀᴍ  ᴡʜᴀᴛsᴀᴘᴘ ʙᴀsᴇᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ғʀᴏᴍ ᴢɪᴍʙᴀʙᴡᴇ.\nᴍʏ sᴏʟᴇ ᴘᴜʀᴘᴏsᴇ ɪs ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴜʀᴅᴇɴ ᴏʀ ᴄᴏsᴛ ᴏғ ᴘᴜʀᴄʜᴜsɪɴɢ ᴅᴀᴛᴀ ʙᴜɴᴅʟᴇ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢs, ᴀᴘᴘs, ᴠɪᴅᴇᴏs & ᴍᴏᴠɪᴇs ʙʏ  ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ  ʙᴜɴᴅʟᴇs.
\n\n *ғᴏʀ ᴍᴏʀᴇ ɪɴғᴏʀ ᴠɪsɪᴛ.....
     ─┄┄┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┄┄─

> *SOURCE CODE* : https://github.com/kingmalvn/MALVIN-XMD

> *FOLLOW OWNER* :https://github.com/kingmalvin/

> *OWNER'S WHATSAPP* : https://wa.me/263714757857/?text=ᴍᴀʟᴠɪɴ-xᴍᴅ+Fan+Here

> *maintained by* :
https://wa.me/263780166288/?text=ᴍᴀʟᴠɪɴ-xᴍᴅ+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *FOLLOW INSTAGRAM* :https://instagram.com/malvinking20/

> *FOLLOW OWNER* :https://youtube.com/@malvintech2/

 *RELEASE DATE* - *9 ᴊᴀɴᴜᴀʀʏ 2025*
 
> *ʟᴏʀᴅ ᴍᴀʟᴠɪɴ*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
