const {
  cmd,
  commands
} = require("../command");
const yts = require('yt-search');
const fg = require("api-dylux");
cmd({
  'pattern': "song",
  'desc': "download songs",
  'react': '🎶',
  'category': "download",
  'filename': __filename
}, async (_0x3fec02, _0x3a54d0, _0x85693, {
  from: _0x425f3d,
  quoted: _0x1718eb,
  body: _0x31fd60,
  isCmd: _0xe5015f,
  command: _0x2e1287,
  args: _0xed9e0f,
  q: _0x2525d9,
  isGroup: _0x42eee6,
  sender: _0x1023da,
  senderNumber: _0x4f2a18,
  botNumber2: _0x27ff61,
  botNumber: _0x1523d7,
  pushname: _0x1352d4,
  isMe: _0x51dc38,
  isOwner: _0x4c196b,
  groupMetadata: _0x18d8b3,
  groupName: _0x38b54a,
  participants: _0x368e3a,
  groupAdmins: _0x43820b,
  isBotAdmins: _0x6d591,
  isAdmins: _0x487d1e,
  reply: _0x1410a8
}) => {
  try {
    if (!_0x2525d9) {
      return _0x1410a8("Please enter a query or a url !");
    }
    const _0x49d75d = await yts(_0x2525d9);
    const _0x3c4c34 = _0x49d75d.videos[0x0];
    const _0x4eec75 = _0x3c4c34.url;
    let _0x2af018 = `*🎼 🄽🄰🄳🄴🄴🄽 🄼🄳 🅂🄾🄽🄶 🄳🄾🅆🄽🄻🄾🄰🄳🄴🅁 . .⚙*

🎼⚙ *TITLE:* *${_0x3c4c34.title}*

🎼⚙ *VIEWS:* *${_0x3c4c34.views}*

🎼⚙ *DESCRIPTION:*  
*${_0x3c4c34.description}*

🎼⚙ *TIME:* *${_0x3c4c34.timestamp}*

🎼⚙ *AGO:* *${_0x3c4c34.ago}*

Reply This Message With Option:

1. Audio With Normal Format  
2. Audio With Document Format

*©𝗡𝗔𝗗𝗘𝗘𝗡 𝗠𝗗*`;
    const _0x533f92 = await _0x3fec02.sendMessage(_0x425f3d, {
      'image': {
        'url': _0x3c4c34.thumbnail
      },
      'caption': _0x2af018
    }, {
      'quoted': _0x3a54d0
    });
    _0x3fec02.ev.on("messages.upsert", async _0x560c86 => {
      const _0x381d53 = _0x560c86.messages[0x0];
      if (!_0x381d53.message || !_0x381d53.message.extendedTextMessage) {
        return;
      }
      const _0xe81cde = _0x381d53.message.extendedTextMessage.text.trim();
      if (_0x381d53.message.extendedTextMessage.contextInfo && _0x381d53.message.extendedTextMessage.contextInfo.stanzaId === _0x533f92.key.id) {
        switch (_0xe81cde) {
          case '1':
            let _0x459b41 = await fg.yta(_0x4eec75);
            let _0x49bbb3 = _0x459b41.dl_url;
            await _0x3fec02.sendMessage(_0x425f3d, {
              'audio': {
                'url': _0x49bbb3
              },
              'caption': "©ɴᴀᴅᴇᴇɴ -ᴍᴅ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀッ",
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x3a54d0
            });
            break;
          case '2':
            let _0x32181d = await fg.yta(_0x4eec75);
            let _0x2b714d = _0x32181d.dl_url;
            await _0x3fec02.sendMessage(_0x425f3d, {
              'document': {
                'url': _0x2b714d
              },
              'caption': "©ɴᴀᴅᴇᴇɴ ᴍᴅ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ",
              'mimetype': "audio/mpeg",
              'fileName': _0x3c4c34.title + ".mp3"
            }, {
              'quoted': _0x3a54d0
            });
            await _0x3fec02.sendMessage(_0x425f3d, {
              'react': {
                'text': '✅',
                'key': _0x3a54d0.key
              }
            });
            break;
          default:
            _0x1410a8("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x41d16c) {
    console.error(_0x41d16c);
    await _0x3fec02.sendMessage(_0x425f3d, {
      'react': {
        'text': '❌',
        'key': _0x3a54d0.key
      }
    });
    _0x1410a8("An error occurred while processing your request.");
  }
});