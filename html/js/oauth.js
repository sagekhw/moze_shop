$("#oauthBtn").click(function(){
    var url = baseurl_busan;
    var path = "/redirect";
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
    "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
    "&redirect_uri="+
    // "http://localhost:8080/redirect" +
    (url+busan_auth_port+path) +
    "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
});