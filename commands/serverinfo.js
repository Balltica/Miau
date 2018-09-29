const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informacion del servidor")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nombre del servidor", message.guild.name)
    .addField("Creado en", message.guild.createdAt)
    .addField("Te uniste", message.member.joinedAt)
    .addField("Miembros", message.guild.memberCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name:"serverinfo"
}