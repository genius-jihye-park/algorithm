/*문제 설명
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 
작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	            60      	50
2	            30      	70
3	            60      	30
4	            80	        40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 
80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 
80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 
지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(sizes) {
    let answer = 0
    let big = []
    let small = []
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] <= sizes[i][1]) {
            big.push(sizes[i][1])
            small.push(sizes[i][0])
        } else {
            small.push(sizes[i][1])
            big.push(sizes[i][0])
        }
        answer = Math.max(...big) * Math.max(...small)
    }
    return answer;
}


//두번째 시도 (시간초과)
function solution(sizes) {
    let answer = sizes.flat()
    let big = [];
    let small = [];
    for (let i = 0; i < answer.length; i + 2) {
        if (answer[i] >= answer[i + 1]) {
            big.push(answer[i])
            small.push(answer[i + 1])
        } else {
            small.push(answer[i])
            big.push(answer[i + 1])
        }
        let result = Math.max(...small) * Math.max(...big)
    }
    return result

}


//초기코드
function solution(sizes) {
    let answer = sizes.flat().sort((a, b) => a - b);
    return answer[answer.length - 1] * answer[(answer.length / 2) - 1];
}


// 1. 먼저 2차 배열 풀고
// 2. sort로 순서대로 정렬 후 
// 3. max랑 length-1/2 index 곱하기


/* 다른 사람의 풀이1

function solution(sizes) {
    const [hor, ver] =     => 구조분해 할당 사용
    sizes.reduce(([h, v], [a, b]) => sizes에 리듀스 돌려서 누산 [h,v] 현재[a,b]
    [Math.max(h, Math.max(a, b)), =>배열0 :max(누산0, 현재값)
    Math.max(v, Math.min(a, b))], =>배열1 :min(누산1, 현재값)
    [0, 0]) --> 초기 값
    return hor * ver; => 구조 분해 할당해서 곱하기..
}


=> 와 쪼개서 보니까 대단쓰..
첨에는 길게 쓴 다음에 리팩토링 한거라고 믿을게요

function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}
*/