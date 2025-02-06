const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
    pattern: "cineru",
    react: "📄",
    desc: "Get Sinhala subtitle links",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { args, reply }) => {
    try {
        if (!args[0]) {
            return reply("📌 *Usage:* .cineru <movie-name>\n📝 *Example:* .cineru venom");
        }

        const query = encodeURIComponent(args.join(" "));
        const url = `https://scrap-6h1ddgv2m-silva-mds-projects-84019c98.vercel.app/search/${query}`;
        
        // Fetch data using Axios
        const response = await axios.get(url);
        const data = response.data;

        if (!data.status || !data.data.length) {
            return reply("⚠️ සෙවීම සඳහා කිසිවක් හමු නොවිනි!");
        }

        let message = `📄 *Sinhala Subtitles Results for: ${query}* 📄\n\n`;
        data.data.slice(0, 10).forEach((item, index) => {
            message += `*${index + 1}. ${item.title}*\n🔗 ${item.link}\n\n`;
        });

        reply(message);
    } catch (error) {
        console.error(error);
        reply("❌ දෝෂයක් සිදු විය! නැවත උත්සාහ කරන්න.");
    }
});
