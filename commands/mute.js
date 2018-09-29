const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Menciona un usuario.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedes mutear a este usuario.");
  let muterole = message.guild.roles.find(`name`, "muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Debes especificar el tiempo");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Fue muteado por ${(mutetime)}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Fue desmuteado`);
  }, (mutetime));

}

module.exports.help = {
  name: "tempmute"
}