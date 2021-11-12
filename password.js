const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome, user! This is a password validator tool');

reader.question("What password would you like to validate?", function(input){
  let password = input
  let successful = []
  if (password.length >= 10) {
    console.log('This password is long enough!');
    successful.push(true);
  } else {
    console.log('This password needs to be lengthened.');
    successful.push(false);
  }
  if (password === password.toLowerCase()){
    console.log('Password needs at least one capitol letter.');
    successful.push(false);
  } else {
    console.log('Password contains at least one capitol!');
    successful.push(true);
  }
  reader.close()
  if (password.includes(' ')){
    console.log('This password may not contain any spaces');
    successful.push(false);
  } else {
    console.log('This password contains no spaces!');
    successful.push(true);
  }
  if (successful.includes(false)){
    console.log(`
    ┌─┐┌─┐┌─┐┌─┐┬ ┬┌─┐┬─┐┌┬┐  ┌─┐┬ ┬┌─┐┬ ┬┬  ┌┬┐  
    ├─┘├─┤└─┐└─┐││││ │├┬┘ ││  └─┐├─┤│ ││ ││   ││  
    ┴  ┴ ┴└─┘└─┘└┴┘└─┘┴└──┴┘  └─┘┴ ┴└─┘└─┘┴─┘─┴┘  
    ┌┐ ┌─┐  ┌─┐┬ ┬┌─┐┌┐┌┌─┐┌─┐┌┬┐                 
    ├┴┐├┤   │  ├─┤├─┤││││ ┬├┤  ││                 
    └─┘└─┘  └─┘┴ ┴┴ ┴┘└┘└─┘└─┘─┴┘                 
    `);
  } else {
    console.log(`                                       
_ __  __ _ ___ _____      _____  _ __ __| |  ___ _   _  ___ ___ ___  ___ ___   / \
| _ \ / _ / __/ __\ \ /\ / / _ \| __/ _ | / __| | | |/ __/ __/ _ \/ __/ __| /  /
| |_) | (_| \__ \__ \\ V  V / (_) | | | (_| | \__ \ |_| | (_| (_|  __/\__ \__ \/\_/ 
| .__/ \__,_|___/___/ \_/\_/ \___/|_|  \__,_| |___/\__,_|\___\___\___||___/___/\/   
|_|                                                                                 
`);
  }
});

//^^Program tests for the length, if password contains spaces, and if it contains at least one capitol letter. If all of these conditions are met, it will say 'Password success', if any of the conditions are missing however it will say 'password should be changed'. Both of these messages are displayed with and ASCII art message. it will also console.log() if each condition individually was met. 

