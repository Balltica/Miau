const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription("Esta es tu informacion de usuario")
        .setColor("#2E2EFE")
        .setThumbnail(message.author.avatarURL)
        .addField("Usuario completo", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Creacion de la cuenta", message.author.createdAt)
        .addField("Jugando a ", message.author.presence.game)
        .addField("Estado", message.author.presence.status);
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name:"userinfo"
}