$("#oauthBtn").click(function(){
    var url = baseurl_server1;
    var path = "/redirect";
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
    "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
    "&redirect_uri="+
    (url+path) +
    "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
});