const ElasticSearch = require('./utils/ElasticService');

const boatsMapping = require('./utils/elasticSearch/schemas/boats');
const fakeData = require('./utils/elasticSearch/fakeData/boats');

const init = async () => {

    const create = await ElasticSearch.createIndex({ indexName: 'boats_new'})
    const map = await ElasticSearch.addMapping({
        indexName: 'boats_new',
        type: 'boats_listing',
        mapping: boatsMapping,
    })

    for (let i = 0; i < fakeData.length; i++) {
        await ElasticSearch.insertData(
            {
                indexName: 'boats_new',
                id: fakeData[i].id,
                data: fakeData[i]
            }
        )
    }

    
}

init();

