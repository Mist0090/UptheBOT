const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
//BAN（準備）
 const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
    //成功したとき
              const SafeEmbed = new MessageEmbed()
    .setTitle("成功しました")
    .setAuthor("PowerDyno", client.user.displayAvatarURL())
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからGBANしました")
    .setColor('RANDOM')

if (command == "gban"){
    if (message.author.id === '877173383635304539') {
 id = args[0]
    if (!args.length){
      message.channel.send("ユーザーが指定さ  れていません")
      return;
    }

    if (args[0].startsWith("<@")){
      let id = args[0].replace(/</g, "")
      id = id.replace(/@/g, "")
      id = id.replace(/>/g, "")
      id = id.replace(/!/g, "")
        client.guilds.cache.forEach(async guild => {
  try{
      let str = message.content
      let cmd = str.substr( 29 );
  await guild.members.ban(id, {reason: cmd})
return;
  }catch (e){
    message.channel.send(guild.name + "でBANに失敗しました。")
    message.channel.send(guild.name + "のエラー理由: " + "```" + e.toString() + "```")
  }
}) 
      }
    
    else if (args[0].match(/^\d/)){
     client.guilds.cache.forEach(async guild => {
try{
      let str = message.content
      let cmd = str.substr( 25 );
  await guild.members.ban(id, {reason: cmd})
return;
  }catch (e){
    message.channel.send(guild.name + "でBANに失敗しました。")
    message.channel.send(guild.name + "のエラー理由: " + "```" + e.toString() + "```")
  }})
}
}}}
module.exports = {
  handle
}