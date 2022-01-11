const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  


async function handle(message, client) {

  try{
   if (!message.guild) return // メッセージが送信された場所がサーバーでなければ処理しない。
 
   const log = (await message.guild.fetchAuditLogs({ type: 'MESSAGE_DELETE' })).entries.first() // サーバーの監査ログからメッセージが削除されたものだけを取得して、最新のものを取得する。
   if (!log) return // メッセージが削除されたログが無ければ処理しない。
 
   const executor = log.executor // これがメッセージを削除したユーザーのオブジェクトです。
  const embed = new MessageEmbed()
  .setAuthor('PowerDyno')
  .setTitle('メッセージが削除されました')
  .setDescription(`${message.content}`)
  .setColor('RANDOM')
  .addFields(
    { name: 'ユーザー名', value: '<@!' + message.author + '>' + '(' + message.author.tag + ')' + '\n' + 'ID:' + message.author.id},
    { name: 'チャンネル', value: '<#' + message.channel + '>' + '(' + message.channel.id + ')'},
    { name: 'メッセージID', value: message.id},
    { name: 'メッセージ削除者', value: "<@!" + executor + ">" + "(" + executor.tag + ")" + "\nID: " + executor.id}

  )
  const logch_name = "pd-log"
  message.guild.channels.cache.forEach(channel => {
    if (channel.name == logch_name) {
      return message.guild.channels.cache.find(c => c.name === "pd-log").send(
{embeds: [embed]}
      )
    }
  })
  }catch (e) {
    const embed = new MessageEmbed()
  .setAuthor('PowerDyno')
  .setTitle('メッセージが削除されました')
  .setDescription(`${message.content}`)
  .setColor('RANDOM')
  .addFields(
    { name: 'ユーザー名', value: '<@!' + message.author + '>' + '(' + message.author.tag + ')' + '\n' + 'ID:' + message.author.id},
    { name: 'チャンネル', value: '<#' + message.channel + '>' + '(' + message.channel.id + ')'},
    { name: 'メッセージID', value: message.id}

  )
  const logch_name = "pd-log"
  
  message.guild.channels.cache.forEach(channel => {
    if (channel.name == logch_name) {
      return message.guild.channels.cache.find(c => c.name === "pd-log").send(
{embeds: [embed]}
      )
    }
  })
}}
module.exports = {
  handle
}