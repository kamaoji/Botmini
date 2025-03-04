const TelegramBot = require('node-telegram-bot-api');


const token = 'add token here';
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    
    const imageUrl = 'home.png';

    
    const text = `Welcome! 👋\n\nHere you can play fun games and join our community.`;

    
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🌐 play', url: 'https://t.me/pandacoinbyhtmlhero_bot/panda' }],
                [{ text: '🌐 Join TG Community', url: 'https://t.me/chtmlhero' }]
            ]
        }
    };

    
    bot.sendPhoto(chatId, imageUrl, { caption: text, ...options });
});


bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'play') {
        bot.sendMessage(chatId, 'More features to start the game will be available soon!');
    }
});
