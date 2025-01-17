
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

*ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ 👋*

     *${pushname}*

 *_ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ꜱɪʟᴠᴀ ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ_*

> *\`ᴛʜᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ | ꜱɪʟᴠᴀ ᴍᴅ\` 👨🏻‍💻*


*▫* *\`ʀᴜɴᴛɪᴍᴇ\`* : *${runtime(process.uptime())}*
*▫* *\`ᴍᴏᴅᴇ\`* : *${config.MODE}*
*▫* *\`ᴘʀᴇғɪx\`* : *${config.PREFIX}*
*▫* *\`ʀᴀᴍ ᴜsᴇ\`* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*▫* *\`ɴᴀᴍᴇ ʙᴏᴛ\`* : *ꜱɪʟᴠᴀ ᴍᴅ*
*▫* *\`ᴄʀᴇᴀᴛᴏʀ\`* : *ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ | ᴛʜᴇ ᴍʏꜱᴛᴀʀɪᴏᴜꜱ ᴄᴏᴅᴇʀ*
*▫* *\`ᴠᴇʀsɪᴏɴs\`* : *ᴠ.2.0.0*
*▫* *\`ᴍᴇɴᴜ ᴄᴍᴅ\`* : *ᴍᴇɴᴜ ʟɪsᴛ*

*_𝗔𝗟𝗟 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦_*

𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴏᴡɴᴇʀ*
■ *.ʀᴇᴘᴏ*
■ *.ꜱʏꜱᴛᴇᴍ*
■ *.ʙʟᴏᴄᴋ*
■ *.ᴜɴʙʟᴏᴄᴋ*
■ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
■ *.sᴇᴛᴘᴘ*
■ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
■ *.ᴊɪᴅ*
■ *.ɢᴊɪᴅ*
■ *.ʀᴇꜱᴛᴀʀᴛ*

𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴄᴏɴᴠᴇʀᴛ* 
■ *.ss* 

𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴀɪ* 

𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴘʟᴀʏ* 
■ *.ᴠɪᴅᴇᴏ* 
■ *.ʏᴛ  <ᴛᴇxᴛ>*
■ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
■ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
■ *.ɪᴍɢ <ᴛᴇxᴛ>*
■ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*

𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴀᴘᴋ* 
■ *.ᴛᴡɪᴛᴛᴇʀ* 
■ *.ɢᴅʀɪᴠᴇ* 
■ *.ᴍᴇᴅɪᴀғɪʀᴇ* 
■ *.ғʙ*
■ *.ɪɢ* 
■ *.ᴍᴏᴠɪᴇ*
■ *.sᴏɴɢ* 
■ *.ᴠɪᴅᴇᴏ* 
■ *.ᴠɪᴅᴇᴏ2*
■ *.ᴠɪᴅᴇᴏ3*
■ *.ᴠɪᴅᴇᴏ4*
■ *.ᴘʟᴀʏ*
■ *.ᴘʟᴀʏ2*
■ *.ᴘʟᴀʏ3*
■ *.ᴘʟᴀʏ4*
■ *.ʏᴛ*
■ *.ʏᴛᴍᴘ3*
■ *.ʏᴛᴍᴘ4*
■ *.ᴛᴛ/ ᴛɪᴋᴛᴏᴋ* 
■ *.ɪᴍɢ* 

𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴀʟɪᴠᴇ* 
■ *.ᴍᴇɴᴜ* 
■ *.ᴀʟʟᴍᴇɴᴜ* 
■ *.sᴜᴘᴘᴏʀᴛ* 
■ *.sʏsᴛᴇᴍ* 
■ *.ᴘɪɴɢ* 
■ *.ʀᴜɴᴛɪᴍᴇ* 
■ *.ᴜᴘᴅᴀᴛᴇ*

𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴘʀɪᴍᴏᴛᴇ* 
■ *.ᴅᴇᴍᴏᴛᴇ* 
■ *.ᴋɪᴄᴋ* 
■ *.ᴋɪᴄᴋᴀʟʟ*
■ *.ᴀᴅᴅ* 
■ *.ᴀᴅᴍɪɴs* 
■ *.ɢᴇᴛᴘɪᴄ* 
■ *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
■ *.sᴇᴛɢᴏᴏᴅʙʏᴇ* 
■ *.ᴘᴏʟʟ*
■ *.ɢɴᴀᴍᴇ* 
■ *.ᴛᴀɢᴀʟʟ* 
■ *.ᴛᴀɢᴀᴅᴍɪɴ* 
■ *.ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
■ *.ɢɪɴғᴏ* 
■ *.ɢʟɪɴᴋ*
■ *.ᴜɴʟᴏᴄᴋ*
■ *.ʟᴏᴄᴋ*
■ *.ᴍᴜᴛᴇ*
■ *.ᴜɴᴍᴜᴛᴇ*
■ *.ɢᴅᴇsᴄ*
■ *.sᴇᴛsᴜʙᴊᴇᴄᴛ*

𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ғᴀᴄᴛ* 
■ *.ʜᴀᴄᴋ*  
■ *.ʟᴏʟɪ* 

𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦

■ *.ᴛʀᴛ*
■ *.ᴍᴏᴠɪᴇ*
■ *.ɢꜱᴛᴀʟᴋ*
■ *.ɢᴘᴀꜱꜱ*
■ *.ɢɪᴛᴄʟᴏɴᴇ
■ *.ʀᴇᴘᴏ*
■ *.ғᴀɴᴄʏ
■ *.ᴜʀʟ*
■ *.sᴀᴠᴇ*

📄 *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 100+*

> *ꜱɪʟᴠᴀ ᴍᴅ*`

await conn.sendMessage(from,{image:{url:config.MENU_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
