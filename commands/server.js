const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  



async function handle(message, client) {
    if  (message.author.bot) {
    return;
  }
if (message.content === "p.server") {
  message.channel.send("ああああ")
                  let count = 0;
let guildlist = [];
let guilds = [];
let owner;
let exit = false;
client.guilds.cache.forEach(guild => {
  guildlist.push(guild);
});
let guild = [];
while (exit == true){
  count = count + 1;
  eval('let guild' + count + ' = guildlist.slice(0, 25)\nguild.push(guild' + count + ')');
  if (guildlist.length <= 25){
    exit = true
  }
  guildlist = guildlist.slice(25);
}
let ServerEmbed;
guild.forEach(async gl =>{
  count = count + 1;
  ServerEmbed = new MessageEmbed()
    .setTitle("サーバー一覧" + count)
    .setDescription("以下")
    .setColor("RAMDOM")
  gl.forEach(async go =>{
    owner = await go.fetchOwner();
    ServerEmbed.addField(go.name, "ID: " + go.id + "\nオーナー: " + owner.tag + "\nオーナーID: " + go.ownerId);
  });
  await message.channel.send({embeds: [ServerEmbed]});
});
  }
}
module.exports = {
  handle
}