const { forwardOrBroadCast, bot, parsedJid } = require('../lib/');

bot(
  {
    pattern: 'fw ?(.*)',
    desc: 'forward replied msg',
    type: 'misc',
  },
  async (message, match) => {
    try {
      if (!message.reply_message) return await message.send('*Reply to a message*');

      // Message එක forward කිරීම
      for (const jid of parsedJid(match)) {
        await forwardOrBroadCast(jid, message);

        // Forward කිරීම සාර්ථක නම් ✅ reaction එක දමන්න
        await message.client.sendMessage(message.chat, {
          react: {
            text: '✅', // Reaction emoji එක
            key: message.key, // Replied message එකට react වෙනවා
          },
        });
      }
    } catch (error) {
      console.error('Forward Error:', error);
      await message.send('❌ *Message forward කිරීමේදී දෝෂයක් ඇතිවුණා!*');
    }
  }
);

bot(
  {
    pattern: 'save ?(.*)',
    desc: 'forward replied msg to u',
    type: 'misc',
  },
  async (message, match) => {
    try {
      if (!message.reply_message) return await message.send('*Reply to a message*');

      // Message එක forwarding කිරීම
      await forwardOrBroadCast(message.participant, message);

      // Forward කිරීම සාර්ථක නම් ✅ reaction එක දමන්න
      await message.client.sendMessage(message.chat, {
        react: {
          text: '✅', // Reaction emoji එක
          key: message.key,
        },
      });
    } catch (error) {
      console.error('Save Error:', error);
      await message.send('❌ *Message save කිරීමේදී දෝෂයක් ඇතිවුණා!*');
    }
  }
);
