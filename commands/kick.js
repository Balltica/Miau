const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Debes mencionar un usuario.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes permisos para realizar esta accion.");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Este usuario no puede ser expulsado.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Usuario Expulsado", `${kUser} con ID ${kUser.id}`)
    .addField("Expulsado por", `<@${message.author.id}> con ID ${message.author.id}`)
    .addField("Expulsado en", message.channel)
    .addField("Hora", message.createdAt)
    .addField("Razon", kReason);

    message.channel.sendEmbed(kickEmbed);

    return;
}

module.exports.help = {
    name:"kick"
}