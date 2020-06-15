const Discord = require("discord.js")
 
module.exports.run = async (client, message, args) => {
const prefix = '/';
const name = 'rate';
const ratus = message.mentions.members.first();
if(!ratus) return message.channel.send(`You must tag someone to rate them: \n\`${prefix}${name} + @user\``);

//Config
let admin = "id";
let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let maxrate = "10";

let result = Math.floor((Math.random() * rates.length));

if(ratus.id === admin){
  return message.channel.send(`I'd give **__${ratus.user.username}__** ${maxrate}/10`);
    }
  message.channel.startTyping();
    setTimeout(function(){ 
      return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10`);
        }, 3000);
          message.channel.stopTyping();

}

module.exports.help = {
  name: "rate",
  prefix: "/"
}
