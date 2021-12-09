const http = require('http');
http.createServer(function(req, res) {
  res.write("online");
  res.end();
}).listen(8080); 

//Discord.js Imports
const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//Component Imports
const fs = require("fs")
const prefix = "p."
const searchcmd = "p.search"

client.on("ready", () => {
  console.log(`${client.user.tag} でログインしています。`);
  client.channels.cache.get('914423290167164929').send("PowerDyno が起動しました。")
  client.user.setActivity(`p.help | ${client.guilds.cache.size} サーバー | 2.0.2`, { type: "PLAYING" }, { status: "online" });
})
function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
}
client.login(process.env.Discord_Token);

client.on("messageCreate", async message => {
    if (message.mentions.has(client.user)) {
      if (message.reference) return;
    message.channel.send("プレフィックスは``p.``です")
    return;
  }
  if (message.author.bot) {
    return;
  }
  if (message.content === "p.help") {
    const embed = new MessageEmbed()
       .setTitle('PowerDyno ヘルプ')
      .setAuthor('PowerDyno', 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
	     .setDescription('PowerDyno のヘルプ')
       .addFields(
         {name: 'p.help', value: 'このコマンドヘルプ', inline: true},
         {name: 'p.ping', value: 'Ping値を送信します', inline: true},
         {name: 'p.chat', value: 'Chat を作成します', inline: true},
         {name: 'p.webchat', value: 'Chat Webhook を作成します', inline: true},
         {name: 'p.ver', value: 'PowerDyno のバージョン', inline: true},
         {name: 'p.poll', value: '簡単な投票ができます', inline: true},
         {name: 'p.おみくじ', value: '簡単なおみくじです', inline: true},
         {name: 'p.invite', value: '招待リンクを送信します', inline: true},
         {name: 'p.search', value: 'Google検索ページを表示します', inline: true},
         {name: 'p.cleanup', value: 'チャンネルのメッセージを100個削除します (14日後にもう一回できます）', inline: true},
         {name: 'p.ban', value: 'メンバーをBANできます', inline: true},
         {name: 'p.gban', value: 'メンバーをGBANできます（BOT運営者のみ）', inline: true},
         {name: 'p.eval', value: 'コードを実行します（BOT運営者のみ）', inline: true})
        .setColor('RANDOM')
       .setTimestamp(new Date())
       .setFooter('Powered by Replit', 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
 
      message.channel.send({embeds: [embed] })

  }

  //Poll
  if (message.content.startsWith('p.poll')) {
    if (!message.content.startsWith(prefix)) return
    const [command, ...args] = message.content.slice(prefix.length).split(' ')
    const [title, ...choices] = args
    if (!title) return message.channel.send('タイトルを指定してください')
    const emojis = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']
    if (choices.length < 1 || choices.length > emojis.length)
      return message.channel.send(`選択肢は${emojis.length}までにしてください`)
      const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setTitle(title)
      .setDescription(choices.map((c, i) => `${emojis[i]} ${c}`).join('\n'))
      .setTimestamp(new Date())
      .setFooter('リアクションで投票できます')
      .setColor('RANDOM')
    const poll = await message.channel.send({
      embeds: [embed]
    })
    emojis.slice(0, choices.length).forEach(emoji => poll.react(emoji))
    message.delete()
  }

//Search
  if (message.content.startsWith(searchcmd)) {
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
      const google = args.join(' ');
    message.channel.send(`**Google検索結果のページ:**\nhttps://www.google.com/search?q=${google}`)
  }

  //Ping
  if (message.content === "p.ping") {
    const PingCEmbed = new MessageEmbed()
    .setTitle('Ping値を測定しています')
    .setDescription('もう少しで完了します')
    .setColor('RANDOM')
    message.channel.send({embeds: [PingCEmbed]}).then(m => {
      m.delete()
          const PingEmbed = new MessageEmbed()
      .setTitle('Pong!')
      .setDescription(`Pingは${m.createdTimestamp - message.createdTimestamp}msです`)
      .setColor('RANDOM')
      .setFooter('Powered by Replit')
m.channel.send({embeds: [PingEmbed]})
    })
  }

  //おみくじ
  if (message.content === "p.おみくじ") {
    let arr = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
    var random = Math.floor(Math.random() * arr.length);
    var result = arr[random];
    message.channel.send(`${message.author} さん、${result}です。`)
  }

  //おはよう
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

  //おやすみ
  if (message.content.match(/おやすみ/)) {
    message.channel.send(`${message.author.username} さん、おやすみなさい。`)
  }

  //こんにちは
  if (message.content.match(/こんにちは/)) {
    message.channel.send(`${message.author.username} さん、こんにちは。`)
  }

  //こんばんは
  if (message.content.match(/こんばんは/)) {
    message.channel.send(`${message.author.username} さん、こんばんは。`)
  }

  //Invite
  if (message.content === "p.invite") {
    const embed = new MessageEmbed()
    .setTitle("PowerDyno を招待する")
    .setDescription("PowerDyno の招待リンクを送信します")
    .setFields(
      { name: "管理者権限あり", value: "https://discord.com/api/oauth2/authorize?client_id=905354930309701662&permissions=8&scope=bot"},
      {name: "推奨リンク", value: "https://discord.com/api/oauth2/authorize?client_id=905354930309701662&permissions=540273750&scope=bot"}
)
.setColor('RANDOM')
.setFooter('Powered by Replit')
message.channel.send({embeds: [embed]});
  }

  //Global Chat Create
  if (message.content === "p.chat") {
    message.guild.channels.create('pd-chat')
    const embed = new MessageEmbed()
    .setTitle('Chat チャンネルを作成しました')
    .setDescription('Chat チャンネルを確認してください')
    .setColor('RANDOM')
    .setFooter('Powered by Replit')
    message.channel.send({
      embeds: [embed]})
    };

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
      {name: "エラー内容", value: e.toString()}
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
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
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
      {name: "エラー内容", value: e.toString()}
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
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
    }
    }
     else{
      message.channel.send("ユーザーの指定方法が間違っています。")
      return;
    }}

  //GBAN
  if (command == "gban"){
    if (message.author.id === '877173383635304539') {
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
        client.guilds.cache.forEach(async guild => {
  try{
  await guild.members.ban(id, {reason: "PowerDyno によってGBAN されました"})
  }catch (e){
    message.channel.send(guild.name + "でBANに失敗しました。")
    message.channel.send(guild.name + "のエラー理由: " + e.toString())
    client.channels.cache.get('914423290167164929').send(guild.name + "でBANに失敗しました")
        client.channels.cache.get('914423290167164929').send(guild.name + "のエラー理由: " + e.toString())
  }
}) 
      }
    }
    else if (args[0].match(/^\d/)){
    
      await client.guilds.cache.forEach(guild =>{
  guild.members.ban(id, {reason: "PowerDyno によってGBANされました"})
})
}}

    //Eval コマンド
    if (message.content.startsWith("p.eval ")){ 
      try{
    if (message.author.id === "877173383635304539"){
      message.channel.send('実行中...');
      let str = message.content
      let cmd = str.substr( 7 );
      eval(cmd);
      message.channel.send("実行しました。");
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
const FailEmbed = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
    message.channel.send({embeds: [FailEmbed]})
    console.log(e)
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
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
    }
  }
  
  //cleanup
  if (message.content === "p.cleanup") {
    if (message.member.permissions.has("ADMINISTRATOR")) {
    // コマンドが送信されたチャンネルから直近100件(上限)メッセージを取得する
     const messages = await message.channel.messages.fetch({ limit: 100 })
     // ボット以外が送信したメッセージを抽出
     const filtered = messages.filter(message => !message.author.bot)
     // それらのメッセージを一括削除
     try{
     await message.channel.bulkDelete(messages)
     }catch (e){
       const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("クリーンアップに失敗しました")
    .addFields(
      {name: "エラー内容", value: e.toString()}
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
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
     }
  }
  else{
const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("あなたには権限がありません")
    .addFields(
      {name: "エラー内容", value: "DiscordAPIError: Missing Permissions"}
      )
      .setColor('RANDOM')
      message.channel.send({embeds: [FailEmbed]})
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました（予測しているエラーです）")
    .addFields(
      {name: "エラー内容", value: "```" + "DiscordAPIError: Missing Permissions" + "```"},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
  }}
  
  //Embed Global Chat
if (message.channel.name === 'pd-chat') {
    if (message.author.bot) return;
    if (message.attachments.size <= 0) {
    }
    client.channels.cache.forEach(channel => {
      if (message.attachments.size <= 1) {
        const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setDescription(message.content)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp()
        if (channel.name === 'pd-chat') {
            if(message.channel.id == channel.id){
         const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
        message.react(`${emoji}`)
    return;
  }
          channel.send({embeds: [embed] })
          return;
        }
        return;
      }
      if (!message.guild.channels.cache.forEach(channel => {
        const embed = new MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL())
          .setImage(message.attachment)
          .setDescription(message.attachment)
          .setColor('RANDOM')
          .setFooter(message.guild.name, message.guild.iconURL())
          .setTimestamp()
        if (channel.name === 'pd-chat') {
         channel.send({embeds: [embed] }).then(m => {
      m.delete()
         })
          return;
        }
        return;
      }));
      return;
    });
  }

  //Webhook Global Chat
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

})
client.on('messageDelete', async message => {
    if (message.author.bot) {
    return;
  }
  if (message.webhookID) return;
  try{
  const embed = new MessageEmbed()
  .setAuthor('PowerDyno')
  .setTitle('メッセージが削除されました')
  .setDescription(`${message.content}`)
  .setColor('RANDOM')
  .addFields(
    { name: 'ユーザー名', value: '<@!' + message.author + '>' + '(' + message.author.tag + ')' + '\n' + 'ID:' + message.author.id},
    { name: 'チャンネル', value: '<#' + message.channel + '>' + '(' + message.channel.id + ')'},
    { name: 'メッセージID', value: message.id}

  )
  const logch_name = "fs-log"
  message.guild.channels.cache.forEach(channel => {
    if (channel.name == logch_name) {
      const channel = message.guild.channels.cache.find(c => c.name === "fs-log").send(
{embeds: [embed]}
      )
    }
  })
  }catch (e)
  {
                          const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"}
      )
      .setColor('RANDOM')
      message.channel.send({embeds: [FailEmbed]})
    console.log(e)
    const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: e.toString()},
      {name: "サーバー", value: message.guild.name + "(" + message.guild.id + ")"},
      {name: "チャンネル", value: message.channel.name + "(" + message.channel.id + ")"},
      {name: "ユーザー", value: message.author.tag + "(" + message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
  }
})
client.on('messageUpdate', async (old_message, new_message) => {
  try{
      if (new_message.author.bot) {
    return;
  }
  if (new_message.webhookID) return;
  

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
  const logch_name = "fs-log"
  old_message.guild.channels.cache.forEach(async channel => {
    if (channel.name == logch_name) 
    await old_message.guild.channels.cache.find(c => c.name === "fs-log").send(
        {embeds: [embededit]}
      )
  })
  }
  catch (e)
  {
const FailEmbed = new MessageEmbed()
    .setTitle("失敗しました")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: e.toString()}
      )
      .setColor('RANDOM')
      
      new_message.channel.send({embeds: [FailEmbed]})
      const FailEmbed2 = new MessageEmbed()
    .setTitle("PowerDyno BOT エラー")
    .setAuthor("PowerDyno", 'https://color.dyno.gg/dynoav?url=https://cdn.discordapp.com/avatars/877173383635304539/a_019ce6c8bf53bbc514628cff7f52cf1d.gif?size=256?r=1.1')
    .setFooter('Powered by Replit')
    .setDescription("エラーが発生しました")
    .addFields(
      {name: "エラー内容", value: "```" + e.toString() + "```"},
      {name: "サーバー", value: new_message.guild.name + "(" + new_message.guild.id + ")"},
      {name: "チャンネル", value: new_message.channel.name + "(" + new_message.channel.id + ")"},
      {name: "ユーザー", value: new_message.author.tag + "(" + new_message.author.id + ")"}
      )
      .setColor('RANDOM')
    client.channels.cache.get('914423290167164929').send({embeds: [FailEmbed2]})
    console.log(e)
  }
})

