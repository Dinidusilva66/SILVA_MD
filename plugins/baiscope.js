const { cmd, commands } = require('../command'); // Command register කිරීම සඳහා
const { fetchJson } = require('../lib/functions'); // JSON data fetch කිරීම සඳහා (අත්‍යවශ්‍ය නොවිය හැක)
const { subsearch } = require('@sl-code-lords/si-subdl'); // Sinhala Subtitles සෙවීම සඳහා

cmd({
    pattern: "bsub",
    react: "📄",
    desc: "Download Sinhala Subtitles",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { q, reply }) => {
    try {
        if (!q) return reply("📥 කරුණාකර චිත්‍රපටියක නම දෙන්න. උදාහරණය: *.bsub Avengers*");

        // Subtitles සෙවීම
        const results = await subsearch(q);

        if (results.length === 0) {
            return reply("😕 උපසිරසි හමු නොවීය.");
        }

        // මුල් උපසිරසි 5 ක් පෙන්වීම
        let message = "🎬 *Sinhala Subtitles Results:*\n\n";
        results.slice(0, 5).forEach((item, index) => {
            message += `*${index + 1}. ${item.title}*\n🔗 ${item.link}\n\n`;
        });

        await reply(message);
    } catch (error) {
        console.error(error);
        reply("❌ උපසිරසි ලබාගැනීමේදී දෝෂයක් ඇතිවුණා.");
    }
});
