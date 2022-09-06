/*문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

*/

function solution(n) {
    let sosu = Array.from({ length: n + 1 }, v => true);

    for (var num = 2; num <= Math.sqrt(n); num++) {
        if (sosu[num]) {
            for (var i = num * num; i <= n; i += num) {
                sosu[i] = false;
            }
        }
    }
    const result = sosu.filter(x => x == true);
    return result.length - 2;
}
/* 나의 후기
지금까지 푼 것중에 가장 어려웠음.. 
계속 테스트 케이스 오류가 걸렸다.
코드 바꾸고 바꾸고 계속하다가 결국 구글링함
에라 토스테네스의 체를 이용한다는데
이게 뭔지 제대로 찾아보는 중..
*/


/* 다른 사람의 풀이

에라 토스테네스의 체 이용...
그게 뭔데,,ㅜㅠ

function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

*/