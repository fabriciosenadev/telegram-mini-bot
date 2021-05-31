'use strict'

const settings = require('./settings');
const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
const RegexpCommand = Telegram.RegexpCommand;
const bot = new Telegram.Telegram(settings.token);

const BotController = require('./controllers/BotController');
const UserController = require('./controllers/UserController');


bot.router
    .when(new TextCommand('/start', 'start'), new BotController());

bot.router
    .when(new TextCommand('/help', 'help'), new BotController());

bot.router
    .when(new RegexpCommand(/\/email (.+)$/, 'email'), new UserController());