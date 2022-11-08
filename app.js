// button -------------------------------------------------------

const btnStartOff = document.querySelector(".btn_start_off"); // 스타트 비활성버튼
const btnStartOn = document.querySelector(".btn_start_on"); // 스타트 활성버튼
const btnPause = document.querySelector(".btn_pause") // 포즈 활성버튼
const btnResetOff = document.querySelector(".btn_reset_off"); // 리셋 비활성버튼
const btnResetOn = document.querySelector(".btn_reset_on"); // 리셋 활성버튼


// 남은 시간 -------------------------------------------------------

const boxHours = document.querySelector(".box_hours"); // 남은 시
const boxMin = document.querySelector(".box_min"); // 남은 분
const boxSec = document.querySelector(".box_sec"); // 남은 초


// 이벤트 함수 (총 3개 필요) -------------------------------------------------------
// 스타트 활성버튼클릭, 포즈 활성버튼클릭, 리셋 활성버튼클릭

function startOnToPause (){
    btnStartOn.style.display = "none";
    btnPause.style.display = "inline-block";
}

function resetbtn (){ // 리셋 활성 버튼 클릭이벤트 함수
    btnStartOn.style.display = "none";
    btnPause.style.display = "none";
    btnResetOn.style.display = "none";
    btnStartOff.style.display = "inline-block";
    btnResetOff.style.display = "inline-block";

    boxHours.innerText = "00";
    boxMin.innerText = "00";
    boxSec.innerText = "00";
}


// 이벤트 주입 -------------------------------------------------------
btnStartOn.addEventListener("click", startOnToPause);
btnResetOn.addEventListener("click", resetbtn); // 리셋 활성 버튼 클릭시 활성상태인 모든 버튼 비활성, 타이머 초기화



