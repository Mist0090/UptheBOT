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
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからBANしました")
    .setColor('RANDOM')

//BAN
  if (command == 'ban'){
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
        await message.guild.members.ban(id)
        message.channel.send({embeds: [SafeEmbed]})
        return;
      }
      catch (e) {
                      const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからBANできませんでした")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
                          const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
        client.channels.cache.get("914423290167164929").send({embeds: [FailEmbed2]})

      }
    }
    else if (args[0].match(/^\d/)){
    try{
      // await構文を使う事によって、Promiseの状態がfulfilledになるまで待つ事が実現する
      await message.guild.members.ban(id);
              message.channel.send({embeds: [SafeEmbed]})
        return;
    }
    catch (e) {
              const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("メンバーをサーバーからBANできませんでした")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
    console.log(e)
message.channel.send({embeds: [FailEmbed]})
const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
        client.channels.cache.get("914423290167164929").send({embeds: [FailEmbed2]})
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