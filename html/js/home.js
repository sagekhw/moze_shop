window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.

    var jwt = getCookie("jwt");
    if(jwt != ""){
        var str = $("#login_text").val();
        alert(str);
    }
}