const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."
  const searchcmd = "p.search"  

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
//Eval コマンド
    if (message.content.startsWith("p.eval ")){ 
      try{
    if (message.author.id === "877173383635304539"){
      const DevMess = new MessageEmbed()
    .setTitle("実行中")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
      .setColor('RANDOM')
            const DevMess1 = new MessageEmbed()
    .setTitle("実行完了")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
      .setColor('RANDOM')
      const runmessage = await message.channel.send({embeds: [DevMess]});
      let str = message.content
      let cmd = str.substr( 7 );
      eval(cmd);
      runmessage.edit({embeds: [DevMess1]})
      return;
    }else{
      const DevOnly = new MessageEmbed()
    .setTitle("このコマンドは使用できません")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("このコマンドはボット運営者のみ使用できます")
      .setColor('RANDOM')
      message.reply({embeds: [DevOnly]});
      return;
    }}
    catch (e){
      const DevMesserr = new MessageEmbed()
    .setTitle("エラーが発生しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter(`Powered by Replit. エラー内容: + ${e.toString()}`)
      .setColor('RANDOM')
      message.channel.send({embeds: [DevMesserr]})
    console.log(e)
    }
  }
}
module.exports = {
  handle
}