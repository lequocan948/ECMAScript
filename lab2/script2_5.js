let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";


function generateTableHeader(headerTitles){
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });


    return `<thead><tr>${html}</tr></thead>`;

    // if (!headerTitles || headerTitles.length === 0){
    //     return "";
    // }
    // const headerHTML = headerTitles.map((title) => `<th>${title}</th>`)
    // return `<thead><tr>${headerHTML}</tr></thead>`;
}


function generateTableRowSv(data){
    return  `<tr>
        <td>${data.id}</td>   
        <td><img height="50" src="${data.avatar}"/></td>
        <td>${data.name}</td>
        <td>${data.createAt}</td>
    </tr>`
}

    let object = {
        id: 1,
        name: "Kiet Ly",
        avatar: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-hai-nhat-qua-dat.jpg",
        createAt: "08:16:14"
    }

    console.log(document.write(generateTableRowSv(object)));




let headerTitles = [
    'STT',
    'Anh Dai Dien',
    'Ho Va Ten',
    'Ngay Tao'
];

function generateTable (header, data){
    let html = ``;

    let headerRow = generateTableHeader(header);

    data.forEach(element => {
        html += generateTableRowSv(element);
    });

    return `<table>${headerRow} <tbody>${html}</tbody></table>`;
}
console.log(generateTableHeader(headerTitles));

fetch(API_URL)
    .then(function (response){
        console.log(response);
        response.json().then(function (data){
            console.log(data);
            let dataFaker = [{
                id: 1,
                name: "Lê Quốc An",
                avatar: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-hai-nhat-qua-dat.jpg",
                createAt: "06:06:06",
            }]
            let headers = [
                "ID",
                "Ảnh Đại Diện",
                "Tên",
                "Ngày tạo",
            ]
            let app = document.getElementById('app');
            app.innerHTML = generateTable(headers, dataFaker);
        });
    })
    .catch(function (response){
        console.log("Error: \n"+ response);
    });