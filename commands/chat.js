const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.chat") {
    message.guild.channels.create('pd-chat')
    const embed = new MessageEmbed()
    .setTitle('Chat チャンネルを作成しました')
    .setDescription('Chat チャンネルを確認してください')
    .setColor('RANDOM')
    .setFooter('Powered by Replit')
    message.channel.send({
      embeds: [embed]})
    };
}
module.exports = {
  handle
}