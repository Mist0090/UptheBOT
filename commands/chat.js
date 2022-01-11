const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.chat") {
  try{
    message.guild.channels.create('pd-chat')
    const embed = new MessageEmbed()
    .setTitle('Chat を正常に作成しました')
    .setDescription('Chat チャンネルを確認してください')
    .setColor('RANDOM')
    .setFooter('Powered by Replit')
    message.channel.send({
      embeds: [embed]})
  }catch (e) {
    const embed = new MessageEmbed()
    .setTitle('Chat の作成に失敗しました')
    .setDescription('エラーが発生したためチャットを作成できませんでした')
    .setColor('RANDOM')
    .setFooter('Powered by Replit')
        .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
    message.channel.send({
      embeds: [embed]})
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
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
    };

}
module.exports = {
  handle
}