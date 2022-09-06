/* 문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

*/
function solution(s) {
    let answer = true
    let p = 0;
    let y = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'p' || s[i] == 'P') {
            p += 1;
        } else if (s[i] == 'y' || s[i] == 'Y') {
            y += 1;
        }

    }
    if (p === y) {
        return answer;
    } else return false;
}

/* 문제점
뭔가 하면서도 코드가 구려보였음
*/

/* 다른 사람의 풀이

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

->허 참.. 어이없다. 왜 이생각을 못했지?

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}

-> match라는 함수를 더 자세히 알아보게 됌..
*/