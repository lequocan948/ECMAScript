const axios = require('axios');

//1.
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
}

//2.
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
}
return results;