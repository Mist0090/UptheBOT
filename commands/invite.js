const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.invite") {
    const embed = new MessageEmbed()
    .setTitle("PowerDyno を招待する")
    .setDescription("PowerDyno の招待リンクを送信します")
    .setFields(
      { name: "管理者権限あり", value: "https://discord.com/api/oauth2/authorize?client_id=905354930309701662&permissions=8&scope=bot"},
      {name: "推奨リンク", value: "https://discord.com/api/oauth2/authorize?client_id=905354930309701662&permissions=540273750&scope=bot"}
)
.setColor('RANDOM')
.setFooter('Powered by Replit')
message.channel.send({embeds: [embed]});
  }
}
module.exports = {
  handle
}