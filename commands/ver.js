const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

function handle(message) {
    if  (message.author.bot) {
    return;
  }
  if (message.content === "p.ver") {
    const embed = new MessageEmbed()
       .setTitle('PowerDyno バージョン')
      .setAuthor('PowerDyno', 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
	     .setDescription('PowerDyno のバージョンです')
       .addFields(
         {name: 'ビルド', value: '2.1.1.2790.100', },
         {name: 'バージョン', value: '2.1.1', }
         )
        .setColor('RANDOM')
       .setTimestamp(new Date())
       .setFooter('Powered by Replit', 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
 
      message.channel.send({embeds: [embed] })
  }
}

module.exports = {
  handle
}