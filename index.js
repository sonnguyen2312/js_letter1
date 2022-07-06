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

/*
    Ví dụ 2: Nhập vào số tiền lương(1h) và số giờ làm  In ra tổng lương bằng số giờ nhân tiền lương
*/
function tinhTongLuong (){
    // alert (214);
    // input: tienLuong1h:number, soGioLam:number
    var tienLuong = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
    // kiểm tra input
    // console.log('Tiền lương', tienLuong);
    // console.log('So Gio Lam',soGioLam);
    //output: tongLuong: number
    var tongLuong = 0;
    // progress
    tongLuong = tienLuong * soGioLam;
    document.getElementById('tongLuong').innerHTML = tongLuong;
}
/*
    Ví dụ 3: Xây dựng form đăng nhập
*/
var btnDangNhap = document.getElementById('btnDangNhap');
btnDangNhap.onclick = function(){ //anonymous function
    //input: taikhoan: string
    var taiKhoan = document.getElementById('taiKhoan').value;
    var matKhau = document.getElementById('matKhau').value;
    // console.log('Tai khoan', taiKhoan);
    // console.log('Mat khau',matKhau);
    //output: thongBao:string
    let thongBao = '';
    //proress: 
    thongBao = 'Tài khoản: ' + taiKhoan + ' - Mật khẩu: ' + matKhau;
    //alt+z hoặc option +z => xuống dòng
    var tagKetQua = document.getElementById('ketQuaDangNhap');
    tagKetQua.innerHTML = thongBao;
    // Thay đổi màu sắc
    // tagKetQua.style.backgroundColor = 'green';
    // tagKetQua.style.padding = '15px';
    // tagKetQua.style.color = '#fff'
    // tagKetQua.style.margin = '15px';
    tagKetQua.className = 'bg-success p-2 m-2 text-white';
}
// Ví dụ 4:Tính tiền tip
document.getElementById('btnTinhTienTip').onclick = function (){
    /*
        input: 
            + tongTienThanhToan : number
            + phanTramTip: number
            + soNguoiTip: number
        progress:
            + Lấy thông tin người dùng nhập từ giao diện
        output:
            + tienTipTrenNguoi: number
    */
   var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
   var phanTramTip = document.getElementById('phanTramTip').value;
   var soNguoiTip = document.getElementById('soNguoiTip').value;
   var tienTipTrenNguoi = 0;
   tienTipTrenNguoi = (tongTienThanhToan * phanTramTip/100)/soNguoiTip;
   document.getElementById('tienTipTrenNguoi').innerHTML = tienTipTrenNguoi + ' $';
}