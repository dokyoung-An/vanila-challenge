// 시계만들기
const clock = document.querySelector(".clock");

function clockes () {
 const date=new Date()
//PadStart는 문자에 글을 더해주는 함수(?)  String으로 date를 감싸서 
//문자로 만들어준 뒤 padStart를 활용해 글자가 '2글자가 아니면 앞에 0을 붙여줘라'는 
//명령을 실행하게 됨. 


const month = String(date.getMonth()+1).padStart(2,"0");
const day = String(date.getDate()).padStart(2,"0");
const hours = String(date.getHours()).padStart(2,"0");
const min = String(date.getMinutes()).padStart(2,"0");
const sec =String(date.getSeconds()).padStart(2,"0");
clock.innerHTML=`${month} 월 ${day} 일 ${hours} 시 ${min} 분 ${sec}초`;
}
clockes();

//setInterval은 계속 실행시키는 함수. 오늘의 시간을 계속 실행해야 clokes 함수가 제대로 작동함
//따라서 new Date는 clokes 함수 내에 있어야 함. 

setInterval(clockes,1000)

