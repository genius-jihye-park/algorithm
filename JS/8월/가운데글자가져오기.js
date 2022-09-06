/* 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
    let answer = ''
    s.length % 2 == 0
        ? answer = s[s.length / 2 - 1] + s[s.length / 2] //짝수
        : answer = s[(s.length - 1) / 2]; //홀수
    return answer
}

/* 수도코드
1. 나머지로 짝수 홀수 판별
2. 가운데 숫자는 인덱스로 조절
*/

/* 다른 사람 코드
1. return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
-> Math.ceil을 생각하지도 못했다..근데 이게 더 어려워보이는데?
Math.floor() : 소수점 이하를 버림한다.
Math.ceil() : 소수점 이하를 올림한다.
Math.round() : 소수점 이하를 반올림한다.
-> string.substr(start, length)
start index부터 length 길이만큼 string을 잘라내어 반환

2.  const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
-> 이것도 비슷하네
*/