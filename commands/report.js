const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Usuario no encontrado y/o menciona un usuario.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Usuario reportado", `${rUser} con ID: ${rUser.id}`)
    .addField("Reportado por", `${message.author} con ID: ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Hora", message.createdAt)
    .addField("Razon", rreason);

    message.channel.sendEmbed(reportEmbed);

    return;
}

module.exports.help = {
    name:"report"
}