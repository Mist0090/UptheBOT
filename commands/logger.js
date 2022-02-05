const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
try{
const embed = new MessageEmbed()
.setAuthor('PowerDyno')
.setTitle('メッセージが送信されました')
.setDescription(`${message.content}`)
.setColor('RANDOM')
.addFields(
 { name: 'ユーザー名', value: '<@!' + message.author + '>' + '(' + message.author.tag + ')' + '\n' + 'ID:' + message.author.id},
{ name: 'チャンネル', value: '<#' + message.channel + '>' + '(' + message.channel.id + ')'},
{ name: 'メッセージID', value: message.id},
{ name: '時間', value: message.createdAt.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })},
{ name: 'メッセージへ飛ぶ', value: `[メッセージへジャンプ](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}) `})
const logch_name = "pd-log"
message.guild.channels.cache.forEach(async channel => {
if (channel.name == logch_name) {
await message.guild.channels.cache.find(c => c.name === "pd-log").send(
{embeds: [embed]}
)
return;
}
})}
catch (e) {
console.log(e)       
 } 
}
module.exports = {
  handle
}