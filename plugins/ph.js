const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const axios = require("axios");
const { fetchJson } = require('../lib/functions');

cmd({
  'pattern': "phub",
  'alias': ["phubdl"],
  'react': '🔞',
  'desc': "Search and download Pornhub videos",
  'category': "download",
  'use': ".phub <search query>",
  'filename': __filename
}, async (_0x242f4c, _0x433e7d, _0x1439e9, {
  from: _0xbaf07d,
  args: _0x565e1b,
  reply: _0x57ce9c
}) => {
  try {
    const _0x4c2289 = _0x565e1b.join(" ");
    if (!_0x4c2289) {
      return await _0x57ce9c("Please provide a search query.");
    }
    await _0x242f4c.sendMessage(_0xbaf07d, {
      'react': {
        'text': '🔍',
        'key': _0x433e7d.key
      }
    });
    const _0x3ffa29 = await axios.get('https://www.dark-yasiya-api.site/search/phub?q=' + encodeURIComponent(_0x4c2289));
    if (!_0x3ffa29.data.status || !_0x3ffa29.data.result || _0x3ffa29.data.result.length === 0x0) {
      return await _0x242f4c.sendMessage(_0xbaf07d, {
        'text': "No videos found or API error."
      }, {
        'quoted': _0x433e7d
      });
    }
    const _0x42cdda = _0x3ffa29.data.result.slice(0x0, 0xa);
    let _0x22d7c8 = "*🔞 PORNHUB VIDEO SEARCH RESULTS*\n\n";
    _0x42cdda.forEach((_0x14e721, _0x569728) => {
      _0x22d7c8 += _0x569728 + 0x1 + ". *" + _0x14e721.title + "*\n🔗 [Link](" + _0x14e721.url + ")\n\n";
    });
    _0x22d7c8 += "Reply with the number of the video you want to download.";
    const _0x2a32fa = await _0x242f4c.sendMessage(_0xbaf07d, {
      'text': _0x22d7c8,
      'quoted': _0x433e7d
    });
    _0x242f4c.ev.on('messages.upsert', async _0x559154 => {
      const _0x59ccff = _0x559154.messages[0x0];
      if (!_0x59ccff.message || !_0x59ccff.message.extendedTextMessage) {
        return;
      }
      const _0x45e10b = _0x59ccff.message.extendedTextMessage.text.trim();
      const _0x110835 = _0x59ccff.message.extendedTextMessage.contextInfo;
      if (_0x110835 && _0x110835.stanzaId === _0x2a32fa.key.id) {
        const _0xc2e6f5 = parseInt(_0x45e10b) - 0x1;
        if (isNaN(_0xc2e6f5) || _0xc2e6f5 < 0x0 || _0xc2e6f5 >= _0x42cdda.length) {
          return await _0x242f4c.sendMessage(_0xbaf07d, {
            'text': "Please enter a valid number corresponding to a video."
          }, {
            'quoted': _0x59ccff
          });
        }
        const _0x341862 = _0x42cdda[_0xc2e6f5];
        try {
          const _0x366ed9 = await axios.get("https://www.dark-yasiya-api.site/download/phub?url=" + encodeURIComponent(_0x341862.url));
          if (!_0x366ed9.data.status || !_0x366ed9.data.result || !_0x366ed9.data.result.format || _0x366ed9.data.result.format.length === 0x0) {
            return await _0x242f4c.sendMessage(_0xbaf07d, {
              'text': "Failed to fetch download options."
            }, {
              'quoted': _0x59ccff
            });
          }
          const _0x3bd503 = _0x366ed9.data.result.format;
          let _0x10b3d3 = "*🔞 DOWNLOAD OPTIONS FOR:*\n*" + _0x366ed9.data.result.video_title + "*\n\n";
          _0x3bd503.forEach((_0x1a55c5, _0x52d055) => {
            _0x10b3d3 += _0x52d055 + 0x1 + ". *" + _0x1a55c5.resolution + "p*\n\n";
          });
          _0x10b3d3 += "Reply with the number of the quality you want to download.";
          const _0x242d3e = await _0x242f4c.sendMessage(_0xbaf07d, {
            'text': _0x10b3d3,
            'quoted': _0x59ccff
          });
          _0x242f4c.ev.on("messages.upsert", async _0xdb365e => {
            const _0x38f21f = _0xdb365e.messages[0x0];
            if (!_0x38f21f.message || !_0x38f21f.message.extendedTextMessage) {
              return;
            }
            const _0x3d36ea = _0x38f21f.message.extendedTextMessage.text.trim();
            const _0x5475fa = _0x38f21f.message.extendedTextMessage.contextInfo;
            if (_0x5475fa && _0x5475fa.stanzaId === _0x242d3e.key.id) {
              const _0x47005 = parseInt(_0x3d36ea) - 0x1;
              if (isNaN(_0x47005) || _0x47005 < 0x0 || _0x47005 >= _0x3bd503.length) {
                return await _0x242f4c.sendMessage(_0xbaf07d, {
                  'text': "Please enter a valid number corresponding to a download option."
                }, {
                  'quoted': _0x38f21f
                });
              }
              const _0x30b6f9 = _0x3bd503[_0x47005];
              try {
                const _0x417fff = path.join(__dirname, _0x30b6f9.resolution + "p.mp4");
                const _0x125a64 = fs.createWriteStream(_0x417fff);
                const _0x354e86 = await axios({
                  'url': _0x30b6f9.download_url,
                  'method': "GET",
                  'responseType': "stream"
                });
                _0x354e86.data.pipe(_0x125a64);
                _0x125a64.on("finish", async () => {
                  await _0x242f4c.sendMessage(_0xbaf07d, {
                    'video': {
                      'url': _0x417fff
                    },
                    'caption': "Here is your " + _0x30b6f9.resolution + "p video!"
                  }, {
                    'quoted': _0x38f21f
                  });
                  await _0x242f4c.sendMessage(_0xbaf07d, {
                    'text': "Enjoy your video! If you have any other requests, feel free to ask."
                  }, {
                    'quoted': _0x38f21f
                  });
                  fs.unlinkSync(_0x417fff);
                });
              } catch (_0x36e91b) {
                console.error("Video Download Error:", _0x36e91b);
                await _0x57ce9c("An error occurred while downloading the video.");
              }
            }
          });
        } catch (_0x297d99) {
          console.error("Download Options Fetch Error:", _0x297d99);
          await _0x57ce9c("An error occurred while fetching download options.");
        }
      }
    });
  } catch (_0x337fa0) {
    console.error("Error", _0x337fa0);
    await _0x57ce9c("An error occurred. Please try again.");
  }
});
