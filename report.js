const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.reply("Não conseguimos localizar este usuario no servidor.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Denuncia")
  .setColor("#15f153")
  .addField("Usuario denunciado", `${rUser} com ID: ${rUser.id}`)
  .addField("Denunciado por", `${message.author} com ID: ${message.author.id}`)
  .addField("Denunciado no canal", message.channel)
  .addField("No tempo", message.createdAt)
  .addField("Motivo", reason);

  let reportschannel = message.guild.channels.find(`name`, "denuncias");
  if (!reportschannel) return message.channels.send("Não conseguimos localizar o canal de denuncias!");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "denunciar"
}
