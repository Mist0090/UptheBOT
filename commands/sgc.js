const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

const sgc_name = 'pd-chat-sgc-demo';
const gateway_id = '707158343952629780';
async function handle(message, client) {

if (message.channel.name === sgc_name)
    {
        if (message.author.bot) return;
            
        var dic = {}
      dic["type"] = "message";
    dic["version"] = "1.7"; 
        dic["userId"] = message.author.id;
        dic["userName"] = message.author.username;
               dic["messageId"] = message.id;   
     dic["channelId"] = message.channel.id;    
          dic["channelName"] = message.channel.name;     
        dic["userDiscriminator"] = message.author.discriminator;
        dic["userAvatar"] = message.author.avatar;
        dic["guildId"] = message.guild.id;
        dic["guildName"] = message.guild.name;
        dic["guildIcon"] = message.guild.icon;
        dic["content"] = message.content;
try{
dic["reference"] = message.reference.messageId;
}catch(e)
{
console.log(e)
}
        dic["isBot"] = message.author.bot;
        arr = []
        if (message.attachments.size > 0) {
            message.attachments.forEach(attachment =>
            {
                arr.push(encodeURI(attachment.proxyURL))
            });
            dic["attachmentsUrl"] = arr;
        }
        var json = JSON.stringify(dic);
        var channel = client.channels.cache.get(gateway_id);
        channel.send(json)
        client.channels.cache.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(message.content)
                    .setColor('RANDOM')
                    .setFooter(message.guild.name + " / PowerDyno / mID:" + message.id, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === sgc_name)
                {
                  const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
      message.react(`${emoji}`)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setImage(attachment.proxyURL)
                    .setDescription(message.content)
                    .setColor('RANDOM')
.addFields(
  {name: "添付ファイル", value: `[添付ファイルのリンク](${attachment.url})`}
)
                    .setFooter(message.guild.name + " / PowerDyno / " + message.id, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === sgc_name)
                {
                    
                  const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
      message.react(`${emoji}`)
                    return;
                }
                return;
            }));
            return;
        });
    
    }
    if (message.channel.id === gateway_id && message.author != client.user)
    {
        const JSONbig = require('json-bigint');
        var dic = JSONbig.parse(message.content);
        client.channels.cache.forEach(channel =>
        {
const emoji = client.emojis.cache.find(emoji => emoji.name === "PowerDynoCheck");
      message.react(`${emoji}`)

            if ("attachmentsUrl" in dic){
                dic["attachmentsUrl"].forEach(attachment => {
                    const embed = new MessageEmbed()
                        .setAuthor(dic["userName"]+"#"+dic["userDiscriminator"], `https://media.discordapp.net/avatars/${dic["userId"]}/${dic["userAvatar"]}.png?size=1024`)
.addFields(
  {name: "添付ファイル", value: `[添付ファイルのリンク](${decodeURI(attachment)})`}
)
                        .setImage(decodeURI(attachment))
                        .setDescription(dic["content"])
                        .setColor('RANDOM')
.setFooter(dic["guildName"] + ` / ` + message.author.username + " / mID:" +  dic["messageId"], `https://media.discordapp.net/icons/${dic["guildId"]}/${dic["guildIcon"]}.png?size=1024`)
                        .setTimestamp()
                
            

           if (channel.name === sgc_name) {
channel.send({embeds: [embed]})
                        return;
                    }
                })
                }else{
const embed = new MessageEmbed()
                        .setAuthor(dic["userName"]+"#"+dic["userDiscriminator"], `https://media.discordapp.net/avatars/${dic["userId"]}/${dic["userAvatar"]}.png?size=1024`)
                        .setDescription(dic["content"])
                        .setColor('RANDOM')
                        .setFooter(dic["guildName"] + ` / ` + message.author.username + " / mID:" +  dic["messageId"], `https://media.discordapp.net/icons/${dic["guildId"]}/${dic["guildIcon"]}.png?size=1024`)
                        .setTimestamp()
if (channel.name === sgc_name) {
channel.send({embeds: [embed]})
                        return;
                    }
}
    })
}
}
module.exports = {
  handle
}