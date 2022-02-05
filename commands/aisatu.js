const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
if (message.content.match(/おはよ/)) {
        let arr = ["おはようございます。いい朝ですね。", "ｵﾊﾖｳｺﾞｻﾞｲﾏｽ。", "おはようございます。眠たいですか？", "おはようございます。お元気ですか？"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(`${result}`)
  }
if (message.content.match(/おやすみ/)) {
        let arr = ["おやすみなさい。早く寝てくださいね", "ｵﾔｽﾐﾅｻｲ。", "おやすみなさい。明日も頑張りましょう", "おやすみなさい"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(`${result}`)
  }
if (message.content.match(/こんにちは/)) {
    message.channel.send(`${message.author.username}さん。こんにちは`)
  }
if (message.content.match(/こんばんは/)) {
    message.channel.send(`${message.author.username}さん。こんにちは`)
  }
}
module.exports = {
  handle
}