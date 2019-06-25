// These var's are required.
var adminrole = "Your admin ROLENAME"
var prefix = "prefix"
var YTapikey = "Your API key"
const music = require("easy-discord-music")
// The varibles below are NOT required, if you would not like to use them, set them to false
var discordlogin = "Token"
var helpshow = true
// Below is the startup
music.init(adminrole,prefix,YTapikey,1,helpshow,discordlogin)
