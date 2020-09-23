const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------STRIGA ÇOK TATLI BİRİSİ BEN OLSAM VİDEOLARINA LİKE ATAR KANALINA ABONE OLUR VİDEOSUNA YORUM YAPARDIM BU ARADA---------------------------------\\





//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('724916141645889558');
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

















//-----------------------İSİM-YAŞ----------------------\\     STG

client.on("guildMemberAdd", member => {  
  member.setNickname('İsim | Yaş');
  });

//-----------------------İSİM-YAŞ----------------------\\     STG

















//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG

client.on("guildMemberAdd", member => {  
  const strigadiyorumlogdiyorum = "724918925854507019";
  const register = "<@&727100122974126132>";
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();  
 
  var kontrol;
if (kurulus < 1296000000) kontrol = '<a:753663471618359367:755147048701132878> **__Bu Hesap Güvenilir Değil__**'
if (kurulus > 1296000000) kontrol = '<a:emoji_56:732917598794285088> **__Bu Hesap Güvenilir Gözüküyor__**'
  moment.locale("tr");
  let strigalog = client.channels.get(strigadiyorumlogdiyorum);
  const embed = new Discord.RichEmbed()
  .setColor("0xd8d8d8")
  .setTitle(`**COSMOX TOPRAKLARINA HOŞGELDİN**`)
.setDescription("**<a:658730286699249704:743573565420470402> Hoşgeldin!** " + member + " **Seninle \`" + member.guild.memberCount + "\` Kişiyiz.**  \n \n<a:komik19:743579497911025756> **Müsait olduğunda Confirmed Odalarından Birine Geçip Kaydını Yaptırabilirsin.** \n \n<a:733033064489287750:755154096956112970> <@&727100122974126132> seninle ilgilenicektir. \n \n<a:725523067417395261:743573565147840592> Hesabın Oluşturulma Tarihi:" + moment(member.user.createdAt).format("** YYYY __DD MMMM dddd__**") +  "\n \n"  + kontrol + " \n \n**<a:730403121242701876:743573568255819898>** **Tagımızı alarak ` ᔕ ` bize destek olabilirsin.** \n")              
.setImage("https://64.media.tumblr.com/970f6a5a05855cc23249f1ee07de6a6b/tumblr_nejdxa6kQR1qk9powo1_500.gif")
  strigalog.send(embed)
  strigalog.send(register)
});

//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG

















//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("727793459129352222") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("724916141645889558") ///Kayıtsız rolü ID'si
   member.addRole(rol)
member.user.send('Hesabınız Bir Hafta Gibi Kısa Bir Sürede Açıldığı İçin Cezalıya Atıldınız, Yetkililere Bildirerek Açtırabilirsiniz.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)

    
   }
        else {

        }  
    });


//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG



















//-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "✧"; //tagınız
    let sunucu = "683392291615801431"; //sunucu ID
    let kanal = "742035059053428786" //log kanal id
    let rol = "728691570567544862"; // rol ID
    if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(kanal).send(`<a:694177196834685059:743573565340647474> ${newUser} ${tag} Tagımızı Aldı \n**____<@&728691570567544862>____** rolünü kazandı!`)
      client.guilds.get(sunucu).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
      client.channels.get(kanal).send(`<a:kmk16:752295818307829860> ${newUser} ${tag} Tagımızdan Çıktı \n **____<@&728691570567544862>___** rolünü kaybetti!`)
    }

  }
})

//-----------------------TAG-ROL----------------------\\     STG
client.on("ready", () => {
  client.channels.get("737254964610465882").join();
});