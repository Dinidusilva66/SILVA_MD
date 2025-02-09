/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

function hi() {
  console.log("connecting... SILVA-MD");
}
hi();
const {
  fetchJson
} = require('../lib/functions');
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const {
  facebook
} = require('@mrnima/facebook-downloader');
const cheerio = require("cheerio");
const {
  igdl
} = require("ruhend-scraper");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
const {
  sinhalaSub
} = require("mrnima-moviedl");
cmd({
  'pattern': "slsub",
  'alias': ['movie'],
  'react': '🎥',
  'category': "download",
  'desc': "Search movies on sinhalasub and get download links",
  'filename': __filename
}, async (_0x2bc69a, _0x38095e, _0x39354f, {
  from: _0x2958ae,
  q: _0x3ff8b3,
  reply: _0x26d7d6
}) => {
  try {
    if (!_0x3ff8b3) {
      return await _0x26d7d6("*Please provide a search query! (e.g., Deadpool)*");
    }
    var _0x12e4b7 = await sinhalaSub();
    const _0x4698e5 = await _0x12e4b7.search(_0x3ff8b3);
    const _0x8d5c1 = _0x4698e5.result.slice(0x0, 0xa);
    if (!_0x8d5c1 || _0x8d5c1.length === 0x0) {
      return await _0x26d7d6("No results found for: " + _0x3ff8b3);
    }
    let _0x3c237b = "📽️ *Search Results for* \"" + _0x3ff8b3 + "\":\n\n";
    _0x8d5c1.forEach((_0x3911aa, _0x3da105) => {
      _0x3c237b += '*' + (_0x3da105 + 0x1) + ".* " + _0x3911aa.title + "\n🔗 Link: " + _0x3911aa.link + "\n\n";
    });
    const _0x2e742f = await _0x2bc69a.sendMessage(_0x2958ae, {
      'text': _0x3c237b
    }, {
      'quoted': _0x39354f
    });
    const _0x7e6837 = _0x2e742f.key.id;
    _0x2bc69a.ev.on("messages.upsert", async _0x275eb7 => {
      const _0x377e4f = _0x275eb7.messages[0x0];
      if (!_0x377e4f.message) {
        return;
      }
      const _0x55a6bf = _0x377e4f.message.conversation || _0x377e4f.message.extendedTextMessage?.['text'];
      const _0x36d641 = _0x377e4f.message.extendedTextMessage && _0x377e4f.message.extendedTextMessage.contextInfo.stanzaId === _0x7e6837;
      if (_0x36d641) {
        const _0x5cdff7 = parseInt(_0x55a6bf.trim());
        if (!isNaN(_0x5cdff7) && _0x5cdff7 > 0x0 && _0x5cdff7 <= _0x8d5c1.length) {
          const _0x52d441 = _0x8d5c1[_0x5cdff7 - 0x1];
          const _0x128dad = 'https://api-site-2.vercel.app/api/sinhalasub/movie?url=' + encodeURIComponent(_0x52d441.link);
          try {
            const _0x34711e = await axios.get(_0x128dad);
            const _0x2a3f0b = _0x34711e.data.result;
            const _0x445770 = _0x2a3f0b.dl_links || [];
            if (_0x445770.length === 0x0) {
              return await _0x26d7d6("No PixelDrain links found.");
            }
            let _0x12b4eb = "🎥 *" + _0x2a3f0b.title + "*\n\n";
            _0x12b4eb += "*Available PixelDrain Download Links:*\n";
            _0x445770.forEach((_0x225381, _0x3ab260) => {
              _0x12b4eb += '*' + (_0x3ab260 + 0x1) + ".* " + _0x225381.quality + " - " + _0x225381.size + "\n🔗 Link: " + _0x225381.link + "\n\n";
            });
            const _0x3fa690 = await _0x2bc69a.sendMessage(_0x2958ae, {
              'text': _0x12b4eb
            }, {
              'quoted': _0x377e4f
            });
            const _0x1bed6e = _0x3fa690.key.id;
            _0x2bc69a.ev.on("messages.upsert", async _0x361530 => {
              const _0x328f48 = _0x361530.messages[0x0];
              if (!_0x328f48.message) {
                return;
              }
              const _0x425161 = _0x328f48.message.conversation || _0x328f48.message.extendedTextMessage?.["text"];
              const _0x157370 = _0x328f48.message.extendedTextMessage && _0x328f48.message.extendedTextMessage.contextInfo.stanzaId === _0x1bed6e;
              if (_0x157370) {
                const _0x591037 = parseInt(_0x425161.trim());
                if (!isNaN(_0x591037) && _0x591037 > 0x0 && _0x591037 <= _0x445770.length) {
                  const _0x386b23 = _0x445770[_0x591037 - 0x1];
                  const _0x54184a = _0x386b23.link.split('/').pop();
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '⬇️',
                      'key': _0x39354f.key
                    }
                  });
                  const _0x2807b1 = "https://pixeldrain.com/api/file/" + _0x54184a;
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '⬆',
                      'key': _0x39354f.key
                    }
                  });
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'document': {
                      'url': _0x2807b1
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2a3f0b.title + " - " + _0x386b23.quality + ".mp4",
                    'caption': _0x2a3f0b.title + "\nQuality: " + _0x386b23.quality + "\nPowered by SinhalaSub",
                    'contextInfo': {
                      'mentionedJid': [],
                      'externalAdReply': {
                        'title': _0x2a3f0b.title,
                        'body': "Download powered by MALVIN-ai",
                        'mediaType': 0x1,
                        'sourceUrl': _0x52d441.link,
                        'thumbnailUrl': _0x2a3f0b.image
                      }
                    }
                  }, {
                    'quoted': _0x328f48
                  });
                  await _0x2bc69a.sendMessage(_0x2958ae, {
                    'react': {
                      'text': '✅',
                      'key': _0x39354f.key
                    }
                  });
                } else {
                  await _0x26d7d6("Invalid selection. Please reply with a valid number.");
                }
              }
            });
          } catch (_0x292fe9) {
            console.error("Error fetching movie details:", _0x292fe9);
            await _0x26d7d6("An error occurred while fetching movie details. Please try again.");
          }
        } else {
          await _0x26d7d6("Invalid selection. Please reply with a valid number.");
        }
      }
    });
  } catch (_0x574d62) {
    console.error("Error during search:", _0x574d62);
    _0x26d7d6("*An error occurred while searching!*");
  }
});
