const { cmd } = require('../command');

cmd({
    pattern: "fw",
    alias: ["forward"],
    react: "📤",
    desc: "Forward a quoted message to a group",
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
        await conn.forwardMessage(groupJID, quoted, true); // `true` ensures the message is forwarded as it is
        reply(`✅ Message successfully forwarded to *${groupJID}*.`);
    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});
