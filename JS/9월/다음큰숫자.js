/*문제 설명
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
*/


// 수도코드
// 1. n을 10진수 -> 2진수 변경하고 1의 갯수 기억
// 2. n부터 숫자 1씩 올리면서 2진수로 변환
// 3. n을 2진수로 변경한 값과 1. 이랑 같니?
// 4. 같다면 2진수를 -> 10진수로 바꿔서 출력

function solution(n) {
    let nCount = n.toString(2).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0); //n의 1의 개수 (숫자)
    let result = n + 1 //숫자 
    let temp = 0;

    while (true) {
        temp = result.toString(2).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0)// result의 1의개수
        if (temp == nCount) {
            break;
        }
        result++; // n+1   
    }
    return result;
}


/* 다른 사람의 풀이
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
-> 자꾸 match랑 정규식 까먹고 안쓴다.. 간단하게 끝날 수 있는디 ㅜ
*/
