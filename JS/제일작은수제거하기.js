/* 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

 */



function solution(arr) {
    if (arr.length <= 1) return [-1]

    let min = Math.min(...arr);
    let idx = arr.indexOf(min);

    arr.splice(idx, 1);
    return arr;
}


/* 다른 사람의 풀이
function solution(arr) {
   arr.splice(arr.indexOf(Math.min(...arr)),1);
   if(arr.length<1)return[-1];
   return arr;
}

가장 작은수(최솟값) , 가장 큰수 (최댓값) 나오면 Math 함수 사용

find(): 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
findIndex(): 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다
indexOf(): 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
slice(): 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
splice():배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.

*/