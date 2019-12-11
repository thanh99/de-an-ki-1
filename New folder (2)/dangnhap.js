let account = JSON.parse(localStorage.getItem('userLocal'))

var s =`<a class="btn btn-info" onclick = "dangnhap()">Đăng nhập</a> 
<br> `

document.getElementById('dang-nhap').innerHTML = s;

function dangnhap(){
    compare = {
        adduser : document.getElementById('login-nameuser').value,
        addpass : document.getElementById("login-password").value
    }
    localStorage.setItem('compare',JSON.stringify(compare));
    let addinfor = JSON.parse(localStorage.getItem('compare'));

    if( addinfor.adduser === account.name && addinfor.addpass === account.password){
       window.location.href = "trang_chu.html";
    }
    else{
        alert("Thông tin tài khoản hoặc mật khẩu không chính xác");
    }
    
}


