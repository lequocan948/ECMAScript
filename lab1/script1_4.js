fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function(response){
        response.json().then(function(data){
            console.log(data.data);

            let app = document.getElementById('pc06965');

            let list = data.data;
            let stt = 1;
            
            let html = `<table class="table">
            <tr>
            <th>#</th>
            <th>Nation</th>
            <th>Year</th>
            <th>Population</th>
            </tr>
            `
            
            list.forEach(element => {
                console.log(element);
                html += `<tr>
                <td>${stt}</td>
                <td>${element.Nation}</td>
                <td>${element.Year}</td> 
                <td>${element.Population}</td>
                </tr>`;
                stt++;
            });

            html += `</table>`
            app.innerHTML = html;

            console.log(data.data);
        })

    })
    .catch(function(error){

    })

    fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response){
        response.json().then(function(data){
            console.log(data);

            let app = document.getElementById('pc06965.2');

            let list = data;
            let stt = 1;
            
            let html = `<table class="table">
            <tr>
            <th>#</th>
            <th>Ảnh Đại Diện</th>
            <th>Họ Và Tên</th>
            <th>Ngày Tạo</th>
            </tr>
            `
            
            list.forEach(element => {
                console.log(element);
                html += `<tr>
                <td>${stt}</td>
                <td><img src="${element.avatar}" alt=""></td>
                <td>${element.name}</td> 
                <td>${element.createdAt}</td>
                </tr>`;
                stt++;
            });

            html += `</table>`
            app.innerHTML = html;

            console.log(data.data);
        })

    })
    .catch(function(error){

    })