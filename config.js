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
global.style = process.env.STYLE || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pnYndRaTVlbWJsSHZJbm9ONkIxM0V4d2F3YU94UllWYlpGT2tCQVlIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHlLek9VSUdVaVVJN1QrL1NBeURnS2c1QklLS2FYNTJ2MVYrbnQ5UUJBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQ05YSXBuOTZrZ2xoQXB4Vy9UK3NaRk0zNUZsU0FLbXhUN0JTM3pGSzBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZVVCK2dCdW5OdGtHald0U2hIWVA5NExRNVNjTm5LVkhRQXhkMjd6dGo0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLQVlMR2FPSzdJZzN5K0xDdmJlb3RCSVQxU3N6ZFRnMVQrYStDaW56M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0RUdzOHdZb1pEbHhvdTF4L081RTFlTFh0ZHMySXBqSWhiaGZ3bDkxZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhCWlNwMWVibHptUkVrdjU0aDVqVHFKdWdjZS8xRXBmV3l4VXcrWXkxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTZEc0RUUjU3SmppbzB5VG1kKzBBQUFRdHRTZEpPNitvRXJsaDlNeWZWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im11UzJVRitJKzBvWGp4ZzBEMjYvaUl1S2NlcElXZE9uU2JwWklTT3BLNGN1RXZwaHdyNFBCZFdoMzNzSVAzOWk4ekhKVmlFVGd3S29qSmQ5d25HRmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJJNU5rNTF0VVU4RjJ0M0Jpd2ZCTEJLbXFVK3M5WGhOajhpV242Ynk3MHAwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBR3ExZXEyVFJLS1lYdlN6ck1BOURRIiwicGhvbmVJZCI6ImNjZDRhMGY5LTRlNjEtNDQ4NS05NGJjLTI5MzA3MDMwOGQ1ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSW1neXdkMjByS25xVUgrYTcvcURlUDg5NWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHkyejQ3TGgzMVp2MmFXWWx3eXR2UWk4SkN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilc4S0xFWlpTIiwibWUiOnsiaWQiOiIyMzM1OTkxNTA2NzQ6NDRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvbDkrY0VFTXpFcWJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhOd2ZFZnBGc1FFTk4zR3hjODl2dmRyUTRjdk0vV0tyMUVIb083OUNkR1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii8zZmViWitxcHgwdUJDUldWNGFxS1dUc2FkZHpXK0hPOUxFUU9yT25mY3pvTlNhempKbDZFUDQzSWZzS2NublkwR1ZSN0dXQnBzeCtnYy9reitkMGpnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJocXFFUGVCSEl2TUVxWVNSMVZlSnJwNHBKYkRZQW9pb2J3dEhOOFk0alFRT0gvSVp0UWc1MG1UNjFDMGt5SklTM2kzeElIUnNNcEJJSVBJbTBGbU5qZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU5OTE1MDY3NDo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSemNIeEg2UmJFQkRUZHhzWFBQYjczYTBPSEx6UDFpcTlSQjZEdS9RblJtIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI0NDIzMjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFFzIn0="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
