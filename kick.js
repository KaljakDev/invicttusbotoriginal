const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) message.reply("Não conseguimos localizar este usuario no servidor.");
  let kReason = args.join(" ").slice(22);

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não tem a permissão MANAGE_MESSAGES.");
  if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não pode kickar uma pessoa com a permissão MANAGE_MESSAGES!");


  let kickEmbed = new Discord.RichEmbed()
  .setDescription("---------- KICK ----------")
  .setColor("#e56b00")
  .addField("Usuario Kickado ", `${kUser} com ID ${kUser.id}`)
  .addField("Kickado por", `<@${message.author.id}> com ID ${message.author.id}`)
  .addField("Kickado no canal", message.channel)
  .addField("Tempo", message.createdAt)
  .addField("Motivo", kReason);

  let KickChannel = message.guild.channels.find(`name`, "punicoes");
  if (!KickChannel) message.channel.send("Não conseguimos localizar o canal punicoes no servidor.");

  message.guild.member(kUser).kick(kReason);
  KickChannel.send(kickEmbed);

  return;
}

module.exports.help = {
  name: "kick"
}
