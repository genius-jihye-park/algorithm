/*문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

*/


//수도코드
// 1. temp라는 임시 배열을 만들어서 '(' ')' 각각의 개수를 넣는다
// 2. for문을 통해서 반복하다가
// 3.  ')' 가 '(' 보다 많아진다면 break걸고 false 리턴
// 4. 다른 경우의수는 길이가 홀수거나
// 5. 시작이 ')'거나
// 6. 끝이 '(' 일 때 false

function solution(s) {
    let temp = [0, 0]
    for (let i = 0; i < s.length; i++) {
        s[i] == ')'
            ? temp[1] += 1 // ) 일 때
            : temp[0] += 1 // ( 일 때
        if (temp[1] > temp[0]) {
            break;
            return false
        }
    }

    return s.length % 2 == 1 //길이가 홀수거나
        || s[0] == ')'     //시작이 ')' 거나
        || s[s.length - 1] == '(' //끝이 '('면
        || temp[0] !== temp[1]
        ? false
        : true
}


// n차시도 (실패))
function solution(s) {
    let temp = [0, 0]
    for (let value of s) {
        value === '('
            ? temp[0] += 1
            : temp[1] += 1
    }
    // s.forEach(word => {
    //         word === '('
    //         ? temp[0] += 1
    //         : temp[1] += 1
    //         }) 
    return s.length % 2 == 1 //길이가 홀수거나
        || s[0] == ')'     //시작이 ')' 거나
        || s[s.length - 1] == '(' //끝이 '('면
        || temp[0] !== temp[1]
        ? false
        : true
}


/*  다른 사람의 풀이

1. 정규식, match 활용
function is_pair(s){
  var result = s.match(/(\(|\))/g);
  return result[0] == '(' && result.length % 2 == 0 ? true : false
}

2. 이진법? 1, 0, -1로 간단히 풀 수 있는문제였는데 ㅠ ㅠ
function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}

*/
