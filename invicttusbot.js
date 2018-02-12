const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informação do Bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nome do Bot", bot.user.username)
    .addField("Criado em", bot.user.createdAt)
    .addField("Versão do Bot", "1.0.0")
    .addField("Criado por", "Roots Pala");
return message.channel.send(botembed);

}

module.exports.help = {
  name: "invicttusbot"
}
