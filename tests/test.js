const framecord = require('../lib/index.js');

const TOKEN = process.env.TOKEN || '';

let fc = new framecord.FramecordInstance();

fc.start(TOKEN);