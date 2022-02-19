const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [   Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

  const prefix = "p."
  const searchcmd = "p.search"  
async function handle(message) {
    if  (message.author.bot) {
    return;
  }
//Eval コマンド
    if (message.content.startsWith("p.ui")){
     let str = message.content
      let id = str.substr( 5 ); 
const uiembed = new MessageEmbed()
.setTitle(message.author.username + " さんの情報")
      .setDescription("あなたの情報を送信します")
      .addFields({name: "ユーザー名", value: message.author.username},
                 {name: "ユーザータグ", value: message.author.discriminator},
{name: "Discord に参加した日", value: message.author.createdAt.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })},
{name: "このサーバーに参加した日", value: message.member.joinedAt.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })},
                 {name: "ID", value: message.author.id})
      message.channel.send({embeds: [uiembed]})
}}
module.exports = {
  handle
}