const path = require('path');  

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        login: './src/login.js',
        events: './src/events.js',
        newEvent: './src/newEvent.js',
        user: './src/user.js'

    },
    output: {
        path: path.resolve(__dirname, 'public'),
    }
};