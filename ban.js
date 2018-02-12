const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) message.reply("Não conseguimos localizar este usuario no servidor.");
  let bReason = args.join(" ").slice(22);

  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Você não tem a permissão MANAGE_MEMBERS.");
if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não pode banir uma pessoa com a permissão MANAGE_MESSAGES!");


  let banEmbed = new Discord.RichEmbed()
  .setDescription("---------- BAN ----------")
  .setColor("#bc0000")
  .addField("Usuario Banido ", `${bUser} com ID ${bUser.id}`)
  .addField("Banido por", `<@${message.author.id}> com ID ${message.author.id}`)
  .addField("Banido no canal", message.channel)
  .addField("Tempo", message.createdAt)
  .addField("Motivo", bReason);

  let incidentChannel = message.guild.channels.find(`name`, "punicoes");
  if (!incidentChannel) message.channel.send("Não conseguimos localizar o canal punicoes no servidor.");

  message.guild.member(bUser).ban(bReason);
  incidentChannel.send(banEmbed);

  return;
}

module.exports.help = {
  name: "ban"
}
