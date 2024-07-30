//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "233591856630@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/gith496/WASI-MD-V2";
global.gurl = process.env.GURL || "http://wa.me/233591856630";
global.website = process.env.GURL || "http://wa.me/233591856630";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "http://wa.me/233591856630";
global.devs = "233591856630";
global.sudo = process.env.SUDO || "233591856630";
global.owner = process.env.OWNER_NUMBER || "233591856630";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUM4ZW1hczh2TUZLWmF0a3dUUVdXMmc5N3JVc1laRVRjMnplTTY4SlRIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWhxUEJQaC96Vlc0MnZWMDMwN3NHQWJMVW9vUzk2KzIrMTQzSG94WFZ4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTzdNdDY2TmI3Vit5MWRxZUthdmNnZ3FJY21ub2R4Q1VSSDZVYkkxeEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjV3hIczhLUFZmczFtWUhTNU1yMXBSTWxwTTBoWDBDODR6empGQTFVL0Z3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGMkN6ZUtreEZhR0pMSlByWW8rQWp2S2xFRXYyUENTL0ZUR2tVcjVXMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkorOTl4c1h5Wk1udlF1UnpuL3oxNVlGbWFTQ2pCcVY2T3dLQ2psRUtNQjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNZTDNrdVNrYnNQUFpTVnQzMm9pbHhqMTkyenpYY2hSeWdiUENyMkowRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0dvSkNJVmF2N2tXblIyMlhKbHpRWmNQTTM3c2JiTmN2ZGpoUXo2OGpHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0vdWFEaktvemNxQTZBLzQxZW91cGFldjhiZG1tS1J4Z2FOSDY1SEhKeDVUUS9Eck5KaGdsTkx1WWl4SDI0RWc3NVhDZnFYNGc5Q2g1Q3YycTUwZGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJIVmw0aCtvT1NKRFllbXkweFJxNXdwakN0OWFMZmxicExodlVBWjFFL3E4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU5MTg1NjYzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMDYxRTFCNjhDMzVGMTEwNzcyMUY4NTg1QTI4QjZDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzI3Njg3fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4RUtlNTVaSVFacVBid0hRMHQ2Y0ZBIiwicGhvbmVJZCI6IjAyYmRhOTc5LTZlNjQtNDlkOC04NWI2LTk4NDdkN2RkMTgyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6cnRKdWJwYm8yeUsvS0tDeTdOMldOKzQyNk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGFURnhaQytJS1Fxb3B0eXl5bEt2alY4VU04PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdaSkFUQjdLIiwibWUiOnsiaWQiOiIyMzM1OTE4NTY2MzA6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJKM0ZFUTljU2l0UVlZTENBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMkFPYUtvNGpMTm9RWEoxd25JQ1lmV0k2RUFCSGxjaVdkUHR3bFN2R2trdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY3J5ME0vU1ZEVFdaQlZTVUcweE5LcXVQMlROL1BUckM1UUp3eWlPVlkyLzhwMlhXamtnUlJFMXBzWUd0VEdDUDZrdWU2d2Q5RXZiUVJYNGp0ME9uQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InlqOHkvQnM4WDEvbW94OFZ3TFBGbVc2eko0Mk1vV1hKbW1PYllCelhzc2hKR092RFd3d2h1b1dEZkdBcFBtaTBMWnRzRDVPK0xlRS9oNkRadHdaNmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTkxODU2NjMwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGdEbWlxT0l5emFFRnlkY0p5QW1IMWlPaEFBUjVYSWxuVDdjSlVyeHBKTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjMyNzY4MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJSDUifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-🅼︎🅲︎🅱︎🅴︎🅽︎-🅼︎🅳︎ 🕷",
  author: process.env.PACK_AUTHER || "𝗠𝗖𝗕𝗘𝗡",
  packname: process.env.PACK_NAME || "🄼🄲🄱🄴🄽",
  botname: process.env.BOT_NAME || "🅼︎🅲︎🅱︎🅴︎🅽︎-🅼︎🅳︎",
  ownername: process.env.OWNER_NAME || "🄼🄲🄱🄴🄽",
  errorChat: process.env.ERROR_CHAT || "233591856630",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
