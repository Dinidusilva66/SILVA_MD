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
        // සොයන query එක සත්‍ය වන්නේදැයි පරීක්ෂා කරන්න
        if (!q || q.trim() === '') return await reply('*කරුණාකර සොයන වචනයක් ලබා දෙන්න! (උදාහරණය: candylove)*');

        // API එක භාවිතා කරමින් සොයන්න
        const searchResults = await fetchJson(`${domain}/search/phub?q=${encodeURIComponent(q)}`);
        const results = searchResults.result;

        // ප්‍රතිඵල පරීක්ෂා කිරීම
        if (!Array.isArray(results) || results.length === 0) {
            return await reply(`*ප්‍රතිඵලයක් හමු නොවීය:* ${q}`);
        }

        // ප්‍රථම 10 ප්‍රතිඵල සීමා කරන්න
        const limitedResults = results.slice(0, 10);

        // ප්‍රතිඵල msg එක සකස් කරන්න
        let message = `🔍 *"${q}" සඳහා සොයාගත් ප්‍රතිඵල*\n\n`;
        limitedResults.forEach((result, index) => {
            const title = result.title || "ශීර්ෂයක් ලබාගත නොහැක";
            message += `*${index + 1}.* ${title}\n`;
        });

        // ප්‍රතිඵලය මෙනුව විදියට පෙන්වන්න
        await reply(message);

        // පරිශීලකයාට video එකක් තෝරන්න කියන්න
        await reply('*Video එක තෝරන්න (1-10):*');

        // පරිශීලක පිළිතුර ගැනීමට බලා සිටින්න
        const videoIndex = await conn.waitForMessage(from);
        const videoNumber = parseInt(videoIndex.text);

        // අංකය වලංගුදැයි පරීක්ෂා කරන්න
        if (isNaN(videoNumber) || videoNumber < 1 || videoNumber > 10) {
            return await reply('*අවලංගු අංකය! කරුණාකර 1-10 අතර අංකයක් තෝරන්න.*');
        }

        // තෝරාගත් video එකේ විස්තර ලබාගන්න
        const selectedVideo = limitedResults[videoNumber - 1];
        const videoUrl = selectedVideo.url;

        const videoDetails = await fetchJson(`${domain}/download/phub?url=${encodeURIComponent(videoUrl)}`);

        // විස්තර JSON එකෙන් තොරතුරු ලබාගන්න
        const videoTitle = videoDetails.video_title || "ශීර්ෂයක් ලබාගත නොහැක";
        const videoCover = videoDetails.video_cover || "ඡායාරූපයක් ලබාගත නොහැක";
        const formats = videoDetails.format || [];

        // Download links සහ thumbnail එකක් සමඟ Message එක සකස් කරන්න
        let downloadMessage = `🎥 *${videoTitle}*\n\n*Available Download Links:*\n`;
        formats.forEach((format, index) => {
            downloadMessage += `*${index + 1}.* ${format.resolution}p (${format.file_type})\n🔗 Link: ${format.download_url}\n\n`;
        });

        await conn.sendMessage(m.chat, {
            image: { url: videoCover }, // Thumbnail එක ප්‍රදර්ශනය කිරීම
            caption: downloadMessage
        }, { quoted: mek });

    } catch (error) {
        console.error('Error in ph command:', error);
        await reply('කණගාටුයි, එහිදී දෝෂයක් සිදු විය. නැවත උත්සාහ කරන්න.');
    }
});
