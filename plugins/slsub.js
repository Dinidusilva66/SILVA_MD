const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

// API key එක සහ domain එක වෙනම const apikey ලෙස දක්වන්න
const apikey = "Manul-Official-Key-3467";
const domain = `https://mr-manul-ofc-apis.vercel.app/xnxxs?apikey=${apikey}`;

cmd({
    pattern: "sinhala",
    alias: ["slsub", "sb"],
    react: '📑',
    category: "download",
    desc: "Search Sinhala subtitles and get download links",
    filename: __filename
}, async (conn, m, mek, { from, isMe, isOwner, q, reply }) => {
    try {
        // පරිශීලකයා විසින් සෙවුම් පදය ඇතුළත් කර තිබේදැයි පිරික්සන්න
        if (!q || q.trim() === '') return await reply('*කරුණාකර සෙවුම් පදයක් ලබාදෙන්න! (උදා: Mia)*');
        if (!isMe && !isOwner) return await reply('*මෙම විධානය ක්‍රියාත්මක කළ හැක්කේ Bot හිමිකරුට පමණි!*');

        // API URL එක dynamic ලෙස query parameter එක සකස් කිරීම
        const apiUrl = `${domain}&query=${q}`;

        // API එකෙන් JSON දත්ත ලබා ගැනීම
        const apiResponse = await fetchJson(apiUrl);

        // API දත්ත වලින් අවශ්‍ය Array එක ලබාගන්න
        const movieData = apiResponse || [];

        // පරිශීලකයාගේ සෙවුමට අදාළ ප්‍රතිඵල තිබේදැයි පිරික්සන්න
        if (!Array.isArray(movieData) || movieData.length === 0) {
            return await reply(`❌ *ප්‍රතිඵල නැත:* "${q}"`);
        }

        // ප්‍රථම 10 ප්‍රතිඵල සීමා කරන්න
        const searchResults = movieData.slice(0, 10);

        // ප්‍රතිඵල formatted කර පණිවිඩය සැකසීම
        let resultsMessage = `🎬 *සෙවුම් ප්‍රතිඵල:* "${q}"\n\n`;
        searchResults.forEach((result, index) => {
            const title = result.title || 'No title available';
            const link = result.link || 'No link available';
            resultsMessage += `*${index + 1}.* ${title}\n🔗 *Link:* ${link}\n\n`;
        });

        // පරිශීලකයාට ප්‍රතිඵල යවන්න
        await reply(resultsMessage);

    } catch (error) {
        console.error(error);
        await reply('❌ *දෝෂයක් ඇතිවිය! කරුණාකර නැවත උත්සාහ කරන්න.*');
    }
});
