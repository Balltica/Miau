const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("Especifica una cantidad.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`borrando ${args[0]} mensajes.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
