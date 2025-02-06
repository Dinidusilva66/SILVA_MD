const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

const domain = `https://scrap-5eeqfix6o-silva-mds-projects-84019c98.vercel.app/`;

cmd({
    pattern: "cineru",
    alias: ["csubtitle", "csub"],
    react: '📑',
    category: "download",
    desc: "Search Sinhala subtitles and get download links",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q || q.trim() === '') return await reply('*📌 Please provide a movie name!*\n🔹 *Example:* .sinhala Deadpool');

        // Fetch search results from API
        const response = await fetchJson(`${domain}search/${encodeURIComponent(q)}`);

        // Debugging: Print the API response to console
        console.log("API Response:", response);

        // Check if the response is an array and contains data
        if (!Array.isArray(response) || response.length === 0) {
            return await reply(`❌ No Sinhala subtitles found for: *"${q}"*`);
        }

        // Limit results to 10
        const searchResults = response.slice(0, 10);

        let resultsMessage = `🎬 *Sinhala Subtitles for:* _"${q}"_\n\n`;
        
        searchResults.forEach((result, index) => {
            if (result.title && result.link) { // Ensure both title and link exist
                resultsMessage += `*${index + 1}.* ${result.title}\n🔗 [Download Here](${result.link})\n\n`;
            }
        });

        await conn.sendMessage(from, { text: resultsMessage }, { quoted: mek });
    } catch (e) {
        console.error("Error fetching subtitles:", e);
        reply(`⚠️ Error: ${e.message}`);
    }
});
