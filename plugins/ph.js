const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "ph",
    alias: ["phsub", "psb"],
    react: '🟥',
    category: "download",
    desc: "Search videos on phub and get download links",
    filename: __filename
}, async (conn, m, mek, { from, isMe, isOwner, q, reply }) => {
    try {
        if (!q || q.trim() === '') return await reply('*Please provide a search query! (e.g., Example Video)*');
        if (!isMe && !isOwner) return await reply('*Only Bot Number Can Download Videos !!!*');

        // API Call Using fetchJson
        const apiUrl = `https://www.dark-yasiya-api.site/search/phub?q=${encodeURIComponent(q)}`;
        const response = await fetchJson(apiUrl);

        // Validate API Response
        if (!response || !Array.isArray(response.results) || response.results.length === 0) {
            return await reply(`❌ No results found for: ${q}`);
        }

        const searchResults = response.results.slice(0, 10); // First 10 results

        // Format Results
        let resultsMessage = `🎥 *Search Results for* "${q}":\n\n`;
        searchResults.forEach((result, index) => {
            const title = result.title || 'No title available';
            const link = result.url || 'No link available';
            const thumbnail = result.image || 'https://via.placeholder.com/150';
            
            resultsMessage += `*${index + 1}.* ${title}\n🔗 Link: ${link}\n📸 Thumbnail: ${thumbnail}\n\n`;
        });

        // Send First Result's Thumbnail + Captions
        await conn.sendMessage(m.chat, {
            image: { url: searchResults[0].image },
            caption: `${resultsMessage}`
        }, { quoted: mek });

    } catch (error) {
        console.error("API Error:", error);
        await reply('🚨 *An error occurred while processing your request. Please try again later.*');
    }
});
