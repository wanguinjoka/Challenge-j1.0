
// logger library pino
const logger = require('pino')();

logger.info('my request');

const child = logger.child({
    id: 1,
    method: 'GET',
    url: '/',
    headers:{
        host:'127.0.0.1.3000',
        connection: 'close'
    },
    remoteAddress: '::ffff:127.0.0.1',
    remotePort: 50202
})
child.info('')

// exporting module to be used by index module
module.exports.logger = logger;