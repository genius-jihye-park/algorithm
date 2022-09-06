/* 문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            answer += i
        }
    }
    return answer;
}

/* 나의풀이
맨 처음에는 answer를 1로 지정하고 (무조건 1은 약수니까)
그런다음 i시작을 2로 했는데, 테스트 케이스 16번에서 오류가 났다.
그래서 다시 돌아와서 0부터 시작해서 풀었는데, 그니까 성공
*/