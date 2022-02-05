const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
  if (message.content === "p.ver") {
    const embed = new MessageEmbed()
       .setTitle('PowerDyno バージョン')
      .setAuthor('PowerDyno', client.user.displayAvatarURL())
	     .setDescription('PowerDyno のバージョンです')
       .addFields(
         {name: 'ビルド', value: '2.1.5.2817.1 ', },
        {name: 'バージョン', value: '2.1.5', }
         )
        .setColor('RANDOM')
       .setTimestamp(new Date())
       .setFooter('Powered by Replit', client.user.displayAvatarURL())
 
      message.channel.send({embeds: [embed] })
  }
}

module.exports = {
  handle
}