// 주소 창에 있는 parameter를 취득한다.
function getParameter(str_param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get(str_param);
    return param;

}

function init() {
    alert("hello");
    if (getParameter("name") != null) {
        alert(getParameter("name"));
    }
    if (getParameter("email") != null) {
        alert(getParameter("email"));
    }
}

$("#loginBtn").click(function(){
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
    "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
    "&redirect_uri="+
    "http://localhost:8080/redirect" +
    "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
  });
  
function move_signup_page() {
  window.location.replace("http://localhost/moze_shop/html/signup_nav.html"); 
}


window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.
    init();
}