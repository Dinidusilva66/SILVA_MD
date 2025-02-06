const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

const domain = `https://scrap-5eeqfix6o-silva-mds-projects-84019c98.vercel.app/`;

cmd({
    pattern: "cineru",
    alias: ["csub", "cinerusub"],
    react: '📄',
    category: "download",
    desc: "Search Sinhala subtitles and get download links",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        // Check if search query is provided
        if (!q || q.trim() === '') return await reply('*📌 Please provide a movie name!*\n🔹 *Example:* .sinhala Deadpool');

        // Fetch search results from API
        const response = await fetchJson(`${domain}search/${encodeURIComponent(q)}`);

        // Validate API response
        if (!response.status || !Array.isArray(response.results) || response.results.length === 0) {
            return await reply(`❌ No Sinhala subtitles found for: *"${q}"*`);
        }

        // Limit to first 10 results
        const searchResults = response.results.slice(0, 10);

        // Format and send the search results message
        let resultsMessage = `🎬 *Sinhala Subtitles for:* _"${q}"_\n\n`;
        
        searchResults.forEach((result, index) => {
            const title = result.title || 'No title available';
            const link = result.link || 'No link available';
            const thumbnail = result.thumbnail || 'https://via.placeholder.com/150'; // Fallback image

            resultsMessage += `*${index + 1}.* ${title}\n🔗 *Download Here* ➜ ${link}\n\n`;
        });

        await conn.sendMessage(from, { text: resultsMessage }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`⚠️ Error: ${e.message}`);
    }
});
