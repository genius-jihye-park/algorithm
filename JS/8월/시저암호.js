/*문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

//수도코드
// 1. 공백은 공백
// 2 .대소문자 선언하고 대소문자 안에 s글자가 있나 찾기
// 3. 인덱스 깂에다 N 더해주기


function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let text = s[i];
        if (text == ' ') {
            answer += ' ';
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}


/* 배운점
str.charCodeAt(index) : 문자를 아스키코드로 변환시켜 주는 메서드
String.charCodeAt(index) : 아스키코드를 문자로 변환시켜 주는 메서드. 
String의 정적 매서드이기 때문에 String.fromCharCode() 이렇게 Stirng을 반드시 붙여서 써야한다.
*/
