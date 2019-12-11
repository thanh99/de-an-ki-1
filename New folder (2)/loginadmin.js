var s =`<a class="btn btn-info" onclick = "dangnhapadmin()">Đăng nhập</a> 
<br> `

document.getElementById('dang-nhap-admin').innerHTML = s;

function dangnhapadmin(){
    let nameadmin = document.getElementById('login-nameadmin').value;
    let passadmin = document.getElementById('login-password-admin').value;

    if(nameadmin == 'admin' && passadmin == 'thinhngu'){
        window.location.href = 'admin.html'
    }else{
        alert('tài khoản admin sai !')
    }
}