/* 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ... (1~5)
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...(2:1,3,4,5)
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...(3,1,2,4,5)

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/


function solution(answers) {
    let answer = [0, 0, 0];
    let one = [1, 2, 3, 4, 5];
    //수포자 1
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    //수포자2
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    //수포자3
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == one[i % one.length]) answer[0]++;
        console.log(answer[0])
        if (answers[i] == two[i % two.length]) answer[1]++;
        if (answers[i] == three[i % three.length]) answer[2]++;
    }
    let max = Math.max(...answer);
    let result = [];
    for (let j = 0; j < answer.length; j++) {
        if (answer[j] === max) {
            result.push(j + 1)
        };
    };
    return result;
}


/* 다른 사람의 풀이
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
-> filter를 사용해서 가독성있게 구했다.

*/