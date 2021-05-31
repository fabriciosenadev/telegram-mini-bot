const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

const EmailHandlesValidation = require('../handles/EmailHandleValidation');

class UserController extends TelegramBaseController{
    async Email(scope) {
        const handles = new EmailHandlesValidation();

        let firstName = scope.message.chat.firstName;
        let rawTxtReceived = scope.message.text;

        let email = await handles.GetEmail(rawTxtReceived);

        let msg = `${firstName}, parece que o e-mail ${email} é valido, `;
        msg += "se funciona eu ainda não sei.";

        if(!handles.IsValid(email))
        {
            msg = "Não tenho certeza se este endereço é um e-mail😕.\n";
            msg += "Poderia informar novamente, por favor?";
        }        
        scope.sendMessage(msg);
    }

    get routes() {
        return {
            'email': 'Email'
        }
    }
}

module.exports = UserController;
