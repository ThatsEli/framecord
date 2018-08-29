const framecord = require('../lib/index.js');

const TOKEN = process.env.TOKEN || '';

let fc = new framecord.FramecordInstance();

fc.start(TOKEN);

fc.addCommand( new framecord.FramecordCommand(['test1', 'test2'], (message) => { console.log(message.content); }) );