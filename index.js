const Discord = require("discord.js");

const client = new Discord.Client();

var err

var comp = 1;
var compa = [" "," "," "," "," "," "," "," "," "]
var compo = 0;
var gamestatus = 0;
var gamemode = "easy";
var game = ['o',
' ',' ',' ',
' ',' ',' ',
' ',' ',' ',
'x']

function emptycells(game){
	for(i = 0; i < 8; i++){
		f = 0;
		if(empty(game[i])){
			empty[f] = i;
			return empty;
		}
	}
}

function empty(cell){
	if(cell == " "){
		return true
	}
}

function commandis(str, msg){
	return msg.content.toLowerCase().startsWith("s!" + str);
}

client.on('ready', () => {
 	console.log(`Logged in as ${client.user.username}!`);

});

client.on('message', msg => {
	var args = msg.content.split(/[ ]+/)

 	if (commandis("hello", msg)) {
    	msg.channel.sendMessage('Hello there <@' + msg.author.id + '>');
  	}

  	if (commandis("liststone", msg)) {
    	msg.channel.sendMessage("List of stones:");
    	msg.channel.sendMessage("`gneiss`");
			msg.channel.sendMessage("`west`");
  	}

		if (commandis("info", msg)) {
    	msg.channel.sendMessage("Stonebotty is a open source discord bot");
    	msg.channel.sendMessage("It runs on the node.js module Discord.js");
			msg.channel.sendMessage("Github: https://github.com/Stonemannen/stonebotty");
  	}

		if (commandis("invite", msg)) {
    	msg.channel.sendMessage("Here is your inviteon code");
    	msg.channel.sendMessage("`https://discordapp.com/api/oauth2/authorize?client_id=302768767400935424&scope=bot&permissions=0`");
  	}

  	if (commandis("stone", msg)){
  		if(args.length === 1){
  			msg.channel.sendMessage("wrong stone");
  		}
  		else {
  			msg.channel.sendMessage("This is stone " + args[1]);
  			if (args[1] == "gneiss") {
  				msg.channel.sendMessage("http://www.ced.ltd.uk/img/Firebird/Firebird_Gneiss_Wet.png");
  			}
  			if (args[1] == "west") {
  				msg.channel.sendMessage("https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/c5db27ba-ca35-490f-9d0b-4c1c66b4e280.jpg");
  			}

  		}
  	}

  	if (commandis("tictactoe", msg)){
  		if(args.length === 1){
  			msg.channel.sendMessage("wrong usage. See help");
  		}
  		else {
  			if (args[1] == "easy") {
  				if (gamestatus == 0) {
  					gamemode = "easy";
  					msg.channel.sendMessage("Gamemode is set to easy");
  				}else{
					msg.channel.sendMessage("You can't change setting when in game");
  				}
  			}
  			if (args[1] == "normal") {
  				if (gamestatus == 0) {
  					msg.channel.sendMessage("Gamemode is set to normal");
  				}else{
					msg.channel.sendMessage("You can't change setting when in game");
  				}
  			}
  			if (args[1] == "hard") {
  				if (gamestatus == 0) {
  					msg.channel.sendMessage("Gamemode is set to hard");
  				}else{
					msg.channel.sendMessage("You can't change setting when in game");
  				}
  			}
  			if (args[1] == "gamemode") {
  				msg.channel.sendMessage(gamemode);
  			}
  			if (args[1] == "o") {
  				if (gamestatus == 0) {
  					game[0] = 'o';
  					game[10] = 'x';
  					msg.channel.sendMessage("Human player set to O");
  				}else{
					msg.channel.sendMessage("You can't change setting when in game");
  				}
  			}
  			if (args[1] == "x") {
  				if (gamestatus == 0) {
  					game[0] = 'x';
  					game[10] = 'o';
  					msg.channel.sendMessage("Human player set to x");
  				}else{
					msg.channel.sendMessage("You can't change setting when in game");
  				}
  			}
  			if (args[1] == "start") {
  				if (gamestatus == 1) {
  					msg.channel.sendMessage("Game alredy started");
  				}else{
  					gamestatus = 1;
						msg.channel.sendMessage("Game starting");
						msg.channel.sendMessage("```    |	|	\n   "+game[1]+"|   "+game[2]+"|   "+game[3]+"\n----|----|----\n   "+game[4]+"|   "+game[5]+"|   "+game[6]+"\n	|	|	\n----|----|----\n   "+game[7]+"|   "+game[8]+"|   "+game[9]+"\n	|	|	```");

  				}
  			}
  			if (args[1] == "1") {
  				if (gamestatus == 1) {
  					game[1] = game[0];
						emptycells = emptycells(game);

						msg.channel.sendMessage("```    |	|	\n   "+game[1]+"|   "+game[2]+"|   "+game[3]+"\n----|----|----\n   "+game[4]+"|   "+game[5]+"|   "+game[6]+"\n	|	|	\n----|----|----\n   "+game[7]+"|   "+game[8]+"|   "+game[9]+"\n	|	|	```");
						/*console.log(1);
  					msg.delete(100, err);
						if(game[1]==game[0]&&game[2]==game[0]&&game[3]==game[0]||game[1]==game[0]&&game[4]==game[0]&&game[7]==game[0]||game[1]==game[0]&&game[5]==game[0]&&game[9]==game[0]){

						}
						else{


								//comp = Math.floor(Math.random() * 9);
								comp = 7;
								compa[comp] = game[10];
								if(!compa[comp] == (game[comp]+1)){
										i = 1;
										compo = comp + 1;
										//game[compo] = game[10];
										game[7] = game[0];
								}
  						msg.channel.sendMessage("```    |	|	\n   "+game[1]+"|   "+game[2]+"|   "+game[3]+"\n----|----|----\n   "+game[4]+"|   "+game[5]+"|   "+game[6]+"\n	|	|	\n----|----|----\n   "+game[7]+"|   "+game[8]+"|   "+game[9]+"\n	|	|	```");

						}
						*/
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "2") {
  				if (gamestatus == 1) {
  					game[2] = game[0];
  					msg.channel.sendMessage("```    |	|	\n   "+game[1]+"|   "+game[2]+"|   "+game[3]+"\n----|----|----\n   "+game[4]+"|   "+game[5]+"|   "+game[6]+"\n	|	|	\n----|----|----\n   "+game[7]+"|   "+game[8]+"|   "+game[9]+"\n	|	|	``` ");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "3") {
  				if (gamestatus == 1) {
  					game[3] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "4") {
  				if (gamestatus == 1) {
  					game[5] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "5") {
  				if (gamestatus == 1) {
  					game[5] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "6") {
  				if (gamestatus == 1) {
  					game[6] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				};
  			}
  			if (args[1] == "7") {
  				if (gamestatus == 1) {
  					game[7] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "8") {
  				if (gamestatus == 1) {
  					game[8] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}
  			if (args[1] == "9") {
  				if (gamestatus == 1) {
  					game[9] = game[0];
  					msg.channel.sendMessage("");
  				}else{
					msg.channel.sendMessage("You need to start the game first");
  				}
  			}

  		}
  	}


  	if (commandis("help", msg)){
  		if(args[1] == "stone"){
  			msg.channel.sendMessage("Usage: `s!stone the stone you want`");
  			msg.channel.sendMessage("To get a list of all stone type `s!liststone`");
  		}

  		else{
  			msg.channel.sendMessage("Use `s!help [*command*]` to get more info on a specific command, for example: `s!help stone`");
  			msg.channel.sendMessage("List:");
  			msg.channel.sendMessage("`stone [*stone name*]` - Displays the stone you choose");
  			msg.channel.sendMessage("`liststone` - Displays a list of stones");
				msg.channel.sendMessage("`invite` - Gives you a link to invite me to your server");
  		}

  	}
});

client.login('MzAyNzY4NzY3NDAwOTM1NDI0.C9Ocbw.NKbZ6037DfqIxv1oKV4iosxuhH4');
