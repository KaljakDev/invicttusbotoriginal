const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let boticon = bot.user.displayAvatarURL;
      let commandEmbed = new Discord.RichEmbed()
      .setDescription("Comandos do Bot")
      .setColor("#15f153")
      .setThumbnail(boticon)
      .addField("Comando !denunciar", "Denunciar membros para os Vices/Lider tomar alguma providencia.")
      .addField("Comando !comandos", "Para ver os comandos Gerais do BOT.")
      .addField("Comando !infoserver", "Para ver as Informações do Servidor.")
      .addField("Comando !invicttusbot", "Serve para ver as Informações do BOT.")
      .addField("Comando !ban", "Serve para banir um membro do Servidor.")
      .addField("Comando !kick", "Serve para kickar um membro do Servidor.")
      .addField("Comando !tempmute", "Serve para mutar temporariamente um membro do Servidor.");

  return message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "comandos"
}
