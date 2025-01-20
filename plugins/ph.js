const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

// API Domain එක
const domain = `https://www.dark-yasiya-api.site`;

cmd({
    pattern: "ph",
    alias: ["phubsearch"],
    react: '🔍',
    category: "search",
    desc: "Search video titles on PHub",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        // Search query validation
        if (!q || q.trim() === '') return await reply('*Please provide a search query! (e.g., candylove)*');

        // API එකෙන් සර්ච් රිසල්ට් ලබාගන්න
        const searchResults = await fetchJson(`${domain}/search/phub?q=${encodeURIComponent(q)}`);
        const results = searchResults.result;

        // Validate results
        if (!Array.isArray(results) || results.length === 0) {
            return await reply(`*No results found for:* ${q}`);
        }

        // Limit results to first 10
        const limitedResults = results.slice(0, 10);

        // Format results for message
        let message = `🔍 *Search Results for:* "${q}"\n\n`;
        limitedResults.forEach((result, index) => {
            const title = result.title || "No title available";
            message += `*${index + 1}.* ${title}\n`;
        });

        // Reply message with search results
        await reply(message);

    } catch (error) {
        console.error('Error in ph command:', error);
        await reply('Sorry, something went wrong. Please try again later.');
    }
});
