const _ = require('dotenv');
_.config();

/**
 *  ================== SETTINGS ===================
 *  
 *  This module allow any settings to be received
 *  and used from .env file
 *  
 */
module.exports = {
    token: `${process.env.TOKEN}`
};