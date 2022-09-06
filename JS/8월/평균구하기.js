/* 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요
*/

function solution(arr) {
    let answer = 0;
    for (let i = 0; i <= arr.length; i++) {
        i == arr.length
            ? answer = (answer / arr.length)
            : answer = answer + arr[i]
    }
    return answer;
}

/* 다른 사람의 풀이
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}

-> 아 리듀스 이용하면 될것을..떼잉..
맨날 for문 아님 if만 생각나버림...
숏코딩 계속 생각해보자

*/