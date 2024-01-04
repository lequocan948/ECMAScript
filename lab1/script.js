// let name = "Lê Quốc An";
// let birthday = "20/04/2004";

// // arrow funtion
// let sayHello = () => {
//     console.log(`Tôi tên là ${name}, ${birthday}`);
// }

// let sayHello2 = () =>{
//     console.log(`Tôi không phải ${name}, ${birthday}`);
// }
// sayHello();
// sayHello2();

// tính tuổi
// let ten = "Wuocen";
// const namsinh = 2004;
// const tuoi = 2024;

// let tinhtuoi = () => {
//     console.log(`Tôi là ${ten}, tôi ${tuoi- namsinh} tuổi`);
// }

// tinhtuoi();

const API_URL = "";
//
fetch("datausa.io/api/data?drilldowns=Nation&measures=Population65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function(response){
        response.json().then(function(data){
            
            let app = document.getElementById('pc06965');

            let html = `<ul>
            <li>${data.accessibility}</li>
            <li>${data.activity}</li>
            <li>${data.key}</li>
            <li>${data.link}</li> 
            <li>${data.participants}</li>
            <li>${data.price}</li>
            <li>${data.type}</li>
            </ul>`;

            app.innerHTML = html;

            console.log(data);
        })
    })
    .catch(function(error){

    })


