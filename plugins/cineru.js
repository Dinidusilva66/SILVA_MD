const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "cineru",
    alias: ["cinerusub", "csub"],
    react: '📑',
    category: "search",
    desc: "Search Sinhala subtitles for movies",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || q.trim() === '') return await reply('*Please provide a movie name! (e.g., Sonic)*');

        const response = await axios.get(`https://scrap-5eeqfix6o-silva-mds-projects-84019c98.vercel.app/search/${q}`);
        const results = response.data;

        if (!Array.isArray(results) || results.length === 0) {
            return await reply(`❌ No Sinhala subtitles found for: *"${q}"*`);
        }

        let message = `📽️ *Sinhala Subtitles for* "${q}":\n\n`;

        results.slice(0, 10).forEach((item, index) => {
            message += `*${index + 1}.* ${item.title}\n🔗 Link: ${item.link}\n\n`;
        });

        await conn.sendMessage(from, { text: message }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`🚫 Error fetching data!`);
    }
});
