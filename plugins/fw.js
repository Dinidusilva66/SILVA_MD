const { cmd } = require('../command');

cmd({
    pattern: "fw",
    alias: ["forward"],
    react: "📤",
    desc: "Forward a quoted message to a group without a caption",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, args, quoted, reply }) => {
    try {
        // Arguments validation
        if (!quoted) {
            return reply("✋ *Please reply to a message you want to forward.*");
        }
        if (args.length === 0) {
            return reply("✋ *Usage:* .fw <group_jid>");
        }

        const groupJID = args[0]; // Group JID to forward the message to

        // Forward the quoted message
        await conn.sendMessage(groupJID, quoted.message, { quoted: mek });
        reply(`✅ Message forwarded to *${groupJID}* successfully.`);
    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});
