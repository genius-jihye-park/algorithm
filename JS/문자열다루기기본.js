/*문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
    return (s.length === 4 || s.length === 6) && s / 1 == parseInt(s)
        ? true
        : false
}



/* 다른 사람의 풀이

function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

-> 정규식이 있었네요

*/
