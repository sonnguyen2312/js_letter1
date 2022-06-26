var tagH = document.getElementById('title');
// .innerHTML : phần nội dung ở giữa 2 thẻ
tagH.innerHTML = 'Nội dung đã thay đổi';

// .value: phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById('txt');
tagInput.value = '123456';
// Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById('number');
 console.log(tagInputNumber.value);
// .src là nội dung hình ảnh của thẻ img
var tagImg = document.getElementById('hinhAnh');
tagImg.src = './img/hinh2.webp';
/*
    Định nghĩa hàm: Dùng để thực thi 1 loạt hành động khi
*/
function sayHello(){
    alert('Chào mọi người');
}

// Ví dụ 1: Viết chương trình yêu cầu người dùng nhập vào 1 giá trị và khi người dùng bấm hiển thị thì giá trị đó sẽ in ra tại thẻ span ketQuaHienThi
// handleEvent: xử lý sự kiện
function hienThiThongTin (){
    // Lấy giá trị khi gọi hàm hiển thị thông tin
    // input: luôn là string
    var input = document.getElementById('giaTriNhap');
    // console.log(input.value);
    // output: string
    var output = input.value;
    // output = input.value;
    // xử lý kết quả hiển thị lên giao diện
    var tagSpanKetQua = document.getElementById('ketQuaHienThi');
    tagSpanKetQua.innerHTML = output;
}