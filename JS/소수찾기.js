/*문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

*/

function solution(n) {
    let answer = 0;
    let cnt = 0;
    for (let a = 2; a <= n; a++) {
        cnt = 0; //소수판별
        for (let b = 1; b <= a; b++) {
            if (a % b == 0)
                cnt++;
        }
        if (cnt == 2)
            answer++;
    }
    return answer;
}
