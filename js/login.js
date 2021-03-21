// 주소 창에 있는 parameter를 취득한다.
function getParameter(str_param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get(str_param);
    return param;

}

function init() {
    alert("hello");
    alert("@ : "+getParameter("name"));
    if (getParameter("name") != null) {
        alert(getParameter("name"));
    }
    if (getParameter("email") != null) {
        alert(getParameter("email"));
    }
}

function move_signup_page() {
  window.location.replace("http://localhost/moze_shop/html/signup_nav.html"); 
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
    alert(json_formData);

    $.ajax({
        url:'http://localhost:8080/login',
        type:'POST',
        async: false, 
        contentType:'application/json',
        data:json_formData,
        success: function(data){
            //정상 요청, 응답 시 처리 작업
            alert("success "+data);
            alert("@@ : "+data.token+" / "+data[0]);
           
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
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
                "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
                "&redirect_uri="+
                "http://localhost:8080/redirect_google_login"+
                "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
}

window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.
    // init();
}
