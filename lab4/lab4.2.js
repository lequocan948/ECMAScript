const axios = require('axios');

//1.
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
}

//  Sử dụng vòng lặp thực hiện yêu cầu HTTP
//  Sử dụng await yêu cầu trước phải hoàn thành thì mới tới yêu cầu sau  

//2.
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
}
return results;

// Sử dụng Promise.all và map để thực hiện các yêu cầu HTTP 
// Cải thiện hiệu suất vì không cần phải chờ như sử dụng await