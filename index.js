//Imports
const http = require("http");
const fs = require("fs")
const prefix = "p."
const searchcmd = "p.search"

//Require on Discord.js
const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Http.CreateServer
http.createServer(function(req, res){
  res.write("OK");
  res.end();
 }).listen(8080);

//Client Ready
client.on("ready", () => {
  console.log(`${client.user.tag} でログインしています。`);
  client.channels.cache.get('914423290167164929').send("PowerDyno が起動しました。")
  client.user.setActivity(`起動準備中...`, { type: "PLAYING" }, { status: "online" })
   setTimeout(() => {
	     client.user.setActivity(`p.help | ${client.guilds.cache.size} サーバー | 2.1.0`, { type: "PLAYING" }, { status: "online" })
        setTimeout(() => {
	   	     client.user.setActivity(`p.help | ${client.ws.ping} ms | 2.1.0`, { type: "PLAYING" }, { status: "online" })
	 }, 7000)
        setTimeout(() => {
	   	     client.user.setActivity(`p.help | ${client.users.cache.size} メンバー`, { type: "PLAYING" }, { status: "online" })
	 }, 10000)
	 }, 15000)


})

//Sleep Function
function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
}

//Discord BOT Login
client.login(process.env.Discord_Token);

//messageCreate (Sub Class)
client.on('messageCreate', async message => {

  if (message.content === "p.help") {
  const cmdhelp = require("./commands/help");
  cmdhelp.handle(message);
}
  if (message.content.startsWith('p.poll ')) {
      const cmdpoll = require("./commands/poll");
  cmdpoll.handle(message);
  }
  if (message.content.startsWith(searchcmd)) {
      const cmdsearch = require("./commands/search");
  cmdsearch.handle(message);
  }
  if (message.content === "p.ping") {
          const cmdping = require("./commands/ping");
  cmdping.handle(message);
  }
      if (message.content === "p.おみくじ") {
          const cmdomi = require("./commands/omi");
  cmdomi.handle(message);
  }
  if (message.content.match(/おはよ/)) {
              const cmdohayo = require("./commands/ohayo");
  cmdohayo.handle(message);
  }
    if (message.content.match(/おやすみ/)) {
              const cmdoyasu = require("./commands/oyasu");
  cmdoyasu.handle(message);
  }
      if (message.content.match(/こんにちは/)) {
              const cmdkonni = require("./commands/konni");
  cmdkonni.handle(message);
  }
        if (message.content.match(/こんばんは/)) {
              const cmdkonba = require("./commands/konba");
  cmdkonba.handle(message);
  }
        if (message.content === "p.invite") {
          const cmdinvite = require("./commands/invite");
  cmdinvite.handle(message);
  }
          if (message.content === "p.chat") {
          const cmdinvite = require("./commands/chat");
  cmdinvite.handle(message);
  }
    if (message.content.startsWith("p.ban")) {
      const cmdsearch = require("./commands/ban");
  cmdsearch.handle(message, client);
  }
      if (message.content.startsWith("p.gban")) {
      const cmdsearch = require("./commands/gban");
  cmdsearch.handle(message, client);
  }
            if (message.content === "p.botcleanup") {
          const cmdinvite = require("./commands/botcleanup");
  cmdinvite.handle(message)
            }          
  if (message.content === "p.cleanup") {
          const cmdinvite = require("./commands/cleanup");
  cmdinvite.handle(message);
  }
  
              if (message.content === "p.ver") {
          const cmdinvite = require("./commands/ver");
  cmdinvite.handle(message);
  }
                if (message.content === "p.webchat") {
          const cmdinvite = require("./commands/webhookgchat");
  cmdinvite.handle(message, client);
  }
                  if (message.content === "p.server") {
          const cmdinvite = require("./commands/server");
  cmdinvite.handle(message, client);
  }
  
      if (message.content.startsWith("p.eval")) {
      const cmdsearch = require("./commands/eval");
  cmdsearch.handle(message);
  }
  if (message.channel.name === 'pd-chat') {
      const cmdsearch = require("./commands/embedgchat");
  cmdsearch.handle(message, client);
  }
  try {
  const guild_webhook = JSON.parse(fs.readFileSync(`globalchatfiles/${message.guild.id}/webhook.json`))
  var sentchannelid = guild_webhook.channel
} catch (error) {
  return;
  //読み取れなかった場合、ほとんどの場合は参加していないのでリターンする。
}
if (message.channel.id == sentchannelid) {
        const cmdsearch = require("./commands/webhookgchat");
  cmdsearch.handle(message, client);
}

})

//messageCreate (Main Class)
client.on("messageCreate", async message => {
  //mention
    if (message.mentions.has(client.user)) {
      if (message.reference) return;
    message.channel.send("プレフィックスは``p.``です")
    return;
  }

  //Author BOT
  if  (message.author.bot) {
    return;
  }

    
  
  //cleanup
  
  
  //Embed Global Chat


  //Webhook Global Chat
 

})
client.on('messageDelete', async message => {
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
  
})
client.on('messageUpdate', async (old_message, new_message) => {
  if (old_message.content == new_message.content) return;
    const embededit = new MessageEmbed()
  .setAuthor('PowerDyno')
  .setTitle('メッセージが編集されました')
  .setColor('RANDOM')
  .addFields(
    { name: '編集前', value: old_message.content},
    { name: '編集後', value: new_message.content},
    { name: 'ユーザー名', value: '<@!' + old_message.author + '>' + '(' + old_message.author.tag + ')' + '\n' + 'ID:' + old_message.author.id},
    { name: 'チャンネル', value: '<#' + old_message.channel.id + '>' + '(' + old_message.channel.id + ')'},
    { name: 'メッセージID', value: old_message.id}

  )
  const logch_name = "pd-log"
  old_message.guild.channels.cache.forEach(async channel => {
    if (channel.name == logch_name) 
    await old_message.guild.channels.cache.find(c => c.name === "pd-log").send(
        {embeds: [embededit]}
      )
  })
})

