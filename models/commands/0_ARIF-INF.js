module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  hasPermssion: 0,
  credits:"ARIF BABU" ,
  description: "THIS BOT IS MADE BY ARIF BABU",
  usePrefix: true,
  commandCategory: "INFORMATION",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
var link =                                     
["https://i.imgur.com/rPI3r1C.jpg","https://i.imgur.com/e9dOGP3.jpg","https://i.imgur.com/lmnkobJ.jpg"];
var callback = () => api.sendMessage({body:`❁ ━━━━[  𝗜𝗡𝗙  ]━━━━ ❁\\n  [ 1 ]  𝗕𝗢𝗧 𝗡𝗔𝗠𝗘     ➪   ${global.config.BOTNAME}\n  [ 2 ]  𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 ➪  ARIF-BABU\n  [ 3 ]  𝗕𝗢𝗧  𝗣𝗥𝗘𝗙𝗜𝗫  ➪   [ ${global.config.PREFIX} ]\n  [ 4 ]  𝗗𝗔𝗧𝗘  ➪ ${juswa}\n  [ 5 ]  𝗕𝗢𝗧 𝗥𝗨𝗡𝗡𝗜𝗡𝗚 𝗧𝗜𝗠𝗘  ➪  [ ${hours}:${minutes}:${seconds} ]\n  [ 6 ]  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗  ➪ https://www fb.com/id=100090796122127\n𝗠𝗔𝗗𝗘 𝗕𝗬 𝗔𝗥𝗜𝗙 𝗕𝗔𝗕𝗨`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };