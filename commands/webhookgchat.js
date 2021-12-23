const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  
  const fs = require("fs")


async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content == prefix+"webchat") {
  if (!message.channel.permissionsFor(message.guild.me).has("MANAGE_WEBHOOKS")) {
    message.channel.send("Webhookを作成する権限がありません。")
    return;
  }
  message.channel.createWebhook('Flight Webhook Client').then(webhook => {
    var webhookinfo = {
      "id": webhook.id,
      "token": webhook.token,
      "channel": message.channel.id
    }
    var savedata = JSON.stringify(webhookinfo);
    try {
      fs.mkdirSync(`globalchatfiles/${message.guild.id}/`, { recursive: true });
      fs.writeFileSync(`globalchatfiles/${message.guild.id}/webhook.json`, savedata);
      //成功すれば、Webhookが保存されます。
    }
    catch (error) {
      console.log(error.message)
      message.channel.send("参加できませんでした。")
      return;
    }
    var sentchannelid = webhook.channel
    const webhooks = new WebhookClient({id: webhook.id, token: webhook.token})
    webhooks.send("グローバルチャットに参加しました。")
    //ほかのサーバーに参加通知を送る
    //サーバーごとにファイルを読み込んで、webhookで送信する。
    client.guilds.cache.forEach(async guild => {
      try {
        var webhookjoined = JSON.parse(fs.readFileSync(`globalchatfiles/${guild.id}/webhook.json`))
      } catch (err) {
        return;
        //参加していなければ、そのサーバーはパスする。
      }
      var channelid = webhookjoined.channel
      try {
        client.channels.cache.get(channelid).id
      }
      catch (error) {
        return;
        //チャンネルが削除されていたら、動作をキャンセルするコード。
      }
      var webhookid = webhookjoined.id
      var webhooktoken = webhookjoined.token
      if (message.channel.id == sentchannelid) return;
      if (message.guild.id == guild.id) return;
      try {
        await new WebhookClient({id: webhookid, token: webhooktoken}).send(message.guild.name + "が、グローバルチャットに参加しました。", { username: "PowerDyno Webhook", disableMentions: "all"})
      } catch (error) {
const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + error.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
    console.log(error)
      }
    })
    //webhookは、チャンネルごとに10個までしか作れないので、作成できなかった場合には、参加成功メッセージが来ない仕組み。
  }).catch(console.error);
};
try {
  const guild_webhook = JSON.parse(fs.readFileSync(`globalchatfiles/${message.guild.id}/webhook.json`))
  var sentchannelid = guild_webhook.channel
} catch (error) {
  return;
  //読み取れなかった場合、ほとんどの場合は参加していないのでリターンする。
}
if (message.channel.id == sentchannelid) {
  //サーバーごとにファイルを読み込んで、webhookで送信する。
  client.guilds.cache.forEach(async guild => {
    try {
      var webhook = JSON.parse(fs.readFileSync(`globalchatfiles/${guild.id}/webhook.json`))
    } catch (error) {
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + error.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('916873653889667164').send({embeds: [FailEmbed2]})
      return;
      //参加していなければ、そのサーバーはパスする。
    }
    var channelid = webhook.channel
    try {
      client.channels.cache.get(channelid).id
    }
    catch (error) {
      return;
      //チャンネルが削除されていたら、動作をキャンセルするコード。
    }
    var webhookid = webhook.id
    var webhooktoken = webhook.token
    const serverwebhook = new WebhookClient({id: webhookid, token: webhooktoken})
    if (message.channel.id == channelid) return;
    if (message.guild.id == guild.id) return;
    try {
      await serverwebhook.send({
        content: String(message.content),
         username: message.author.tag + "(" + message.author.id + ")",
         avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`,
        disableMentions: "all",
        files: message.attachments.map(attachment => attachment.url),
        })
      const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
      message.react(`${emoji}`)
    }
     catch (error) {
const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + error.toString() + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
    console.log(error)
    }
  })
}
}
module.exports = {
  handle
}