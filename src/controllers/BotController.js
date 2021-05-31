const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class BotController extends TelegramBaseController {
    Start(scope) {
        let firstName = scope.message.chat.firstName;
        let chat_id = scope.message.chat.id;

        let msg = `Eai ${firstName} beleza 😄? `;
        msg += "Agora você pode usar meus comandos para falar comigo.\n";
        msg += "Caso precise de ajuda digite >> /help";

        scope.sendMessage(msg);
    }

    Help(scope) {
        let msg = "Meus comandos ainda estão em desenvolvimento 😝.\n";
        msg += "Até mais 😀👋🏻";
        scope.sendMessage(msg);
    }

    get routes() {
        return {
            'start': 'Start',
            'help': 'Help'
        }
    }
}

module.exports = BotController;