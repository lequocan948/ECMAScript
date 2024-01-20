const fs = require('fs').promises;
const axios = require('axios');

async function fetchData() {
    try {
        const fileData = await fs.readFile('./data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', fileData);
        const urlResponse = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from url', urlResponse.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
fetchData();