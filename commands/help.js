const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
  if (message.content === "p.help") {
    const embed = new MessageEmbed()
       .setTitle(`${client.user.username} ヘルプ`)
      .setAuthor(client.user.username, client.user.displayAvatarURL())
	     .setDescription('PowerDyno のヘルプ')
       .addFields(
         {name: 'p.help', value: 'このコマンドヘルプ', inline: true},
         {name: 'p.ping', value: 'Ping値を送信します', inline: true},
         {name: 'p.chat', value: 'Chat を作成します', inline: true},
         {name: 'p.webchat', value: 'Chat Webhook を作成します', inline: true},
         {name: 'p.ver', value: 'PowerDyno のバージョン', inline: true},
         {name: 'p.poll', value: '簡単な投票ができます', inline: true},
         {name: 'p.おみくじ', value: '簡単なおみくじです', inline: true},
         {name: 'p.invite', value: '招待リンクを送信します', inline: true},
         {name: 'p.search', value: 'Google検索ページを表示します', inline: true},
         {name: 'p.cleanup', value: 'チャンネルのメッセージを100個削除します (14日前のメッセージは削除不可能）', inline: true},
                  {name: 'p.typing', value: '**PowerDyno**が入力中を表示します', inline: true},
         {name: 'p.ban', value: 'メンバーをBANできます', inline: true},
         {name: 'p.gban', value: 'メンバーをGBANできます（BOT運営者のみ）', inline: true},
         {name: 'p.botcleanup', value: 'ボットのメッセージを100個削除します（クリーンアップの仕様適用)', inline: true},
         {name: 'p.eval', value: 'コードを実行します（BOT運営者のみ）', inline: true})
        .setColor('RANDOM')
       .setTimestamp(new Date())
       .setFooter("Developed by Flight Sky", client.user.displayAvatarURL())
 
      message.channel.send({embeds: [embed] })
  }
}

module.exports = {
  handle
}