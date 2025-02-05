/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const axios = require("axios");
cmd({
  'pattern': "video2",
  'alias': ["ytvid2", "ytv2", "ytvideo2"],
  'react': '▶️',
  'desc': "Download videos from YouTube by searching for keywords.",
  'category': "video",
  'use': ".vidx <keywords>",
  'filename': __filename
}, async (_0xe2f6b0, _0xc0bd08, _0x122f70, {
  from: _0x4938ec,
  args: _0x545fb3,
  reply: _0x290209
}) => {
  try {
    const _0x32deeb = _0x545fb3.join(" ");
    if (!_0x32deeb) {
      return _0x290209("*Please provide a video tital or url*");
    }
    _0x290209("> *ꜱɪʟᴠᴀ ᴍᴅ ɪꜱ ꜱᴇᴀʀᴄʜɪɴɢ*...");
    const _0x5e6ce9 = await yts(_0x32deeb);
    if (!_0x5e6ce9.videos || _0x5e6ce9.videos.length === 0x0) {
      return _0x290209("❌ No results found for \"" + _0x32deeb + "\".");
    }
    const _0x8cec1e = _0x5e6ce9.videos[0x0];
    const _0x5ce282 = _0x8cec1e.url;
    const _0x2af2d2 = "https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=" + _0x5ce282;
    const _0x442320 = await axios.get(_0x2af2d2);
    if (!_0x442320.data.success) {
      return _0x290209("❌ Failed to fetch video for \"" + _0x32deeb + "\".");
    }
    const {
      download_url: _0x503033
    } = _0x442320.data.result;
    await _0xe2f6b0.sendMessage(_0x4938ec, {
      'video': {
        'url': _0x503033
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0xc0bd08
    });
  } catch (_0x3da04a) {
    console.error(_0x3da04a);
    _0x290209("❌ An error occurred while processing your request.");
  }
});

cmd({
  pattern: "play",
  alias: ["youtubeplay", "ytplay"],
  react: '▶️',
  desc: "Download audio from YouTube by searching for keywords.",
  category: "music",
  use: ".play <keywords>",
  filename: __filename
}, 
async (conn, mek, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) return reply("*❗ Please provide an audio title or YouTube URL.*");

    reply("*🎧 Searching for your song...*");

    const searchResult = await yts(query);
    if (!searchResult.videos || searchResult.videos.length === 0) {
      return reply(`❌ No results found for "${query}".`);
    }

    const video = searchResult.videos[0];
    const videoUrl = video.url;

    // API Request
    const apiURL = `https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${videoUrl}`;
    const response = await axios.get(apiURL);

    // API Response Validation
    if (!response.data || !response.data.success || !response.data.result.download_url) {
      return reply(`❌ Failed to fetch audio for "${query}".`);
    }

    const downloadUrl = response.data.result.download_url;

    // Send Audio
    await conn.sendMessage(from, {
      audio: { url: downloadUrl },
      mimetype: "audio/mp4",
      ptt: false
    }, { quoted: mek });

  } catch (error) {
    console.error(error);
    reply("❌ An unexpected error occurred while processing your request.");
  }
});
