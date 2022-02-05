const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.cleanup") {
    if (message.member.permissions.has("ADMINISTRATOR")) {
    // コマンドが送信されたチャンネルから直近100件(上限)メッセージを取得する
     const messages = await message.channel.messages.fetch({ limit: 100 })
     // ボット以外が送信したメッセージを抽出
     const filtered = messages.filter(message => !message.author.bot)
     // それらのメッセージを一括削除
     try{
     await message.channel.bulkDelete(messages, true)
     }catch (e){
       const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", client.user.displayAvatarURL())
    .setFooter('Powered by Replit')
    .setDescription("クリーンアップに失敗しました")
    .addFields(
      {name: "エラー内容", value: e.toString()}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
     }
  }
  else{
const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", client.user.displayAvatarURL())
    .setFooter('Powered by Replit')
    .setDescription("あなたには権限がありません")
      .setColor('RANDOM')
      message.channel.send({embeds: [FailEmbed]})
  }}
}
module.exports = {
  handle
}