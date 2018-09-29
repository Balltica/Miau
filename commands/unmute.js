const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("No tienes permisos para realizar esta accion");
        
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Debes Mencionar un usuario o su ID");
        
        let role = message.guild.roles.find(r => r.name === "Miau Muted")

        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("El usuario no esta silenciado");

        await toMute.removeRole(role);
        message.channel.sendMessage("Se ha revocado el Silencio");

}

module.exports.help = {
    name:"unmute"
}