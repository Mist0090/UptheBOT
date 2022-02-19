const { Client, Intents, MessageEmbed, WebhookClient, MessageActionRow, MessageButton, Permissions, Discord, MessageReference } = require('discord.js');
const client = new Client({ intents: [   Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });  
const http = require("http");
//Http.CreateServer
http.createServer(function(req, res){
  res.write("OK");
  res.end();
 }).listen(8080);

//Sleep Function
function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
}
const index = require("./index.js");
  index.handle(client);

const indexpdc = require("./index.pdc.js");
  indexpdc.handle(client);

const indextree = require("./index.tree.js");
  indextree.handle(client);