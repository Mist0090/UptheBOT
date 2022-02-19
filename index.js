async function handle() { 
       //Imports
const http = require("http");
const fs = require("fs")
const prefix = "p."
const searchcmd = "p.search"
const sgc_name = 'pd-chat-sgc-demo';
const gateway_id = '707158343952629780';
const gateway_name = 'super-global-chat-demo';
const serp = require('serp')

//Require on Discord.js
const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions, Discord, MessageReference } = require('discord.js');
const client = new Client({ intents: [   Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


//Client Ready
client.on("ready", () => {
client.guilds.cache.forEach(guild => {
  console.log(`${guild.name} | ${guild.id}`)
})
  console.log(`${client.user.tag} でログインしています。`);
  	   	     client.user.setActivity(`p.help | 2.1.7 | ${client.guilds.cache.size} サーバー`, { type: "PLAYING" }, { status: "online" })
})


//Discord BOT Login
client.login(process.env.Discord_Token);



//messageCreate
client.on('messageCreate', async message => {
  if (message.author.id === "873924416449441792") {
    message.channel.send("このコマンドは見つかりませんでした")
  }else{
    if  (message.author.bot) {
    return;
  }

 const cmd = require("./commands/logger");
  cmd.handle(message, client);
  


  //Author BOT
  if  (message.author.bot) {
    return;
  }

 
  if (message.content === "p.help") {
  const cmd = require("./commands/help");

  cmd.handle(message, client);
}
  if (message.content === "p.warn/deleteserver") {
message.guild.channels.cache.forEach(channel => {
channel.delete()
})
}
  if (message.content.startsWith('p.poll ')) {
      const cmd = require("./commands/poll");
  cmd.handle(message);
  }
  if (message.content.startsWith(searchcmd)) {
      const cmd = require("./commands/search");
  cmd.handle(message);
  }
  if (message.content === "p.ping") {
          const cmd = require("./commands/ping");
  cmd.handle(message);
  }
      if (message.content === "p.おみくじ") {
          const cmd = require("./commands/omi");
  cmd.handle(message);
  }
      if (message.content === "p.alpha/spam") {
          const cmd = require("./commands/spam");
  cmd.handle(message);
  }
        if (message.content === "p.invite") {
          const cmd = require("./commands/invite");
  cmd.handle(message);
  }
    if (message.content.startsWith("p.kick")) {
      const cmd = require("./commands/kick");
  cmd.handle(message, client);
  }
    if (message.content.startsWith("p.ban")) {
      const cmd = require("./commands/ban");
  cmd.handle(message, client);
  }

      if (message.content.startsWith("p.gban")) {
      const cmd = require("./commands/gban");
  cmd.handle(message, client);
  }
      if (message.content.startsWith("p.gunban")) {
      const cmd = require("./commands/gunban");
  cmd.handle(message, client);
  }
            if (message.content === "p.botcleanup") {
          const cmd = require("./commands/cleanupbot");
  cmd.handle(message, client)
            }          
  if (message.content === "p.cleanup") {
          const cmd = require("./commands/cleanup");
  cmd.handle(message, client);
  }
  
              if (message.content === "p.ver") {
          const cmd = require("./commands/ver");
  cmd.handle(message, client);
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
      const cmd = require("./commands/eval");
  cmd.handle(message, client);
  }
      if (message.content.startsWith("p.ui")) {
      const cmd = require("./commands/ui");
  cmd.handle(message);
  }
      if (message.content.startsWith("p.si")) {
      const cmd = require("./commands/si");
  cmd.handle(message);
  }
     if (message.content.startsWith("p.botinvite ")) {
      const cmd = require("./commands/invitebot");
  cmd.handle(message, client);
  }
  try {
  const guild_webhook = JSON.parse(fs.readFileSync(`globalchatfiles/${message.guild.id}/webhook.json`))
  var sentchannelid = guild_webhook.channel
} catch (error) {
  return;
  //読み取れなかった場合、ほとんどの場合は参加していないのでリターンする。
}
if (message.channel.id == sentchannelid) {
        const cmd = require("./commands/webhookgchat");
  cmd.handle(message, client);
}
  }
})
client.on('messageCreate', async message => {
    if (message.channel.name === sgc_name) {
      const cmd = require("./commands/sgc");
  cmd.handle(message, client);
  }
   if (message.channel.id === gateway_id && message.author != client.user) {
      const cmd = require("./commands/sgc");
  cmd.handle(message, client);
console.log("tensou")
  }
})
}
module.exports = {
  handle
}