const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Informação do Servidor")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Nome do Servidor", message.guild.name)
      .addField("Criado em", message.guild.createdAt)
      .addField("Você entrou no dia:", message.member.joinedAt)
      .addField("Membros totais no servidor:", message.guild.memberCount);

        return message.channel.send(serverembed);
    
}

module.exports.help = {
  name: "infoserver"
}
