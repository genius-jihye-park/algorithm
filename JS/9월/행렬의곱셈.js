/* 문제 설명
2차원 행렬 arr1과 arr2를 입력받아,
 arr1에 arr2를 곱한 결과를 반환하는 함수, 
 solution을 완성해주세요.
*/

function solution(arr1, arr2) {
    let row1 = arr1.length;
    let col1 = arr1[0].length;
    let col2 = arr2[0].length;

    let answer = new Array(arr1.length);

    for (let i = 0; i < answer.length; i++) {
        answer[i] = new Array(arr2[0].length).fill(0);
    }

    for (let i = 0; i < row1; i++) { // arr1의 세로만큼 반복 : answer의 세로, arr1의 세로 인덱스 제어
        for (let j = 0; j < col2; j++) { // arr2의 가로만큼 반복 : answer의 가로, arr2의 가로 인덱스 제어
            for (let k = 0; k < col1; k++) { // arr1의 가로만큼 반복 : arr1의 가로, arr2의 세로 인덱스 제어
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }

    }
    return answer;
}

/* 다른 사람의 풀이
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}
->이게 한줄에 나올 수 있는 거였구나.. 행렬 공부부터 다시 하자


*/