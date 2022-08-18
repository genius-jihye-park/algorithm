/* 문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
*/

//수도코드
// 1. 문자열이 들어가면 split으로 글자 하나하나 나눠주고
// 2. sort로 문자열 오름차순 정렬
// 3. 역순배치해서
// 4 join으로 붙여준다

function solution(s) {
    return s.split('').sort().reverse().join('');
}

