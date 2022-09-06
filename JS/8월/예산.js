/* 문제 설명
S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 
그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다.
그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 
예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.
*/

// 수도코드
// 1. sort써서 숫자 오름차순 정렬 
// 2. reduce써서 budget에서 작은거부터 돌아가면서 빼주고
// 3. 만약 그게 0이상이라면 누산값을 +1 해준다 
function solution(d, budget) {
    let answer = 0;
    d.sort(function (a, b) {
        return a - b;
    });
    answer = d.reduce(function (acc, cur) {
        if (budget - cur >= 0) {
            budget -= cur
            acc += 1;
        }
        return acc;
    }, 0);

    return answer;
}


/* 다른 사람의 풀이

1. 
function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}

2.
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

3.
function solution(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a,b) => a-b).forEach(function(val){
        money += val;
        if(money <= budget){
            answer++;    
        }

    })
    return answer;
}

-> 전부 보면서 느끼지만,, 
코드를 간단하게 만드는 법을 찾아야할듯..
나는 복잡하게 생각하는 경향이 있네 ㅠ


*/
