const elasticSearch = require('./elasticSearch');

const ElasticSearch = {
    ping: async () => {
        return new Promise((resolve, reject) => {
            elasticSearch.ping({
                requestTimeout: 1000
            }, (error, response, status) => {
                if (error) {
                    return reject(error);
                } else {
                    return resolve(status)
                }
            });
        });
    },
    createIndex: async (props = {}) => {
        const { indexName } = props;

        if (!indexName) {
            return {
                err: true,
                errMsg: 'IndexName must be provieded.',
                status: 500
            }
        }

        const ping = await ElasticSearch
            .ping()
            .catch(err => {
                console.log(err);
                return false
            });

        if (!ping) {
            return {
                err: true,
                errMsg: 'Servise ulaşılamıyor.',
                status: 503
            }
        }

        try {
            return await elasticSearch.indices.get({
                index: indexName
            });
        } catch (error) {
            return await elasticSearch.indices.create({
                index: indexName
            });
        }
    },
    addMapping: async (props = {}) => {
        const { indexName, type, mapping } = props;

        if (!indexName || !type || !mapping) {
            return {
                err: true,
                errMsg: 'IndexName, type and mapping must be provieded.',
                status: 500
            }
        }

        const ping = await ElasticSearch
            .ping()
            .catch(err => {
                console.log(err);
                return false
            });

        if (!ping) {
            return {
                err: true,
                errMsg: 'Servise ulaşılamıyor.',
                status: 503
            }
        }

        try {
            return await elasticSearch.indices.putMapping({
                index: indexName,
                body: mapping
            });
        } catch (error) {
            console.error(error);
            return {
                err: true,
                errMsg: 'Something went wrong.',
                status: 503
            }
        }
    },
    insertData: async (props = {}) => {
        const { indexName, data, id } = props;

        if (!indexName || !data || !id) {
            return {
                err: true,
                errMsg: 'IndexName, type, data, id must be provieded.',
                status: 500
            }
        }

        const ping = await ElasticSearch
            .ping()
            .catch(err => {
                console.log(err);
                return false
            });

        if (!ping) {
            return {
                err: true,
                errMsg: 'Servise ulaşılamıyor.',
                status: 503
            }
        }

        try {
            console.log('hear')
            return await elasticSearch.index({
                index: indexName,
                id: id,
                body: data
            });
        } catch (error) {
            console.error(error);
            return {
                err: true,
                errMsg: 'Something went wrong.',
                status: 503
            }
        }
    },
    search: async (props = {}) => {
        const { indexName, query } = props;

        if (!indexName || !query ) {
            return {
                err: true,
                errMsg: 'IndexName, type, data, id must be provieded.',
                status: 500
            }
        }
        const ping = await ElasticSearch
            .ping()
            .catch(err => {
                console.log(err);
                return false
            });

        if (!ping) {
            return {
                err: true,
                errMsg: 'Servise ulaşılamıyor.',
                status: 503
            }
        }

        const search = await elasticSearch.search({
            index: indexName,
            body: query
        });

        if (!search) {
            return {
                err: true,
                errMsg: 'Bulunamadı.',
                status: 404
            }
        }

        return search
    }
}
module.exports = ElasticSearch;