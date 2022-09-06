/* 문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
*/
// 3차 시도 = 성공
// 수도코드
//1. 공백이면 공백리턴
//2. 이전 문자가 공백이거나 소문자면 -> 대문자
//3. 이전 문자가 대문자였으면 -> 소문자
// 와 if문에서 조건을 answer로 안줘서 개고생 ㅡㅡ
function solution(s) {
    let answer = s[0].toUpperCase();
    for (let i = 1; i < s.length; i++) {
        if (answer[i - 1] === s[i - 1].toLowerCase() || answer[i - 1] == ' ') {
            answer += s[i].toUpperCase();
        } else if (answer[i - 1] === answer[i - 1].toUpperCase()) {
            answer += s[i].toLowerCase();
        } else {
            answer += ' ';
        }
    }
    return (answer)
}


// 1차시도:3, 4, 5, 8, 9, 11, 16 실패 
// 채점 결과
// 정확성: 56.3
// 합계: 56.3 / 100.0
// 틀린점 : 마지막 단어가 끝난 다음에 trim써서 공백을 제거했지만
// 공백 여러개 있을 경우를 생각 못함
function solution(s) {
    let answer = '';
    let words = s.split(' ') //단어 단위로 나뉘어 배열로 저장 ['try', 'hello', 'world']
    for (let i = 0; i < words.length; i++) { //단어의 길이 만큼
        for (let j = 0; j < words[i].length; j++) { //단어 글자수만큼
            j % 2 == 0 //짝수라면
                ? answer += words[i][j].toUpperCase() //짝수
                : answer += words[i][j].toLowerCase() //홀수
        }

        answer += ' ';
        console.log(answer);
    }
    answer = answer.trim()
    return answer;
}

//2차시도:4, 5, 8, 9, 11 실패 (3, 16 성공)
//정확성: 68.8
//합계: 68.8 / 100.0
// 틀린점 : 마지막 단어가 끝난 다음에 replace를 써서 공백을 제거했지만
// 공백 여러개 있을 경우를 생각 못함
function solution(s) {
    let answer = '';
    let words = s.split(' ') //단어 단위로 나뉘어 배열로 저장 ['try', 'hello', 'world']
    for (let i = 0; i < words.length; i++) { //단어의 길이 만큼 반복
        for (let j = 0; j < words[i].length; j++) { //단어 글자수만큼 반복
            j % 2 == 0 //짝수라면
                ? answer += words[i][j].toUpperCase() //짝수
                : answer += words[i][j].toLowerCase() //홀수
        }

        answer += ' ';
        console.log(answer);
    }
    return answer = answer.replace(/\s*$/, "") // 요 코드만 replace로 바꿔줌
}


/* 나의 후기
문제에 하나 이상의 공백이라고 했는데 ,
내멋대로 공백을 하나라고 생각해버렸다.
이것때문에 엄청 헤맸네...
*/

/* 다른 사람의 풀이
function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}
-> 정규식을 써서 깔끔하게 제어.. 

*/
