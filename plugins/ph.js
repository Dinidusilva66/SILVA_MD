const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "ph",
    alias: ["phsub", "psb"],
    react: '🟨',
    category: "download",
    desc: "Search movies on sinhalasub and get download links",
    filename: __filename
}, async (m, match, conn) => {
    try {
        const query = match[1];
        if (!query) {
            return await conn.sendMessage(m.key.remoteJid, { text: "මම හොයන්න නමක් දෙන්න: `.ph <name>`" }, { quoted: m });
        }

        const apiUrl = `https://www.dark-yasiya-api.site/search/phub?q=${encodeURIComponent(query)}`;
        const data = await fetchJson(apiUrl);
        const results = data.results.slice(0, 10); // පළමු result 10ක් පමණක්

        if (results.length === 0) {
            return await conn.sendMessage(m.key.remoteJid, { text: "කනගාටුයි, කිසිම ප්‍රතිඵලයක් හමු නොවුණා." }, { quoted: m });
        }

        let replyMessage = `*Here you searched:* _${query}_\n\n`;

        results.forEach((result, index) => {
            replyMessage += `*${index + 1}. Title:* ${result.title}\n🔗 *Link:* ${result.url}\n\n`;
        });

        // පළමු result එකේ image එක යවන්න
        await conn.sendMessage(m.key.remoteJid, {
            image: { url: results[0].image },
            caption: replyMessage
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.key.remoteJid, { text: "එකට ගැටලුවක් තියනවා. ටික දවසකට පස්සේ නැවත උත්සාහ කරන්න." }, { quoted: m });
    }
});
