const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  // 12. SATIR 2. KADIN ROLÜ
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
const kayıtlı = message.guild.roles.find(r => r.id === "683401203895369802");
//const female = message.guild.roles.find(r => r.id === "kadın rol2 id");  2. KADIN ROLÜNÜ AÇMAK İÇİN BAŞTAIKİ // BUNLARI SİL
const misafir = message.guild.roles.find(r => r.id === "724916141645889558"); 
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "724918925854507019"); 
  const dogrulandi = client.emojis.find(emoji => emoji.name === "kmk31"); 
  if(!message.member.roles.array().filter(r => r.id === "727100122974126132")[0]) { 
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    c.addRole(kayıtlı)
 //   c.addRole(female) 2. KADIN ROLÜNÜ AÇMAK İÇİN BAŞTAIKİ // BUNLARI SİL
    c.removeRole(misafir)
    
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${kayıtlı.id}>** rolü verildi. !`)
    .setColor("0xb333aa")
    log.send(embed)
  
  
//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "",
  usage: ""
};
   