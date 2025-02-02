const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "ph",
    alias: ["phsub", "psb"],
    react: '🟨',
    category: "download",
    desc: "Search videos on phub and get download links",
    filename: __filename
}, async (conn, m, mek, { from, isMe, isOwner, q, reply }) => {
    try {
        // Check if search query is provided
        if (!q || q.trim() === '') return await reply('*Please provide a search query! (e.g., Example Video)*');
        if (!isMe && !isOwner) return await reply('*Only Bot Number Can Download Videos !!!*');

        // Fetch search results from API
        const apiUrl = `https://www.dark-yasiya-api.site/search/phub?q=${encodeURIComponent(q)}`;
        const manu = await fetchJson(apiUrl);
        const videoData = manu.results; // Use the results array from API response

        // Check if the API returned valid results (array of videos)
        if (!Array.isArray(videoData) || videoData.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        // Limit to first 10 results
        const searchResults = videoData.slice(0, 10);

        // Format and send the search results message
        let resultsMessage = `🟨⬛ *Search Results for* "${q}":\n\n`;
        searchResults.forEach((result, index) => {
            const title = result.title || 'No title available';
            const link = result.url || 'No link available';
            const thumbnail = result.image || 'https://via.placeholder.com/150'; // Fallback if thumbnail is missing
            resultsMessage += `🟡 *${index + 1}.* ${title}\n⚫ Link: ${link}\n`;
            resultsMessage += `📸 Thumbnail: ${thumbnail}\n\n`;
        });

        // Send the first result's thumbnail with the formatted message
        const sentMsg = await conn.sendMessage(m.chat, {
            image: { url: searchResults[0].image },
            caption: `${resultsMessage}`
        }, { quoted: mek });

        const messageID = sentMsg.key.id;
        console.log('Message ID:', messageID);

    } catch (error) {
        console.error(error);
        await reply('An error occurred while processing your request. Please try again later.');
    }
});
