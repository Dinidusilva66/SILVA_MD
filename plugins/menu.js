const config = require('../config');
const { cmd } = require('../command');

cmd(
  {
    pattern: 'menu',
    react: '📋',
    desc: 'Displays the main menu list.',
    category: 'main',
    use: '.menu',
    filename: __filename,
  },
  async (conn, mek, m, { from, reply }) => {
    try {
      // Reply message check
      const userReply = mek.message?.conversation?.trim();

      if (userReply === '1') {
        const downloadMenu = `
*🌟 DOWNLOAD COMMANDS 🌟*
■ *.apk*
■ *.twitter*
■ *.gdrive*
■ *.mediafire*
■ *.fb*
■ *.ig*
■ *.movie*
■ *.song*
■ *.video*
■ *.yt*
        `;
        await conn.sendMessage(from, { text: downloadMenu }, { quoted: mek });
        return;
      } else if (userReply === '2') {
        const convertMenu = `
*🌟 CONVERT COMMANDS 🌟*
■ *.convert*
■ *.ss*
        `;
        await conn.sendMessage(from, { text: convertMenu }, { quoted: mek });
        return;
      } else if (userReply === '3') {
        const groupMenu = `
*🌟 GROUP COMMANDS 🌟*
■ *.promote*
■ *.demote*
■ *.kick*
■ *.add*
■ *.admins*
■ *.getpic*
■ *.tagall*
■ *.mute*
■ *.unmute*
        `;
        await conn.sendMessage(from, { text: groupMenu }, { quoted: mek });
        return;
      }

      // Main menu
      const mainMenu = `
*🌟 MAIN MENU 🌟*
1. Download Menu
2. Convert Menu
3. Group Menu

_Reply with the respective number (e.g., 1) to view more commands._
      `;
      await conn.sendMessage(from, { text: mainMenu }, { quoted: mek });
    } catch (e) {
      console.error(e);
      await reply(`⚠️ Error: ${e.message}`);
    }
  }
);