const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informacion del Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nombre del Bot", bot.user.username)
    .addField("Creado en", bot.user.createdAt)

    return message.channel.send(botembed);
}

module.exports.help = {
    name:"botinfo"
}