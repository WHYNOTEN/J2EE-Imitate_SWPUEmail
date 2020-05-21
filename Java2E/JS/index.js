function viladateEmail(email){
    if(email==null||email.length==0){
        return false;
    }
    return true;
}
function viladatePwd(pwd){
    if(pwd==null||pwd.length==0){
        return false;
    }
    return true;
}
$('.btn').click(function(){
    if(!viladateEmail($('#user').val())){
        alert("邮箱不能为空！");
        return;
    }
    if(!viladatePwd($('#pwd').val())){
        alert("密码不能为空！");
        return;
    }
    $(window).attr('location','http://mail.swpu.edu.cn/');
})