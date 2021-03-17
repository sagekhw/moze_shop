const VALIDITY_ID_MSG = "아이디는 4~12자의 대소문자와 숫자로만 입력 가능합니다.";
const VALIDITY_PW_MSG = "패스워드는 최소 8 자 및 최대 10 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상";
const VALIDITY_NAME_MSG = "이름은 2자 이상의 영문 및 한글로 작성되어야 합니다.";
const VALIDITY_YEAR_MSG = "년도가 입력되지 않았습니다.";
const VALIDITY_MONTH_MSG = "월이 입력되지 않았습니다.";
const VALIDITY_DAY_MSG = "일이 입력되지 않았습니다.";
const VALIDITY_EMAIL_MSG = "이메일이 잘못입력 되었습니다.";
const VALIDITY_MOBILENUMBER_MSG = "전화번호가 잘못입력 되었습니다.";

const VALIDITY_ID_RULE = /^[a-zA-Z0-9]{4,12}$/;
//최소 8 자 및 최대 16 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상 :
const VALIDITY_PW_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
//이름 정규화 공식
const VALIDITY_NAME_RULE = /^[가-힝a-zA-Z]{2,}$/;
const VALIDITY_EMAIL_RULE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const VALIDITY_MOBILENUMBER_RULE = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
const DATE = new Date();
const YEAR = DATE.getFullYear();

var ID_CHECK = false;
var MAIL_CHECK = false;
var MOBILENUMBER_CHECK = false;
var flag = true;

// 주소 창에 있는 parameter를 취득한다.
function getParameter(str_param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param = urlParams.get(str_param);
    return param;

}

function init() {
    if (getParameter("name") != null) {
        $("#user_name").val(getParameter("name"));
    }
    if (getParameter("email") != null) {
        document.getElementById("input_email").value = getParameter("email");
    }
}
class userinfo {
    constructor(user, username, password, signup_date, gender, email, nationNo, mobilephone_number) {
        this.user = user;
        this.username = username;
        this.password = password;
        this.signup_date = signup_date;
        this.gender = gender;
        this.email = email;
        this.nationNo = nationNo;
        this.mobilephone_number = mobilephone_number;
    }
}

function id_check(re, taget, value, message) {
    alert("id_check");
    ID_CHECK = true;
}

function mail_check(re, taget, value, message) {
    alert("mail_check");
    MAIL_CHECK = true;
}

function mobilenumber_check(re, taget, value, message) {
    alert("mobilenumber_check");
    MOBILENUMBER_CHECK = true;
}

function check(re, taget, value, message) { //정규화데이터,아이템 id,메세지
    if (re != "") {
        if (re.test(value)) {
            if (taget == "mobilephone_number_container") {
                alert("1 : " + taget + " / " + value + " / " + message);
            }
            return true;
        } else {
            if (taget == "mobilephone_number_check") {
                alert("2 : " + taget + " / " + value + " / " + message);
            }
            $("#" + taget + " + .inconsistency").css("display", "block");
            $("#" + taget + " + .inconsistency").text(message);
            $("#" + taget).focus();
            return false;
        }
    } else {
        alert("taget");
        $("#" + taget + " + .inconsistency").css("display", "block");
        $("#" + taget + " + .inconsistency").text(message);
        $("#" + taget).focus();
        return false;
    }
}

function validity_check(taget, value) {

    if (value != "") {
        if (taget == "check_user") {
            flag = true;
            if (!check(VALIDITY_ID_RULE, taget, value, VALIDITY_ID_MSG)) {
                flag = false;
                return 0;
            }
        }
        if (taget == "password" || taget == "password_check") {
            flag = true;
            if (!check(VALIDITY_PW_RULE, taget, value, VALIDITY_PW_MSG)) {
                flag = false;
                return 0;
            }
        }
        if (taget == "user_name") {
            flag = true;
            if (!check(VALIDITY_NAME_RULE, taget, value, VALIDITY_NAME_MSG)) {
                flag = false;
                return 0;
            }
        }
        if (taget == "signup_year") {
            flag = true;
            if (!((YEAR - 100) <= value && value <= YEAR)) {
                check("", taget, value, VALIDITY_YEAR_MSG);
            }
        }
        if (taget == "signup_month") {
            flag = true;
            if (!(1 <= value && value <= 12)) {
                check("", taget, value, VALIDITY_MONTH_MSG);
            }
        }
        if (taget == "signup_day") {
            flag = true;
            if (!(1 <= value && value <= 31)) {
                check("", taget, value, VALIDITY_DAY_MSG);
            }
        }
        if (taget == "check_email") {
            flag = true;
            if (!check(VALIDITY_EMAIL_RULE, taget, value, VALIDITY_EMAIL_MSG)) {
                flag = false;
                return 0;
            }
        }
        if (taget == "mobilephone_number_check") {
            flag = true;
            if (!check(VALIDITY_MOBILENUMBER_RULE, taget, value, VALIDITY_MOBILENUMBER_MSG)) {
                flag = false;
                return 0;
            }
        }
    } else {
        $("#" + taget + " + .inconsistency").css("display", "block");
        flag = false;
    }

}

function signup() {
    $(".inconsistency").css("display", "none");
    var user = $("#user").val();
    var username = $("#user_name").val();
    var password = $("#password").val();
    var password_check = $("#password_check").val();
    var signup_year = $("#signup_year").val();
    var signup_month = $("#signup_month").val();
    var signup_day = $("#signup_day").val();
    var gender = $("#gender").val();
    var input_email = $("#input_email").val();
    // var nationNo = $("#nationNo").val();
    var mobilephone_number = $("#mobilephone_number").val();
    // alert(input_email);
    validity_check("check_user", user);
    validity_check("user_name", username);
    validity_check("password", password);
    validity_check("password_check", password_check);
    validity_check("signup_year", signup_year);
    validity_check("signup_month", signup_month);
    validity_check("signup_day", signup_day);
    validity_check("gender", gender);
    validity_check("check_email", input_email);
    validity_check("mobilephone_number_check", mobilephone_number);

    if (flag && ID_CHECK && MAIL_CHECK && MOBILENUMBER_CHECK) {
        alert("성공");
    } else {
        if (!ID_CHECK) {
            alert("ID_CHECK 실패");
        }
        if (!MAIL_CHECK) {
            alert("MAIL_CHECK 실패");
        }
        if (!MOBILENUMBER_CHECK) {
            alert("MOBILENUMBER_CHECK 실패");
        }
        alert("실패");
    }
}
window.onload = function() {
    // 페이지가 로딩된 후 실행해야 되는 코드를 추가한다.
    init();
}