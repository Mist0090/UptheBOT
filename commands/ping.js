const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
  if (message.content === "p.ping") {
    const PingCEmbed = new MessageEmbed()
    .setTitle('Ping値を測定しています')
    .setDescription('もう少しで完了します')
    .setColor('RANDOM')
    message.channel.send({embeds: [PingCEmbed]}).then(m => {
      m.delete()
          const PingEmbed = new MessageEmbed()
      .setTitle('Pong!')
      .setDescription(`Pingは${m.createdTimestamp - message.createdTimestamp}msです`)
      .setColor('RANDOM')
      .setFooter('Powered by Replit')
m.channel.send({embeds: [PingEmbed]})
    })
  }
}
module.exports = {
  handle
}