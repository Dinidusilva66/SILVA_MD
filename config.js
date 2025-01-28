
/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MALVIN-XMD~g84W2SJD#Z9oA-59JJr9Pc4DfCHiRC7HNuverYdfZt6ExZwm1czQ",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌 status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌 if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*ꜱᴛᴀᴛᴜꜱ ꜱᴇᴇɴ ʙʏ ꜱɪʟᴠᴀ ᴍᴅ*",
// set the auto reply massage on status reply  

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "SILVA MD",
// add bot namw here for menu

STICKER_NAME: process.env.STICKER_NAME || "SILVA MD",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💘,💞,💕,❣️,💔,❤️‍🔥,💐,🌸,💮,🪷,🏵️,🌹,🌺,🌻,🌼,🌷,🎉,🪀,🧸,🎉,",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "94710164941",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "SILVA MD | DINIDU SILVA",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "*ꜱɪʟᴠᴀ ᴍᴅ*",
// add bot owner name 

MENU_IMG: process.env.MENU_IMG || "https://envs.sh/HLh.jpg",
//Don't change menu image ⚠️

ALIVE_IMG: process.env.ALIVE_IMG || "https://envs.sh/HLh.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> *ꜱɪʟᴠᴀ ᴍᴅ ɪꜱ ᴀʟɪᴠᴇ*",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
//  1📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_STICKER: process.env.AUTO_STICKER || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_REPLY: process.env.AUTO_REPLY || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_TYPING: process.env.AUTO_TYPING || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

READ_CMD: process.env.READ_CMD || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

OMDB_API_KEY: process.env.OMDB_API_KEY || "a42f2b5", 
//📌 𝘆𝗼𝘂 𝗰𝗮𝗻 𝗴𝗲𝘁 𝘆𝗼𝘂𝗿 𝗸𝗲𝘆 𝗳𝗿𝗼𝗺 𝗼𝗺𝗱𝗯.𝗰𝗼𝗺 📌

DATABASE_URL: process.env.DATABASE_URL || 'postgres://movie_my_user:BDXztL7cmv1gV26b9eCsAseSMp7tqyvW@dpg-co1n7jvsc6pc73ctrku0-a.oregon-postgres.render.com/movie_my',

JID: process.env.JID || '94726068280@s.whatsapp.net',

FOOTER: process.env.FOOTER || 'TC TEAM MOVIE DL',
};
