const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
if (message.content.startsWith("p.botinvite ")) {
      let str = message.content
      let cmd = str.substr( 12 );
    const embed = new MessageEmbed()
    .setTitle("ほかのボットを招待する")
    .setDescription("ほかのボットの招待リンクを表示します")
    .setFields(
      { name: "管理者権限あり", value: `[アクセス](https://discord.com/api/oauth2/authorize?client_id=${cmd}&permissions=8&scope=bot)`},
      {name: "推奨リンク", value: `[アクセス](https://discord.com/api/oauth2/authorize?client_id=${cmd}&permissions=540273750&scope=bot)`},
      {name: "権限を選ぶ", value: `[アクセス](https://discord.com/api/oauth2/authorize?client_id=${cmd}&permissions=16449724743598&scope=bot)`}
)
.setColor('RANDOM')
.setFooter('Powered by Replit')
message.channel.send({embeds: [embed]});
  }
}
module.exports = {
  handle
}