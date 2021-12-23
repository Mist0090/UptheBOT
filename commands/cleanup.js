const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
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
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("クリーンアップに失敗しました")
    .addFields(
      {name: "エラー内容", value: e.toString()}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
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
  }
  else{
const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("あなたには権限がありません")
    .addFields(
      {name: "エラー内容", value: "DiscordAPIError: Missing Permissions"}
      )
      .setColor('RANDOM')
      message.channel.send({embeds: [FailEmbed]})
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました（予測しているエラーです）")
    .addFields(
      {name: "エラー内容", value: "```" + "DiscordAPIError: Missing Permissions" + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
  }}
}
module.exports = {
  handle
}