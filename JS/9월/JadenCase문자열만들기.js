/* 문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. 
(첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/


function solution(s) {
    return s.toLowerCase().replace(/\b[a-z]/g, (match) => match.toUpperCase());
}

// 나의리뷰
// 정규표현식 써서 쉽게 해결, 이전에 풀은 기억이 있어서 바로 떠올렸다

/*
\b boundary : 범위의 앞글자 선택
[a-z] : a부터 z까지 소문자 
\g : 문자열 전체범위
*/