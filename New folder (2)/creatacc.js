let validatename11 = false;
let validatepass11 = false;
let validatepass22 = false;
let validateemail1 = false;

function validatetk(){
    if (document.getElementById('login-name').value == '') {
        document.getElementById('name-error').innerHTML = '<i style="color: red">Bạn chưa điền tên</i>';
    }
    else {
        document.getElementById('name-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validatename11 = true;
    }
}
function validatepass1(){
    if (document.getElementById('login-pass1').value == '') {
        document.getElementById('pass1-error').innerHTML = '<i style="color: red">Bạn chưa nhập mật khẩu</i>';
    }
    else {
        document.getElementById('pass1-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validatepass11 = true;
    }
}
function validatepass2(){
    if (document.getElementById('login-pass2').value == '') {
        document.getElementById('pass2-error').innerHTML = '<i style="color: red">Bạn chưa nhập lại mật khẩu</i>';
    }
    else if(document.getElementById('login-pass2').value != document.getElementById('login-pass1').value){
        document.getElementById('pass2-error').innerHTML = '<i style="color: red">Bạn phải xác nhận lại đúng mật khẩu</i>';
    }
    else {
        document.getElementById('pass2-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validatepass22 = true;
    }
}
function validateemail(){
    if (document.getElementById('login-email').value == '') {
        document.getElementById('email-error').innerHTML = '<i style="color: red">Bạn chưa nhập mật khẩu</i>';
    }
    else {
        document.getElementById('email-error').innerHTML = '<i class="fa fa-check" style="color:green;"> Hoàn thành </i>';
        validateemail1 = true;
    }
}
function confirm(){
    if(validatepass11 == true && validatepass22 == true && validatename11 == true && validateemail1 == true){
        alert(' Tạo tài khoản thành công');
    }else{
        alert('Chưa nhập đủ thông tin');
    }
    dangnhap = {
        name : document.getElementById('login-name').value,
        password : document.getElementById('login-pass1').value ,
        email : document.getElementById('login-email').value

    }
    localStorage.setItem('userLocal',JSON.stringify(dangnhap));
}
let acc = localStorage.getItem(JSON.stringify('userLocal'));
console.log(acc);
