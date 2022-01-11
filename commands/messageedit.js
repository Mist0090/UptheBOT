const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

  const prefix = "p."
  const searchcmd = "p.search"  


async function handle(old_message, new_message, client) {
  if (old_message.content ==  new_message.content) return;
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
  const logch_name = "pd-log"
  old_message.guild.channels.cache.forEach(async channel => {
    
    old_message.guild.channels.cache.find(c => c.name === "pd-log").send(
        {embeds: [embededit]}
      )
  })
}
module.exports = {
  handle
}