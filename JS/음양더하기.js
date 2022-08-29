/* 문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 
정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 
불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/

//3번째
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => signs[idx] ? acc += (cur * 1) : acc -= (cur * 1), 0)
}

//2번째
function solution(absolutes, signs) {
    return absolutes.reduce(function (acc, cur, idx) {
        signs[idx] ? acc += (cur * 1) : acc -= (cur * 1)
        return acc;
    }, 0)
}

//초기코드(맞음)
function solution(absolutes, signs) {
    let answer = 0
    absolutes.reduce(function (acc, cur, idx) {
        if (signs[idx]) {
            acc += (cur * 1);
        }
        else {
            acc -= (cur * 1)
        }
        return answer = acc;
    }, 0)
    return answer
}


/* 다른 사람의 풀이

5
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*/