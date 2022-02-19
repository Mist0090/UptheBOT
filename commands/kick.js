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
    .setDescription("メンバーをサーバーからKickしました")
    .setColor('RANDOM')

//BAN
  if (command == 'kick'){
    id = args[0]
    if (!args.length){
      message.channel.send("ユーザーが指定されていません")
      return;
    }

    if (args[0].startsWith("<@")){
      let id = args[0].replace(/</g, "")
      id = id.replace(/@/g, "")
      id = id.replace(/>/g, "")
      id = id.replace(/!/g, "")
      try {
      let str = message.content
      let cmd = str.substr( 29 );
        await message.guild.members.kick(id, {reason: cmd})
        message.channel.send({embeds: [SafeEmbed]})
        return;
      }
      catch (e) {
                      const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", client.user.displayAvatarURL())
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからKickできませんでした")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
      }
    }
    else if (args[0].match(/^\d/)){
    try{
      // await構文を使う事によって、Promiseの状態がfulfilledになるまで待つ事が実現する
      let str = message.content
      let cmd = str.substr( 25 );
      await message.guild.members.kick(id, {reason: cmd});
              message.channel.send({embeds: [SafeEmbed]})
        return;
    }
    catch (e) {
              const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", client.user.displayAvatarURL())
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからKickできませんでした")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
    }
    }
     else{
      message.channel.send("ユーザーの指定方法が間違っています。")
      return;
    }}
}
module.exports = {
  handle
}