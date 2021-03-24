function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function delCookie(cname,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + ";" + expires + ";path=/;";
  }

function move_login_page() {
    var url = baseurl_web;
    var path = "/login.html";
    location.replace(url+path);
}
function loginStatus(){
    var str = $("#login_status").text();
    alert(str);
    if(str == "로그아웃"){
        delCookie("jwt",1);
        $("#login_status").text("로그인");
    }else{
        move_login_page();
    }
}

window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.

    var jwt = getCookie("jwt");
    
    if(jwt != ""){
        // alert(jwt);
        var str = $("#login_status").text("로그아웃");
    }
}