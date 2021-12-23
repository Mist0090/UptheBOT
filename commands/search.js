const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
  if (message.content.startsWith('p.search')) {
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      const google = args.join(' ');
    message.channel.send(`**Google検索結果のページ:**\nhttps://www.google.com/search?q=${google}`)
  }
}

module.exports = {
  handle
}