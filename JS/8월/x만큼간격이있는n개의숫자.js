/* 문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, 
x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
*/

function solution(x, n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        answer.push(i * x)
    }
    return answer
}

/* 다른 사람의 풀이

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
->> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
fill 메소드 사용..배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁
*/