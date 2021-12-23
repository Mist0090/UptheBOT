const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');

  const prefix = "p."

async function handle(message) {
    if  (message.author.bot) {
    return;
  }
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
}

module.exports = {
  handle
}