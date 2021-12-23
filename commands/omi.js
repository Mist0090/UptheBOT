const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
  
  if (message.content === "p.おみくじ") {
    let arr = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(`${message.author} さん、${result}です。`)
  }
}
module.exports = {
  handle
}