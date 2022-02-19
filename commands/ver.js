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
         {name: '製作者', value: '<@!877173383635304539>(Windows System64#4664 | 877173383635304539)', },
        {name: 'バージョン', value: '2.1.7', }
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