//===================================================AUTO==========================
const config = require("../config");
const fs = require('fs');
const path = require("path");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'on': "body"
}, async (_0x49e08e, _0x2d0b9d, _0x3c5950, {
  from: _0x14c30b,
  body: _0x2bea6e,
  isOwner: _0x2c7141
}) => {
  const _0x150ed7 = path.join(__dirname, "../media/autosticker.json");
  const _0x306348 = JSON.parse(fs.readFileSync(_0x150ed7, "utf8"));
  for (const _0x1bbe2a in _0x306348) {
    if (_0x2bea6e.toLowerCase() === _0x1bbe2a.toLowerCase()) {
      if (config.AUTO_STICKER === "true") {
        await _0x49e08e.sendMessage(_0x14c30b, {
          'sticker': {
            'url': _0x306348[_0x1bbe2a]
          },
          'package': 'yourName'
        }, {
          'quoted': _0x2d0b9d
        });
      }
    }
  }
});
cmd({
  'on': "body"
}, async (_0x1a5f71, _0x2ea4ba, _0x3701d1, {
  from: _0xcce429,
  body: _0x3450af,
  isOwner: _0x22473d
}) => {
  const _0x17d9e1 = path.join(__dirname, "../media/autoreply.json");
  const _0x13eca1 = JSON.parse(fs.readFileSync(_0x17d9e1, "utf8"));
  for (const _0x45684b in _0x13eca1) {
    if (_0x3450af.toLowerCase() === _0x45684b.toLowerCase()) {
      if (config.AUTO_REPLY === "true") {
        await _0x3701d1.reply(_0x13eca1[_0x45684b]);
      }
    }
  }
});
