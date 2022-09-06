/* 문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록
 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
*/


//수도코드
// 1. for문 돌려서 n % x == 1 인걸 골라내기
// 2. n이 3보다 크니, X가 될수 있는 가장 작은 수는 2이다 
// 3. x는 2부터 시작해서 for문 반복, 만약 나머지 1이라면 break






//최종코드
function solution(n) {
    let answer = 0;
    for (let x = 2; x < n; x++) {
        if (n % x == 1) {
            answer = x
            break;
        }
    }
    return answer;
}

//첫번째 시도
function solution(n) {
    let answer = 0;
    for (let x = 3; x < n; x++) {
        if (n % x == 1) {
            answer = x
            break;
        }
    }
    return answer;
}
