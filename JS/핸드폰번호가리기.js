/*문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/

function solution(phone_number) {
    let answer = '';
    let num = phone_number
        .split('') // 글자별로  쪼개주기
        .map((n, idx) => {
            if (idx < phone_number.length - 4) {
                n = '*'
                answer += n
            } else answer += n

        })
    return answer
}

/* 다른 사람의 풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
-> 와 진짜 내가 어렵게도 푼걸 정규식으로 바로 쉽게 푸네
정규식  공부 당장필요;
*/