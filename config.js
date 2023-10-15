module.exports = {
TOKEN: "MTE2MzA2Nzg5NDc0MjEzMDcxOA.G0C6B-.ZlYyOwejeDp1fOHbt4Tp6HOYulio2hdoHB4Myk",
ownerID: "1132597082264440882", //write your discord user id.
botInvite: "https://discord.com/api/oauth2/authorize?client_id=1163067894742130718&permissions=8&scope=bot", //write your discord bot invite.
mongodbURL: "mongodb+srv://user777:MasterxD@cluster0.xlri1h4.mongodb.net/", //write your mongodb url.
status: '❤️ /rtontop',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
autoSelfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 20000, //1000 = 1 second
},

leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 20000, //1000 = 1 second
}
},

maxVol: 150, //You can specify the maximum volume level.
loopMessage: true,

discordPlayer: {
ytdlOptions: {
quality: 'highestaudio', //Please don't touch
highWaterMark: 1 << 25 //Please don't touch
}
}
}
}
