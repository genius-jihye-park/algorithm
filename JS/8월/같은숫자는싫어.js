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
그래서 고전적인 방법을 사용
*/


/* 다른사람 코드
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

1. 필터 사용해서 인자(요소, index)를 사용해서 Boolean값을 이용한다
2. 요소가 arr[index+1]과 같지 않은 것만 리턴
와우 ㅋ 어떻게 이런 생각을 완전 간단하게 잘 표현하셨다.. ㅠ
*/