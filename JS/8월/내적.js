/*문제 설명
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a
와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

*/
function solution(a, b) {
    let answer = 0;
    //let answer = 1234567890;
    //이게 주어진 이유가 있을텐데...
    for (let i = 0; i < a.length; i++)
        answer += a[i] * b[i]
    return answer;
}

/* 다른 사람의 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
-> 아 리듀스 이용하면 간단했을텐데!
근데 두번째 현재값이 왜 언더바가 들어가 있는걸까
[-_.]?: 메타문자 '?'는 0 또는 1회 등장하는 경우를 의미한다. 따라서 '-', '_', '.'중 하나가 등장해도 되고 아니어도 된다는 의미다
정규표현식?
*/