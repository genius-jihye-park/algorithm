
/* 2016년 1월 1일은 금요일입니다. 
2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

function solution(a, b) {
    let answer = '';
    let day = new Date(2016, a - 1, b); //a,b 입력값을 받아서 새로운 날짜 생성
    let today = day.getDay(); //날짜에서 주만 추출 (0-6) 반환
    let weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    answer = weekday[today]
    console.log(answer);

    return answer;
}

/* 삽질 포인트 
일단 바로 요일 구하는 함수 생각나서 newDate, getDay썼는데.. 
month는 0부터 시작헤서  -1 안해줘서 ^^;
*/

/* 다른사람의 풀이
function getDayName(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);

    -> 와우 이걸 생각 못했네 ${변수명}}
    코드가 더 간단하고 가독성 있다..

  var day = date.getDay()
    return arr[day];
}

*/