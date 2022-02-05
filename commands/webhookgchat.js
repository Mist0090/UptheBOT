const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const fs = require("fs")

async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content == "p.webchat") {
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
      if (message.content === '') {
      await serverwebhook.send({
         username: message.author.tag + "(" + message.author.id + ")",
         avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`,
        disableMentions: "all",
        files: message.attachments.map(attachment => attachment.url),
        })
      }else{
      await serverwebhook.send({
        content: String(message.content),
         username: message.author.tag + "(" + message.author.id + ")",
         avatarURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`,
        disableMentions: "all",
        files: message.attachments.map(attachment => attachment.url),
        })
      }
      const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
      message.react(emoji)
    }
     catch (error) {
    console.log(error)
    }
  })
}
}
module.exports = {
  handle
}