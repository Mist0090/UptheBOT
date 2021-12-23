const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
  //こんばんは
  if (message.content.match(/こんばんは/)) {
    message.channel.send(`${message.author.username} さん、こんばんは。`)
  }
}
module.exports = {
  handle
}