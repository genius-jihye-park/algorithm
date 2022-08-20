/* 문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

// 수도코드
// 1. 먼저 n을 글자타입 바꿔주고
// 2. 각 자리수 쪼개주고
// 3. sort써서 내림차순 정렬해주고
// 4. join으로 각 배열 합쳐주고
// 5. 숫자형으로 바꿔줌

function solution(n) {
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))

}



/* 다른 사람의 풀이

function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
1. 먼저 문자형으로 바꿔준걸 newN이라는 변수 선언
2. 그걸 newArr라는 변수 선언해서
3. 자리수 쪼개고
4. 분류하고(오름차)
5. 리버스 시키고(내림차)
6. 쪼개진 배열을 하나로 합침

7. +로 자동형변환해서 숫자형으로 리턴..
*/