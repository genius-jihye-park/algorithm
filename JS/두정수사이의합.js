/* 문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

//수도코드
// 1. 대소비교
// 2. a >b , a=b, a<b 3개의 케이스로 나눠서 풀이




function solution(a, b) {
    let answer = 0;
    if (a = b) {
        answer = a;
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            answer += i
        }
    } else {
        for (let i = a; i <= b; i++) {
            answer += i
        }
    }
    return answer;
}


/* 다른사람의 코드
function adder(a, b){
    var result = 0


    return (a+b)*(Math.abs(b-a)+1)/2;
}

-> 가우스 공식 ..
Math.abs에 대해서 공식문서를 더 참조해야 할 것 같다
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
> Math.abs 는 절대값 반환하는 함수
> 가우스 공식 : 등차수열 활용! 
>> n는 x와 y사이의 정수의 개수, x는 작은수, y는 큰수
>>> n(x+y)/2   === ((y-x)+1)(x+y)/2
*/