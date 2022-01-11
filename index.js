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
  	   	     client.user.setActivity(`p.help | ${client.ws.ping} ms | 2.1.1`, { type: "PLAYING" }, { status: "online" })
 setTimeout(() => {
	   	     client.user.setActivity(`p.help | ${client.ws.ping} ms | 2.1.1`, { type: "PLAYING" }, { status: "online" })
	 }, 7000)
	 }, 15000)
//Sleep Function
function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
}

//Discord BOT Login
client.login(process.env.Discord_Token);

//messageCreate
client.on('messageCreate', async message => {
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
    { name: 'メッセージへ飛ぶ', value: `[メッセージへジャンプ](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}) `}

  )
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
      
    }
  if (message.mentions.has(client.user)) {
      if (message.reference) return;
    message.channel.send("プレフィックスは``p.``です")
    return;
  }

  //Author BOT
  if  (message.author.bot) {
    return;
  }

  if (message.content === "p.help") {
  const cmdhelp = require("./commands/help");
  cmdhelp.handle(message, client);
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
          const cmd = require("./commands/invite");
  cmd.handle(message);
  }
          if (message.content === "p.chat") {
            
          const cmd = require("./commands/chat");
  cmd.handle(message, client);
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
          const cmd = require("./commands/cleanupbot");
  cmd.handle(message, client)
            }          
  if (message.content === "p.cleanup") {
          const cmd = require("./commands/cleanup");
  cmd.handle(message, client);
  }
    if (message.content === "p.bc") {
          const cmd = require("./commands/bccleanup");
  cmd.handle(message, client);
  }
  
              if (message.content === "p.ver") {
          const cmd = require("./commands/ver");
  cmd.handle(message);
  }
                if (message.content === "p.webchat") {
          const cmd = require("./commands/webhookgchat");
  cmd.handle(message, client);
  }
                  if (message.content === "p.server") {
          const cmd = require("./commands/server");
  cmd.handle(message, client);
  }
                    if (message.content === "p.typing") {
          const cmd = require("./commands/typing");
  cmd.handle(message, client);
  }
  
      if (message.content.startsWith("p.eval")) {
      const cmdsearch = require("./commands/eval");
  cmdsearch.handle(message, client);
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
//client.on('messageDelete', async message => {
  // const cmdsearch = require("./commands/messagedelete");
  //cmdsearch.handle(message, client);
 // })
//client.on('messageUpdate', async (old_message, new_message) => {
   //  const cmdsearch = require("./commands/messageedit");
 // cmdsearch.handle(new_message, old_message, client);
//})

  

