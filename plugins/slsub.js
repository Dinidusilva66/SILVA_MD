const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const axios = require("axios");
const { fetchJson } = require('../lib/functions');

cmd({
  'pattern': "sub",
  'alias': ["subdl"],
  'react': '📄',
  'desc': "Search and download Pornhub videos",
  'category': "download",
  'use': ".sub <search query>",
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

    // New API URL
    const apiUrl = `https://scrap-6h1ddgv2m-silva-mds-projects-84019c98.vercel.app/search/${encodeURIComponent(_0x4c2289)}`;

    // Fetch data from the new API
    const _0x3ffa29 = await axios.get(apiUrl);

    // Check if API returns a valid response
    if (!_0x3ffa29.data || !_0x3ffa29.data.result || _0x3ffa29.data.result.length === 0) {
      return await _0x242f4c.sendMessage(_0xbaf07d, {
        'text': "No videos found or API error."
      }, {
        'quoted': _0x433e7d
      });
    }

    // Extract video results from the response
    const _0x42cdda = _0x3ffa29.data.result.slice(0, 10); // Get top 10 results
    let _0x22d7c8 = "*SUB SEARCH RESULTS*\n\n";
    _0x42cdda.forEach((_0x14e721, _0x569728) => {
      _0x22d7c8 += `${_0x569728 + 1}. *${_0x14e721.title}*\n🔗 [Link](${_0x14e721.url})\n\n`;
    });

    // Send the search results to the user
    return await _0x242f4c.sendMessage(_0xbaf07d, {
      'text': _0x22d7c8
    }, {
      'quoted': _0x433e7d
    });

  } catch (error) {
    console.error(error);
    return await _0x57ce9c("An error occurred while fetching video results.");
  }
});
