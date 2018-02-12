const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!tomute) return message.reply("Não conseguimos localizar este usuario no servidor.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode mutar temporariamente uma pessoa com a permissão MANAGE_MESSAGES")
  let muterole = message.guild.roles.find(`name`, "muted");
  // inicio!
  if (!muterole) {
    try{
        muterole = await message.guild.createRole({
          name: "mutado",
          color: "#000000",
          permissions: []
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
  if (!mutetime) return message.reply("Você não especificou um tempo.");

  await (tomute.addRole(muterole.id));
  let muteChannel = message.guild.channels.find(`name`, "punicoes");
  if (!muteChannel) message.channel.send("Não conseguimos localizar o canal punicoes no servidor.");

muteChannel.send(`<@${tomute.id}> foi mutado por ${ms(ms(mutetime))}!`);
  setTimeout(function() {
    tomute.removeRole(muterole.id);
    muteChannel.send(`<@${tomute.id}> foi desmutado!`);

  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}
