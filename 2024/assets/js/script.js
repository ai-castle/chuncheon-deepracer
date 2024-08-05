var 예선Password = "abcd2024";
var 본선Password = "gogo2024";
var 결승Password = "aaaa1111";

//////////////// 공통 자료 ///////////////
function 대회일정표() {
    window.open("assets/img/대회일정표.svg", "_blank");
}

function 참가자접수() {
    window.open("https://forms.gle/tw6VGkGgnWobpw8s8", "_blank");
} 

function 참가자접수사전준비사항안내() {
    window.open("https://docs.google.com/document/d/e/2PACX-1vSuc5jCrOHqciN53jJdrKx6gzSHKhY5mCBl2RZUomoj7UYKksj_UOXR15BxXDq-hkQOjeYxR6psSyIr/pub", "_blank");
} 

function 계정사용량() {
    window.open("https://dr-chuncheon2024.ai-castle.com/usage/", "_blank");
}

//////////////// 오리엔테이션 자료 //////////
function OT1차() {
    window.open("https://us05web.zoom.us/j/82862327465", "_blank");
}

function OT1차자료() {
var password = prompt("비밀번호(예선)를 입력하세요.");
if (password === 예선Password) {
    window.open("https://docs.google.com/presentation/d/1wBaggna4WoIjmXs6JlYWk_ezveySsRKI4FRHrfWbNTU/edit?usp=sharing", "_blank");
} else {
    alert("비밀번호가 잘못되었습니다.");
}
} 

function OT2차() {
    window.open("comming-soon.html", "_blank");
}

function OT2차자료() {
var password = prompt("비밀번호(결승)를 입력하세요.");
if (password === 결승Password) {
    window.open("https://docs.google.com/presentation/d/1JVUoHKParptDxRPQFUoHL0_Vjzyb52vG-wNg0EZyIQ4/edit?usp=sharing", "_blank");
} else {
    alert("비밀번호가 잘못되었습니다.");
}
}


//////////////// 예선 관련 자료 //////////
function 예선오픈채팅() {
    window.open("https://open.kakao.com/o/g31Mylqg", "_blank");
}


function 예선규칙() {
    var password = prompt("비밀번호(예선)를 입력하세요.");
    if (password === 예선Password) {
        window.open("https://docs.google.com/document/d/1867mdov5puu9P_i2bRVbg1-_jRn_T8N5oRpO6nLOugE/edit?usp=sharing", "_blank");
    } else {
        alert("비밀번호가 잘못되었습니다.");
    }
}

function 예선랭킹() {
    window.open("https://dr-chuncheon2024.ai-castle.com/leaderboard/", "_blank");
}


//////////////// 본선 관련 자료 //////////
function 본선오픈채팅() {
    window.open("https://open.kakao.com/o/guJ1zlqg", "_blank");
}


function 본선규칙() {
    var password = prompt("비밀번호(본선)를 입력하세요.");
    if (password === 본선Password) {
        window.open("https://docs.google.com/document/d/1867mdov5puu9P_i2bRVbg1-_jRn_T8N5oRpO6nLOugE/edit?usp=sharing", "_blank");
    } else {
        alert("비밀번호가 잘못되었습니다.");
    }
}

function 본선랭킹() {
    window.open("comming-soon.html", "_blank");
}

////////////// 결승 관련 링크 //////////////
function 결승오픈채팅() {
    window.open("https://open.kakao.com/o/gqbOUcEg", "_blank");
}


function 결승규칙() {
    var password = prompt("비밀번호(결승)를 입력하세요.");
    if (password === 결승Password) {
        window.open("https://docs.google.com/document/d/1ucv70XA-FjQ2wSGsXGG6ECdz5H1nMbADqwOU3yqrj3Q/edit?usp=sharing", "_blank");
    } else {
        alert("비밀번호가 잘못되었습니다.");
    }
} 

function 결승랭킹() {
    window.open("comming-soon.html", "_blank");
}

function 결승테스트주행시간표() {
    window.open("assets/img/결승테스트주행시간표.jpg", "_blank");
}

function 결승숙소위치() {
    window.open("https://naver.me/xUEItkPy", "_blank");
    // window.open("comming-soon.html", "_blank");
}

function 결승시간표() {
    window.open("assets/img/결승시간표.jpg", "_blank");
}

function 결승라이브스트리밍() {
    window.open("comming-soon.html", "_blank");
}


