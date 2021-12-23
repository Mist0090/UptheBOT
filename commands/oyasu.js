const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
 if (message.reference) return; 
  if (message.content.match(/おやすみ/)) {
    message.channel.send(`${message.author.username} さん、おやすみなさい。いい夢見てね`)
  }
}
module.exports = {
  handle
}