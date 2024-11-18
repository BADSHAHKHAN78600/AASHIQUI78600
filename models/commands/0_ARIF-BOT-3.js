const emojiResponses = {
  "🧐","beta": {
    "OWNER": [
      "Hey Boss, लग रहा है कोई बड़ा प्लान बना रहे हो 🧐",
      "Owner mode: 🧐 planning something epic?",
      "Owner नजरें इतनी गहरी क्यों हैं? बड़ा राज़ छुपा है क्या? 🧐"
    ]
  },
  "😎": {
     "OWNER": [
      "Owner sir, you're the definition of cool 😎",
      "Boss, आपका कूलनेस का लेवल अलग है 😎",
      "Owner इतनी कूलनेस तो किसी में नहीं 😎"
    ]
  },
  "🥺": {
      "OWNER": [
      "Oh boss, आप ऐसे मासूम मत बनो 🥺",
      "Owner, आप जैसे दिखा रहे हो, दिल पिघल ही जाएगा 🥺",
      "Owner, इस मासूमियत से जीतना तो आपकी आदत है 🥺"
    ]
  }
};
 
module.exports.config = {
  name: "emojiReply",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Reply to specific emojis",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender ===     "MALE" ? "MALE" : "FEMALE") : "MALE";
 
      // Check if the sender is the bot owner
      const botOwnerID = "61553634015672"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
