/* 문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 
18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
solution을 완성해주세요.
*/

function solution(x) {
    let newx = x + ''; // 문자형으로 바꿔줌
    let num = newx
        .split('') // 글자별로  쪼개주기
        .reduce((a, b) => (+a) + (+b)); //각 숫자더해주기,대신 문자형이니까 바꿔서!
    return (x % num == 0) ? true : false
}


/* 다른 사람의 풀이
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}
---> 한줄로 쓸 수도 있구나
1.n 문자로 형변환
2. split
3. reduce
4.n으로 나누어 떨어지면 = 0이니 false
5.! 사용해서 true로 변환
이런생각 어케하지

*/