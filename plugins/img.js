/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/



const _0x4e1bf7=_0xcd01;(function(_0x48c56c,_0x34d3df){const _0x4bd745=_0xcd01,_0x5783a=_0x48c56c();while(!![]){try{const _0x329a07=parseInt(_0x4bd745(0x1a2))/0x1*(-parseInt(_0x4bd745(0x1a6))/0x2)+-parseInt(_0x4bd745(0x1a7))/0x3+parseInt(_0x4bd745(0x191))/0x4*(parseInt(_0x4bd745(0x18d))/0x5)+parseInt(_0x4bd745(0x18e))/0x6*(-parseInt(_0x4bd745(0x19e))/0x7)+parseInt(_0x4bd745(0x189))/0x8*(-parseInt(_0x4bd745(0x1a5))/0x9)+-parseInt(_0x4bd745(0x188))/0xa+parseInt(_0x4bd745(0x195))/0xb*(parseInt(_0x4bd745(0x1a0))/0xc);if(_0x329a07===_0x34d3df)break;else _0x5783a['push'](_0x5783a['shift']());}catch(_0x4b3958){_0x5783a['push'](_0x5783a['shift']());}}}(_0x2ab7,0xcc09a));function _0xcd01(_0x518b96,_0xaeb532){const _0x2ab7af=_0x2ab7();return _0xcd01=function(_0xcd01f2,_0x1a0e33){_0xcd01f2=_0xcd01f2-0x188;let _0x42b4ae=_0x2ab7af[_0xcd01f2];return _0x42b4ae;},_0xcd01(_0x518b96,_0xaeb532);}function hi(){const _0x1da0e7=_0xcd01;console[_0x1da0e7(0x196)]('Hello\x20World!');}hi();function _0x2ab7(){const _0x4c7f6d=['image','644847jXkvdb','images_url','15548916uXcPmb','```©\x20Gᴇɴᴇʀᴀᴛᴇᴅ\x20ʙʏ\x20ᴍᴀʟᴠɪɴ\x20xᴍᴅ🚀```','67GtjDyv','pinimg','*Please\x20provide\x20search\x20keywords\x20for\x20the\x20image.\x20Eg\x20Subzero*','7512957xaSQia','4362cquLLe','4779549hbaHix','min','❌\x20An\x20error\x20occurred\x20while\x20processing\x20your\x20request.','join','9673790NBjRbf','16aFuzWK','pinterest','img','length','1957180QGpKLG','108OPXVab','.img\x20<keywords>','❌\x20No\x20images\x20found\x20for\x20\x22','4RlyezA','axios','🖼️','result','55yPlAdG','log','...*','sendMessage','https://apitest1-f7dcf17bd59b.herokuapp.com/download/piniimg?text=','data','get','❌\x20No\x20valid\x20image\x20URLs\x20found\x20in\x20the\x20results.'];_0x2ab7=function(){return _0x4c7f6d;};return _0x2ab7();}const {cmd,commands}=require('../command'),axios=require(_0x4e1bf7(0x192));cmd({'pattern':_0x4e1bf7(0x18b),'alias':[_0x4e1bf7(0x19d),_0x4e1bf7(0x18a),_0x4e1bf7(0x1a3)],'react':_0x4e1bf7(0x193),'desc':'Search\x20and\x20download\x20images\x20from\x20Pinterest\x20using\x20keywords.','category':_0x4e1bf7(0x19d),'use':_0x4e1bf7(0x18f),'filename':__filename},async(_0x2e2074,_0x2ab1e2,_0x1a7c4d,{from:_0x5bc900,args:_0x14015c,reply:_0x446460})=>{const _0x20ad22=_0x4e1bf7;try{const _0x4fbc0c=_0x14015c[_0x20ad22(0x1aa)]('\x20');if(!_0x4fbc0c)return _0x446460(_0x20ad22(0x1a4));_0x446460('*🔍\x20Showing\x20Results\x20For\x20-\x20'+_0x4fbc0c+_0x20ad22(0x197));const _0xd9f91=_0x20ad22(0x199)+encodeURIComponent(_0x4fbc0c),_0x22f8e9=await axios[_0x20ad22(0x19b)](_0xd9f91);if(!_0x22f8e9[_0x20ad22(0x19a)]||!_0x22f8e9[_0x20ad22(0x19a)][_0x20ad22(0x194)]||_0x22f8e9[_0x20ad22(0x19a)][_0x20ad22(0x194)][_0x20ad22(0x18c)]===0x0)return _0x446460(_0x20ad22(0x190)+_0x4fbc0c+'\x22.');const _0x5d4e19=_0x22f8e9[_0x20ad22(0x19a)][_0x20ad22(0x194)];for(let _0x23faa0=0x0;_0x23faa0<Math[_0x20ad22(0x1a8)](_0x5d4e19[_0x20ad22(0x18c)],0x5);_0x23faa0++){const _0x5e0876=_0x5d4e19[_0x23faa0];_0x5e0876[_0x20ad22(0x19f)]&&await _0x2e2074[_0x20ad22(0x198)](_0x5bc900,{'image':{'url':_0x5e0876['images_url']},'caption':_0x20ad22(0x1a1)},{'quoted':_0x2ab1e2});}_0x5d4e19['every'](_0x54fc16=>!_0x54fc16[_0x20ad22(0x19f)])&&_0x446460(_0x20ad22(0x19c));}catch(_0x5c9ebc){console['error'](_0x5c9ebc),_0x446460(_0x20ad22(0x1a9));}});


/*const { cmd } = require('../command');
const axios = require('axios');
const { Buffer } = require('buffer');

const GOOGLE_API_KEY = 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI'; // Replace with your Google API key
const GOOGLE_CX = 'baf9bdb0c631236e5'; // Replace with your Google Custom Search Engine ID
//const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
// const cx = "baf9bdb0c631236e5"; /
cmd({
    pattern: "img",
    desc: "Search and send images from Google.",
    react: "🖼️",
    category: "media",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a search query for the image.");

        // Fetch image URLs from Google Custom Search API
        const searchQuery = encodeURIComponent(q);
        const url = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&cx=${GOOGLE_CX}&key=${GOOGLE_API_KEY}&searchType=image&num=5`;
        
        const response = await axios.get(url);
        const data = response.data;

        if (!data.items || data.items.length === 0) {
            return reply("No images found for your query.");
        }

        // Send images
        for (let i = 0; i < data.items.length; i++) {
            const imageUrl = data.items[i].link;

            // Download the image
            const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(imageResponse.data, 'binary');

            // Send the image with a footer
            await conn.sendMessage(from, {
                image: buffer,
                caption: `
*💗 Image ${i + 1} from your search! 💗*

 *©  ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴍᴅ! 👾*

> 🚀 ᴍᴀʟᴠɪɴ xᴍᴅ ɴᴇxᴜs 🚀`
}, { quoted: mek });
}

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
*/
