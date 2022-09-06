/* 문제설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

*/

function solution(seoul) {
    let answer = '';
    for (i = 0; i <= 1000; i++) {
        if (seoul[i] === 'Kim') {
            answer = `김서방은 ${i}에 있다`
        }
    }
    return answer;
}
//리뷰: 나름 내코드도 나쁘지 않은거같은데,,떼잉,,ㅠ

/* 다른 사람 코드

function solution(seoul) {
    let answer = '';
    for (i=0; i <= 1000; i++){
        if(seoul[i] === 'Kim'){
            answer = `김서방은 ${i}에 있다`
        }
    }
    
    return answer;
}

-> 와우 나는 for문 밖에 생각이 안났는데 ㅠ indexOf도 있었지..

*/