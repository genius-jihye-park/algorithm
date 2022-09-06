/*문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 
오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

//수도코드
// 1 . divisor로 나눈 나머지가 0인 수를 push
// 2.  나눈수 0 인 answer의 length가 0이면  -1 리턴
// 3.  오름차순 정렬 sort로


function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
            //console.log(answer)
        }
    }
    if (answer.length == 0) {
        answer.push(-1);
    }
    answer.sort(function (a, b) {
        return a - b;
    })
    return answer;


}



/* 다른사람의 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

-> 필터로 거를 수 있는 방법이 있을거라고 생각했는데,
이런식으로 사용하면 되는구나.
삼항연산자를 써서 더 간단하네요,,,


function solution(arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];

}
-> map을 쓰는 방법도 생각했었는데, 
처음에 맵을 돌려서 나눈 나머지가 0이고 푸시를하면 값이 걸러지고
? 그 다음 길이가 1이상인거는 sort로 오름차순 정렬
: 아니라면 -1 리턴
*/