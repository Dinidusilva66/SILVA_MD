cmd({
  pattern: "hack", // Command name
  desc: "Displays a dynamic loading bar for fun.",
  category: "fun",
  react: '💻',
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    // පළමු පණිවිඩය
    const steps = [
      '💻 *HACK STARTING...* 💻',
      '🔧 *Initializing tools...* 🛠️',
      '🌐 *Connecting to remote servers...*',
    ];

    // පළමු පණිවිඩය එවීම
    let sentMessage = await conn.sendMessage(from, {
      text: steps[0] // පළමු පණිවිඩය
    });

    // Loading bar එකේ steps
    const loadingBar = [
      '```[▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒] 10%```',
      '```[▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒] 20%```',
      '```[▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒] 30%```',
      '```[▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒] 40%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒] 50%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒] 60%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒] 70%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒] 80%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒] 90%```',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%```'
    ];

    // Delay එකක් ලබා ගැනීම
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    // Loading Bar එක update කරනවා
    for (let i = 0; i < loadingBar.length; i++) {
      await delay(1000); // 1-seconds delay එකක්
      await conn.relayMessage(from, {
        protocolMessage: {
          key: sentMessage.key, // Original message එක reference කරනවා
          type: 13, // Edited message type
          editedMessage: {
            conversation: loadingBar[i] // Message එක update කරනවා
          }
        }
      }, {});
    }

    // Loading එක අවසන් වූ පසු Final message එකක්
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay එක
    await conn.sendMessage(from, {
      text: '🔓 *System Breach: Successful!* 🎯',
    });

    // Optional extra messages
    await delay(1000);
    await conn.sendMessage(from, {
      text: '*📡 Transmitting data...* 📤',
    });

    await delay(1000);
    await conn.sendMessage(from, {
      text: '_🕵️‍♂️ Ensuring stealth mode..._ 🤫',
    });

    await delay(1000);
    await conn.sendMessage(from, {
      text: '⚠️ *Note:* This is for demonstration purposes only.',
    });

    await delay(1000);
    await conn.sendMessage(from, {
      text: '> *SILVA-MD HACKING COMPLETE ☣*',
    });

  } catch (error) {
    console.log(error);
    reply(`❌ *Error!* ${error.message}`);
  }
});
