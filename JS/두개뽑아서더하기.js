/* 문제 설명
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 
배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/


// 수도코드
// 일단 배열을 하나하나 a부터 z까지 더해보자
// map 사용하고(아님;;)
// 마지막에 sort로 중복제거하면 될 것 가타
// 아 근데 이렇게 안돼서  다시 for문으로 ㅎ;


function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
        mySet2 = new Set(answer.sort((a, b) => a - b));
        answer = Array.from(mySet2);
        console.log(mySet2)
    }

    return answer
}


/* 다른 사람의 풀이
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

-> 저랑 비슷한데요? ㅎㅎㅎ

*/
