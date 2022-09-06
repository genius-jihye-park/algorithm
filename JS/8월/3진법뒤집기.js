/* 문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

*/

function solution(n) {
    let answer = 0;
    let tmp = n.toString(3);
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98
    // 10진수 -> 3진수 toString 기수를 이용한 진수 변환,,,하
    tmp = tmp.split("").reverse().join("");
    answer = parseInt(tmp, 3);
    //3진수를 10진수로 변환 parseInt(변수, 현재진수값);
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    return answer;
}



//초기코드 -> 재귀로 해결해보려함,..,.
function solution(n) {
    let answer = 0;
    if (n <= 2) return n //초기에 리턴할거 먼저 적기
    return answer = n % 3 + "" + solution(Math.floor(n / 3))

}
//이러면 "3진법"으로 도출은 되는데. 10진법으로 표현을 못하겠삼
// 재귀를 써서 for문도 사용이 안된다.
// 머리 굴릴대로 굴려봤는데 떠오르지 않음...




/* 다른 사람의 풀이
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

->허,, 위에 정답식을 이리 간단하게..
정답도 안떠올랐는데, 이거보니 어이가 없다
진짜 똑똑한 사람들 많네.. 반복해야지
*/
