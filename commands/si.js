const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [   Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

  const prefix = "p."
  const searchcmd = "p.search"  
async function handle(message) {
    if  (message.author.bot) {
    return;
  }
//Eval コマンド
    if (message.content.startsWith("p.si")){
     let str = message.content
      let id = str.substr( 5 ); 
const uiembed = new MessageEmbed()
  
.setTitle(message.guild.name + " の情報")
      .setDescription("このサーバーの情報を送信します")
      .addFields({name: "サーバー名", value: message.guild.name},
                 {name: "サーバーID", value: message.guild.id},
{name: "サーバーを作成した日", value: message.guild.createdAt.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
)
      message.channel.send({embeds: [uiembed]})
}}
module.exports = {
  handle
}