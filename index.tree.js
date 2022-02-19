async function handle() {
const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [   Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const http = require("http");


//Client Ready
client.on("ready", () => {
  console.log(`${client.user.tag} でログインしています。`);
  	   	     client.user.setActivity(`サポートが終了しました`, { type: "PLAYING" }, { status: "online" })
})


//Discord BOT Login
client.login(process.env.Discord_Token_Tree);
}
module.exports = {
  handle
}