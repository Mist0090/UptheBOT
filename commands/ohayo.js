const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
if (message.content.match(/おはよ/)) {
        var date = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
var dayOfWeek = date.getDay() ;	// 曜日(数値)
var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;	// 曜日(日本語表記)
var day = date.getDate() ;	// 日
        let arr = ["おはようございます。いい朝ですね。", "ｵﾊﾖｳｺﾞｻﾞｲﾏｽ。", `おはようございます。今日は${dayOfWeek}日です。`, `おはようございます。今日は${dayOfWeekStr}曜日ですよ。`, "おはようございます。眠たいですか？", "おはようございます。お元気ですか？"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(`${result}`)
  }
}
module.exports = {
  handle
}