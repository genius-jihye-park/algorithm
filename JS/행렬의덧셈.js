/*문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 
같은 열의 값을 서로 더한 결과가 됩니다.
2개의 행렬 arr1과 arr2를 입력받아, 
행렬 덧셈의 결과를 반환하는 함수, 
solution을 완성해주세요.
*/

//최종코드
function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let sum = [];
        for (let j = 0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}

// 1차시도 처음 코드
function solution(arr1, arr2) {
    let answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}


/*다른 사람의 풀이
function sumMatrix(A,B){
return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
->한줄로 끝나다니 ㅋ 어이다
맵을 2번 돌리는게 특이하네...  for말고 map을 이용해보려고 노력해야겠다..

*/