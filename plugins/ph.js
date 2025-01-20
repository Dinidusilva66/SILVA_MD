const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');

const domain = `https://dark-yasiya-api.site`;
const api_key = `Your-API-Key`; // ඔබගේ API key එක මෙතන දාන්න

cmd({
    pattern: "ph",
    alias: ["phub", "pornhub"],
    react: '🔍',
    category: "download",
    desc: "Search videos on Pornhub and get download links",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        // පරිශීලකයාට search query එකක් ලබා දී තිබේද කියා සොයන්න
        if (!q || q.trim() === '') return await reply('*Please provide a search query! (e.g., candylove)*');

        // API එකෙන් search results ගන්න
        const searchResponse = await fetchJson(`${domain}/search/phub?q=${encodeURIComponent(q)}`);
        if (!searchResponse || !searchResponse.result || searchResponse.result.length === 0) {
            return await reply(`No results found for: ${q}`);
        }

        const results = searchResponse.result.slice(0, 10); // අවශ්‍යනම් 10 විනාඩි ප්‍රතිඵල සීමා කරන්න
        let responseMessage = `🔍 *Search Results for* "${q}":\n\n`;

        results.forEach((item, index) => {
            responseMessage += `*${index + 1}.* ${item.title}\n🔗 Link: ${item.url}\n\n`;
        });

        await reply(responseMessage);

        // පරිශීලකයාට reply කල විට තේරීමේ listener එකක් සකසන්න
        conn.ev.on('messages.upsert', async (update) => {
            const replyMek = update.messages[0];
            if (!replyMek.message) return;

            const text = replyMek.message.conversation || replyMek.message.extendedTextMessage?.text;
            const selectedNumber = parseInt(text.trim());

            if (!isNaN(selectedNumber) && selectedNumber > 0 && selectedNumber <= results.length) {
                const selectedItem = results[selectedNumber - 1];

                // විශේෂිත විඩියෝ එකේ විස්තර ගන්න
                const videoResponse = await fetchJson(`${domain}/download/phub?url=${encodeURIComponent(selectedItem.url)}`);
                const videoDetails = videoResponse;

                if (!videoDetails || !videoDetails.format) {
                    return await reply('No download links found for the selected video.');
                }

                let downloadMessage = `🎥 *${videoDetails.video_title}*\n\nUploader: ${videoDetails.video_uploader}\nDate: ${videoDetails.video_upload_date}\nDuration: ${videoDetails.analyze_time}s\n\n*Available Resolutions:*\n`;

                videoDetails.format.forEach((format, index) => {
                    downloadMessage += `*${index + 1}.* ${format.resolution} - ${format.file_type}\n`;
                });

                await reply(downloadMessage);

                // Resolution තේරීමේ listener එකක් සකසන්න
                conn.ev.on('messages.upsert', async (resUpdate) => {
                    const resReply = resUpdate.messages[0];
                    if (!resReply.message) return;

                    const resText = resReply.message.conversation || resReply.message.extendedTextMessage?.text;
                    const resNumber = parseInt(resText.trim());

                    if (!isNaN(resNumber) && resNumber > 0 && resNumber <= videoDetails.format.length) {
                        const selectedResolution = videoDetails.format[resNumber - 1];

                        await reply(`⬇️ *Downloading Video...*\nResolution: ${selectedResolution.resolution}`);
                        await conn.sendMessage(from, {
                            document: { url: selectedResolution.download_url },
                            mimetype: 'video/mp4',
                            fileName: `${videoDetails.video_title}.mp4`,
                            caption: `🎥 *${videoDetails.video_title}*\nResolution: ${selectedResolution.resolution}`
                        }, { quoted: mek });
                    } else {
                        await reply('Invalid selection. Please reply with a valid number.');
                    }
                });
            } else {
                await reply('Invalid selection. Please reply with a valid number.');
            }
        });
    } catch (error) {
        console.error('Error:', error);
        await reply('Sorry, something went wrong.');
    }
});
