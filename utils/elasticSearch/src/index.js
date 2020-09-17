const es = require('elasticsearch');
const config = require('../config');

const client = new es.Client({
    host: config.HOST,
    log: config.LOG,
});

module.exports = client;

