const API_URL = "https://onthiemcascript-default-rtdb.asia-southeast1.firebasedatabase.app/";

// Hàm lấy tất cả người dùng từ API
let getUsers = async () => {
    let response = await fetch(API_URL + "users.json");
    return await response.json();
};

// Hàm lấy thông tin một người dùng từ API
let getOneUser = async (idUser) => {
    let response = await fetch(API_URL + "users/" + idUser + ".json");
    return await response.json();
};

// Hàm sửa thông tin một người dùng
let userEdit = (idUser) => {
    getOneUser(idUser).then((user) => {
        console.log(user);
        document.querySelector('input[name="user_email"]').value = user.user_email;
        document.querySelector('input[name="phone"]').value = user.phone;
        document.querySelector('input[name="user_name"]').value = user.user_name;
        document.querySelector('input[name="password"]').value = user.password;
    });
};

// Hàm xóa một người dùng
let userDelete = (idUser) => {
    fetch(API_URL + "users/" + idUser + ".json", {
        method: "DELETE"
    }).then(response => {
        console.log("Xóa người dùng thành công");
        // Thực hiện các hành động cần thiết sau khi xóa người dùng, ví dụ: cập nhật giao diện, v.v.
    }).catch(error => {
        console.error("Xóa người dùng thất bại", error);
    });
};

// Hàm tạo một người dùng mới
let createUser = (form) => {
    let data = new FormData(form);
    let object = {
        user_email:  data.get("user_email"),
        password: data.get("password"),
        phone: data.get("phone"),
        user_name: data.get("user_name"),
    };
    fetch(API_URL + "users.json", {
        method: "POST",
        body:  JSON.stringify(object),
    }).then(response => {
        console.log("Tạo người dùng thành công");
        // Thực hiện các hành động cần thiết sau khi tạo người dùng, ví dụ: cập nhật giao diện, v.v.
    }).catch(error => {
        console.error("Xóa người dùng thất bại", error);
    });
};

// Thực hiện lấy dữ liệu người dùng và hiển thị ra màn hình
getUsers().then((users) => {
    console.log(users);
    let html = "";
    let tbody = document.getElementById("idDanhsachBody");

    Object.entries(users).forEach(([key, user]) => {
        html += `<tr class="">
        <td scope="row">${user.user_name}</td>
        <td>${user.user_email}</td>
        <td>${user.phone}</td>
        <td><button class="btn btn-primary" onclick="userEdit('${key}')">Sửa</button></td>
        <td><button class="btn btn-danger" onclick="userDelete('${key}')">Xóa</button></td>
        </tr>
        `;
    });

    tbody.innerHTML = html;
}).catch((err) => {
    console.error("Error getting users:", err);
});
