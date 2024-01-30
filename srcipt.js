// //Câu hỏi: Đối tượng alf gì?
// /**
//  * 1. Thuộc tính - properties diễn tả các thông tin của đối tượng
//  * 2. Phương thức - method diễn tả các hành đồn cảu đối thượng
//  * contructor
//  */
// function User(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;

//     login = function () {
//         console.log("Hello");
//     }
// }

// User.prototype.learning = function() {
//     return `${this.email} đang học!`;
// }
// let userAn = new User("An", "anlqpc069652.fpt.edu.vn", "0915325553");

// User.prototype.teaching = function() {
//     return `${this.email} đang dạy!`
// }
// let userWA = new User("QAn", "anlqpc069652.fpt.edu.vn", "0915325553");




// console.log(userAn);
// console.log(userWA);

// class inforUser{
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     login = function () {
//         return this.email+ "Login Success";
//     }
// }

// let studentUser = new inforUser("An","andeptrai@gmail.com", "0999999999");
// studentUser.learning = function(){
//     return `Sinh viên ${this.name} đang học môn ECMA`;
// }

// let teacherUser = new inforUser("Annn", "anlqpc06965@fpt.edu.vn", "888888888");
// teacherUser.teaching = function(){
//     return `Giảng viên ${this.name} đang dạy học`;
// }
// console.log(studentUser.login());
// console.log(studentUser.learning());

// console.log(teacherUser.login());
// console.log(teacherUser.teaching());


// console.log("2");

// setTimeout(chao, 5000);

// function chao(){
//     console.log("Chào cô  em bắc kì nho nhỏ");
// }

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Ba");
//     }, 5000)
// }, 5000)