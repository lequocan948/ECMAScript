function user(name){
    this.name=name
}
const name1 = new user('WuocAn')
console.log("Tên của tôi là:" , name1.name);
// this thường được sử dụng để tham chiếu đến đối tượng hiện tại,
// nơi mà nó được sử dụng. Giá trị của this có thể thay đổi tùy vào cách mà nó được sử dụng 
// nó phụ thuộc vào ngữ cảnh thực thi của nó