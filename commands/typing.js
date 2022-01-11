const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  



async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.typing") {
  message.channel.sendTyping(6)
   setTimeout(() => {
       message.channel.send(`${message.author.username}さん、完了しました`)
   }, 6000)
}}
module.exports = {
  handle
}