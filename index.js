const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const prefix = botconfig.prefix;
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, file) => {
    if(err) console.log(err);

    let jsfile = file.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Comandos no encontrados");
        return;
    }


    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} Cargado`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
    console.log(`Bot Listo! ${bot.user.username}`);
    try {
        bot.user.setActivity("m!", {type: "watching"});
    } catch(e) {
        console.log(e.stack);
    }
    });


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = botconfig.prefix;


    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    

});

bot.login(botconfig.token);
