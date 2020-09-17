const elasticSearch = require('./elasticSearch');

const ElasticSearch = {
    ping: async () => {
        return new Promise((resolve, reject) => {
            elasticSearch.ping({
                requestTimeout: 1000
            }, (error, response, status) => {
                if (error) {
                    //console.trace('Elasticsearch\'e erişilmiyor!');
                    return reject(error);
                } else {
                    console.log('Elasticsearch ayakta :)');
                    return resolve(status)
                }
            });
        });
    },
    search: async () => {
        const ping = await ElasticSearch
            .ping()
            .catch(err => {
                console.log(err);
                return false
            });

        if (!ping) {
            return {
                err: false,
                errMsg: 'Servise ulaşılamıyor.',
                status: 503
            }
        }

        console.log('searched');
    }
}
module.exports = ElasticSearch;