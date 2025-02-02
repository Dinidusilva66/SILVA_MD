const axios = require('axios');

cmd({
    pattern: "ph",
    alias: ["phsub", "psb"],
    react: '🟨',
    category: "download",
    desc: "Search movies on sinhalasub and get download links",
    filename: __filename
}, async (message, match) => {
    try {
        const query = match[1];
        if (!query) {
            return message.reply("මම හොයන්න නමක් දෙන්න: `.ph <name>`");
        }

        const apiUrl = `https://www.dark-yasiya-api.site/search/phub?q=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);
        const results = response.data.results.slice(0, 10); // පළමු result 10ක් පමණක්

        if (results.length === 0) {
            return message.reply("කනගාටුයි, කිසිම ප්‍රතිඵලයක් හමු නොවුණා.");
        }

        let replyMessage = `*Here you searched:* _${query}_\n\n`;

        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            replyMessage += `*${i + 1}. Title:* ${result.title}\n🔗 *Link:* ${result.url}\n\n`;
        }

        // පළමු result එකේ image එක යවන්න
        await message.sendFromUrl(results[0].image, { caption: replyMessage });

    } catch (error) {
        console.error(error);
        message.reply("එකට ගැටලුවක් තියනවා. ටික දවසකට පස්සේ නැවත උත්සාහ කරන්න.");
    }
});
