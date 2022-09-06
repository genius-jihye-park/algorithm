/* 문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

//수도코드
// 1. 자연수 n을 글자로
// 2. 글자인 n을 분리시킴
// 3. 반대로 
// 4. 다시 숫자로 만들어줌

function solution(n) {
    return (n + '').split('').reverse().map(num => parseInt(num));
}



/* 다른사람의 풀이
 var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
*/