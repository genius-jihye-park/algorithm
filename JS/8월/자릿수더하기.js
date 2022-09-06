/* 문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

//수도코드
// 1. 일단 숫자를 String으로 변경
// 2. 각각 split으로 나눠주기
// 3. 넘버로 다시 바꿔주는 변수 선언
// 4. for문으로 각 자리수 더해주기

function solution(n) {
    let answer = 0;
    let str = String(n);
    let toNum = (num) => Number(num);
    let arr = str.split('').map(toNum);
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i]
    }
    return answer
}
/* 나의리뷰
간결하게 쓸 수도 있지만 차근차근 ^^ 하는게 중요하지 않겠습니까,,?
다음엔 더 잘할 수 있겠지 뭐ㅎㅎ
for문좀 그만 쓰고 싶다.. 생각나는게 if랑 for뿐...
*/

/* 다른사람 코드
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0) //초기값을 0으로 지정해서 이걸로 하거나
    return (n+"").split("").reduce((acc, curr) => parseInt(acc) + parseInt(curr)) //이걸로! -> parseInt로 바꿔주는 이유는 아직 문자형이기 때문
}

1. 먼저 n을 암시적 형변환으로 글자로 바꿔줌
2. split으로 각 글자 나눠주고
3. reduce 함수 사용해서 acc(누산값), curr(현재값)이 들어오면
=> 초기값에다 parseInt(현재값)을 더해줘라.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%EB%B0%B0%EC%97%B4%EC%9D%98_%EB%AA%A8%EB%93%A0_%EA%B0%92_%ED%95%A9%EC%82%B0
*/

