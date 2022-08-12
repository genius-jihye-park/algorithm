/* 문제 설명
배열 arr가 주어집니다. 
배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
 */

function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}


/* 나의 풀이
Set함수를 이용해서 풀으려고 했는데, 문제점은 같은 숫자는 모두 중복처리가 되기 때문에
마지막에 연속된 숫자가 나와도 숫자가 반환이 안됐다.
*/