const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

// API Domain එක
const domain = `https://www.dark-yasiya-api.site`;

cmd({
    pattern: "ph",
    alias: ["phubsearch"],
    react: '🟨',
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

        // Ask the user for the index of the video they want
        await reply('Please select the video number (1-10):');

        // Wait for the user's response
        const videoIndex = await conn.waitForMessage(from); // Assuming `conn.waitForMessage` gets the user's response
        const videoNumber = parseInt(videoIndex.text);

        // Validate the number
        if (isNaN(videoNumber) || videoNumber < 1 || videoNumber > 10) {
            return await reply('*Invalid number! Please select a number between 1 and 10.*');
        }

        // Get the URL for the selected video
        const selectedVideo = limitedResults[videoNumber - 1];
        const videoUrl = selectedVideo.url;

        // Fetch video details using the second API
        const videoDetails = await fetchJson(`${domain}/download/phub?url=${encodeURIComponent(videoUrl)}`);

        // Get the video details
        const videoTitle = videoDetails.video_title || "No title available";
        const videoCover = videoDetails.video_cover || "No cover image available";
        const resolution = videoDetails.resolution || "No resolution available";

        // Format and reply with video details (video_cover as caption)
        let videoMessage = `🎬 *Video Cover:* ${videoCover}\n`;
        videoMessage += `📷 *Title:* ${videoTitle}\n`;
        videoMessage += `💡 *Resolution:* ${resolution}`;

        await reply(videoMessage);

    } catch (error) {
        console.error('Error in ph command:', error);
        await reply('Sorry, something went wrong. Please try again later.');
    }
});
