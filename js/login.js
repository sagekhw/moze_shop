// 주소 창에 있는 parameter를 취득한다.
function getParameter(str_param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get(str_param);
    return param;

}

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
  
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      // alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }

function init() {
    // alert("hello");
    // alert("@ : "+getParameter("name"));
    if (getParameter("name") != null) {
        alert(getParameter("name"));
    }
    if (getParameter("email") != null) {
        alert(getParameter("email"));
    }
}

function move_signup_page() {
  var url = baseurl_web;
  var path = "/signup_nav.html";
  // alert(url+path);
  window.location.replace(url+path); 
}
function move_home_page() {
  var url = baseurl_web;
  var path = "/home.html";
  window.location.replace(url+path); 
}
function login(){
    var user = $("#user").val();
    var password = $("#password").val();

    if(user == "" && password == ""){
        alert("정보를 입력해주세요");
        return 0;
    }
    var formData = { 
        userid : user,
        password : password,
    };
    var json_formData = JSON.stringify(formData);
    // alert(json_formData);
    alert(baseurl_server1+'/login');
    $.ajax({
        // url:'http://localhost:8080/login',
        url:baseurl_server1+'/login',
        type:'POST',
        async: false, 
        contentType:'application/json',
        data:json_formData,
        success: function(data){
            //정상 요청, 응답 시 처리 작업
            setCookie("jwt",data.token,1);
            var jwt = getCookie("jwt");
            alert("jwt : "+jwt);
            move_home_page();
        },
        error : function(xhr,status,error) {
            alert("error"+status+" / "+error);
            //오류 발생 시 처리
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리
            // alert("complete");
        }
    });
}

function google_login(){
  var url = baseurl_server1;
  var path = "/redirect_google_login";
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
                "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
                "&redirect_uri="+
                // "http://localhost:8080/redirect_google_login"+
                (url+path)+
                "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
}

window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.
    // init();
}
