function move_signup_page() {
    var url = baseurl_web;
    var path = "/signup_native.html";
    location.replace(url+path);
}

function google_signup() {
    location.href="https://accounts.google.com/o/oauth2/auth?client_id="+
    "615811997217-prn8q5o8juolfn38efjdot0vb5gni4kg.apps.googleusercontent.com"+
    "&redirect_uri="+
    "http://server1.sagekhw.com/redirect_google_signup"+
    "&response_type=code&scope=email profile openid&approval_prompt=force&access_type=offline";
}