
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
const axios = require('axios')

cmd({

    pattern: "allmenu",

    react: "📄",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.allmenu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

 *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍᴀʟᴠɪɴ xᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ👨🏻‍💻*


*🔺* *\`ʀᴜɴᴛɪᴍᴇ\`* : ${runtime(process.uptime())}
*🔺* *\`ᴍᴏᴅᴇ`\* : *[${config.MODE}]*
*🔺* *\`ᴘʀᴇғɪx`\* : *[${config.PREFIX}]*
*🔺* *\`ʀᴀᴍ ᴜsᴇ`\* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🔺* *\`ɴᴀᴍᴇ ʙᴏᴛ`\* : *❖ᴍᴀʟᴠɪɴ xᴍᴅ❖*
*🔺* *\`ᴄʀᴇᴀᴛᴏʀ`\* : *➺ᴍᴀʟᴠɪɴ ᴋɪɴɢ*
*🔺* *\`ᴠᴇʀsɪᴏɴs`\* : *ᴠ.2.0.0*
*🔺* *\`ᴍᴇɴᴜ ᴄᴍᴅ`\* : *ᴍᴇɴᴜ ʟɪsᴛ*

*♡︎•━━━ᴀʟʟ ᴍᴇɴᴜ ᴄᴏᴍᴍᴀɴᴅs━━━•♡︎*

꧁◈╾ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭───────────────
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

꧁◈╾ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂

╭─────────────
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ss* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

꧁*◈╾ 𝙰𝙸 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ☻ *ᴀɪ* 
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

*꧁◈╾ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭──────── ────
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

*꧁◈ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ2*
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴇᴏ4*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏ4*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛᴛ/ ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ɪᴍɢ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾ 𝙼𝙰𝙸𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾ 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ☛ *ᴘʀɪᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*꧁◈╾ 𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

*꧁◈╾ 𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 ╼◈꧂*

╭────────────
┋ ☻ *.ᴛʀᴛ*
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢꜱᴛᴀʟᴋ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ғᴀɴᴄʏ
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 100+*

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜッ
`

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
