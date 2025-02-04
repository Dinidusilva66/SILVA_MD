
/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

cmd({
    pattern: "ytmp3",
    desc: "To download songs.",
    react: "🔊",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
    try {
        if (!q) return reply("Please give me a URL or title.");

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
┏━━━━━━━━━━━━━━━┓
 *SILVA MD SONG DOWNLOADER*
┗━━━━━━━━━━━━━━━┛
┣ *Title:* ${data.title}
┣ *Duration:* ${data.timestamp}
┣ *Views:* ${data.views}
┣ *Uploaded:* ${data.ago}
┣ *Link:* ${data.url}
┗━━━━━━━━━━━━━━━┛
        `;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download audio
        const down = await fg.yta(url);
        console.log(down); // Debugging

        if (!down || !down.dl_url) {
            return reply("❌ Download link not found. Please try another song.");
        }

        const downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "> *ꜱɪʟᴠᴀ ᴍᴅ*" }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message || e}`);
    }
});

//====================video_dl=======================

cmd({
    pattern: "ytmp4",
    alias: ["video3"],
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
┏━━━━━━━━━━━━━━━┓
 *ꜱɪʟᴠᴀ ᴍᴅ sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
┗━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━┓
┣ *ᴛɪᴛʟᴇ ➜* *${data.title}* 
┣ *ᴅᴜʀᴀᴛɪᴏɴ ➜* *${data.timestamp}* 
┣ *ᴠɪᴇᴡs ➜* *${data.views}* 
┣ *ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ ➜* *${data.ago}* 
┣ *ʟɪɴᴋ ➜* *${data.url}*
┗━━━━━━━━━━━━━━━┛

> *ꜱɪʟᴠᴀ ᴍᴅ*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍaʟᴠɪɴ ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('${e}')
}
})
