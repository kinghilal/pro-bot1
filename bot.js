const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541250603251269679")
setInterval(function() {
channel.send(`test test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test test`);
}, 30)
})

   client.login('NTQxMjQ5NDgzMTQ5ODAzNTMw.DzsdGw.nJp84EqYxmTiinTtX6h-1Gs9g34');
   
