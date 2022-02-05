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
  }
    };

}
module.exports = {
  handle
}