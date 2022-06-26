var tagH = document.getElementById('title');
// .innerHTML : phần nội dung ở giữa 2 thẻ
tagH.innerHTML = 'Nội dung đã thay đổi';

// .value: phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById('txt');
tagInput.value = '123456';
// Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById('number');
 console.log(tagInputNumber.value);
 alert(tagInputNumber.value);