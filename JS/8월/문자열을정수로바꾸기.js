// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
/* 
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 "0"으로 시작하지 않습니다.
입출력 예
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
*/


function solution(s) {
    let answer = 0;
    answer = parseInt(s)
    return answer;
}
//나의 풀이법은 명시적 타입 변환(ex: Number(), String(), Boolean(), Object(), parseInt(), parseFloat()

// 다른 사람 풀이... 묵시적 형변환
// js에는 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면, 자동으로 타입을 변환해서 사용한다.

/* 
function strToInt(str){
    return str/1
    }
    */ 