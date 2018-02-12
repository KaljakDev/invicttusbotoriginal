const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let boticon = bot.user.displayAvatarURL;
  let changelogEmbed = new Discord.RichEmbed()
  .setDescription("------ CHANGELOG ------")
  .setColor("#000099")
  .setThumbnail(boticon)
  .addField("Changelog 12/02/2018:","CONSOLE do BOT simplificado e organizado, Sistema de segurança adicionado, Adicionado os comandos (changelog, ban, kick, tempmute, report) e organizado index.js")
  .addField("Changelog 11/02/2018:","Criado bot, adicionado os comandos (infoserver, invicttusbot, comandos)");

  let changelogChannel = message.guild.channels.find(`name`, "changelog");
  if (!changelogChannel) message.channel.send("Não conseguimos localizar o canal de changelog no servidor.");

  changelogChannel.send(changelogEmbed);

  return;
}

  module.exports.help = {
    name: "changelog"
  }
