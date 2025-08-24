const path = require('path');

const envPath = path.resolve(__dirname, '..', '.env');
const onError = [
        {
                event: '/(error|failed)/i',
                done: true
        }
];

module.exports = { envPath, onError };
