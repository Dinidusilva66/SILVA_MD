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
  async (conn, mek, m, { from, quoted, reply }) => {
    try {
      // Handle Reply-based Menus
      if (quoted) {
        const replyMessage = quoted.body.trim();
        if (replyMessage === '1') {
          // Download Menu
          const downloadMenu = `
*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
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
          await conn.sendMessage(
            from,
            { text: downloadMenu },
            { quoted: mek }
          );
          return;
        } else if (replyMessage === '2') {
          // Convert Menu
          const convertMenu = `
*𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
■ *.convert*
■ *.ss*
          `;
          await conn.sendMessage(
            from,
            { text: convertMenu },
            { quoted: mek }
          );
          return;
        } else if (replyMessage === '3') {
          // Group Menu
          const groupMenu = `
*𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*
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
          await conn.sendMessage(
            from,
            { text: groupMenu },
            { quoted: mek }
          );
          return;
        } else {
          // Invalid Reply
          reply('Please reply with a valid option (1, 2, or 3).');
          return;
        }
      }

      // Default Main Menu
      const mainMenu = `
*🌟 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🌟*
1. Download Menu
2. Convert Menu
3. Group Menu

_Reply with the respective number (e.g., 1) to view more commands._
      `;

      await conn.sendMessage(from, { text: mainMenu }, { quoted: mek });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
