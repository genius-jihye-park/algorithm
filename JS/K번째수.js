/* 문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, 
k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], 
i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를
 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/
let answer = array.slice(commands[0] - 1, commands[1] - 1).sort()

/* 수도코드
1. array를 slice로 comands[0], conmand[1]로 자르고 변수에 넣는다
2. sort 메소드로 정렬
3. 변수의  conmand[2]번쨰 있는 수를 구함
*/

function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let tmp = [];
        tmp = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
        answer.push(tmp[commands[i][2] - 1]);
    }
    return answer;
}


/* 다른 사람의 풀이
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command 
        --> 구조분해 할당..! 커맨드가 들어가면 [스타트,앤드,위치]
        const newArray = array //새 배열
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}
*/
