const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
  if (message.content.match(/こんにちは/)) {
    message.channel.send(`${message.author.username} さん、こんにちは。`)
  }
}
module.exports = {
  handle
}