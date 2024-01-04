let name = "Lê Quốc An";
let birthday = "20/04/2004";

// arrow funtion
let sayHello = () => {
    console.log(`Tôi tên là ${name}, ${birthday}`);
}

let sayHello2 = () =>{
    console.log(`Tôi không phải ${name}, ${birthday}`);
}
sayHello();
sayHello2();

// tính tuổi
let ten = "Wuocen";
const namsinh = 2004;
const nam = 2024;

let tinhtuoi = () => {
    console.log(`Tôi là ${ten}, tôi ${nam - namsinh} tuổi`);
}

tinhtuoi();