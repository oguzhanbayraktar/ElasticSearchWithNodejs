const ElasticSearch = require('./utils/ElasticService');

const init = async () => {
    const search = await ElasticSearch.search();
    console.log(search);

    return
}

init();

