const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const Tokenfile = require ("./Tokenfile.json");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Não conseguimos encontrar a pasta commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} foi carregado com êxito!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(``);
  console.log(`${bot.user.username} está online em ${bot.guilds.size} servidor(es)!`);
  console.log(`Codigo: <codigo secreto> carregado com sucesso ||| InvicttusBot`);
  console.log(`Todos os JavaScripts e Json foram carregados com sucesso! InvicttusBot`);
  console.log(`Data de lançamento inicial: 11/02/2018 (Disponivel apenas para o servidor BT[Bot Test])`);
  console.log(``);
  bot.user.setActivity("InvicttusBot", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

console.log(`Carregando o Codigo: <codigo secreto> ||| InvicttusBot`);
bot.login(process.env.BOT_TOKEN);
