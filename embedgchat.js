const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.channel.name === 'pd-chat') {
    if (message.author.bot) return;
    if (message.attachments.size <= 0) {
    }
    client.channels.cache.forEach(async channel => {
      if (message.attachments.size <= 1) {
        const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setDescription(message.content)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp()
        if (channel.name === 'pd-chat') {
            if(message.channel.id == channel.id){
         const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
        message.react('✅')
    return;
  }
  try{
          await channel.send({embeds: [embed] })
  }
          catch (e) {
      message.channel.send({embeds: [FailEmbed]})
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", client.user.displayAvatarURL)
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
          }
          return;
        }
        return;
      }
      if (!message.guild.channels.cache.forEach(channel => {
        const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setImage(message.attachment)
          .setDescription(message.attachment)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp()
        if (channel.name === 'pd-chat') {
         hannel.send({embeds: [embed] }).then(m => {
      m.delete()
         })
          return;
        }
        return;
      }));
      return;
    });
  }
}
module.exports = {
  handle
}