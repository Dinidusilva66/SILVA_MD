/*
CREDIT ⦂▹ MR SUPUN FERNANDO
CREDIT ⦂▹ DARK SHADOW MODZ
CHANNEL ⦂▹ https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

Don't Remove Credit😒💔

**/


const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const {cmd , commands} = require('../command')

//============= SUPUN MD MENU ==============

cmd({
    pattern: "owner",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let pan = `> *ꜱɪʟᴠᴀ ᴍᴅ ᴏᴡɴᴇʀ | ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ`;
const url = "https://i.ibb.co/b6krzb5/file-4-Xo-Dgc-ZCG2y-Ucg-LY3n-Xqn-F.webp"
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/b6krzb5/file-4-Xo-Dgc-ZCG2y-Ucg-LY3n-Xqn-F.webp' } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'SUPUN FERNANDO',
          hasMediaAttachment: false
        }),
                body: {
                  text: `ᴄʟɪᴄᴋ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ ꜰᴏʀ ᴛʜᴇ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ ᴏꜰ ꜱɪʟᴠᴀ ᴍᴅ | ᴅɪɴɪᴅᴜ ꜱɪʟᴠᴀ`
                },
                nativeFlowMessage: {
                  buttons: [
             {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"THE OWNER","url":"https://wa.me/94710164941?text=Hy","merchant_url":"https://wa.me/94710164941?text=Hy"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

/*
FIRST CREDIT BY SUPUN FERNANDO
OWNER OF DARK SHADOW MODZ

Don't Remove Credit 😒💥
**/
