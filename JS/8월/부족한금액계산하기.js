/* 문제 설명
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
이 놀이기구의 원래 이용료는 price원 인데, 
놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

*/

//수도 코드
// 1. total이라는 변수에 Array를 생성하는데 count만큼 배열크기 설정
// 2. fill메소드를 써서 price로 배열을 다 채워줌
// 3. map을 돌려서 배열이 들어가면 인덱스랑 가격을 곱해서 총 가격을 구해줌
// 4. 가지고 있는 money가 더 크면 0 리턴, 작다면 빼서 리턴



function solution(price, money, count) {
    let total = Array(count).fill(price).map((p, i) => (i + 1) * price).reduce((prev, curr) => prev + curr, 0)
    return money >= total ? 0 : total - money
}
// 처음에 풀은건 너무 뻔한거라서 다르게 풀고 싶어서 머리 굴렸는데, 
// 오히려 코드 길고 지저분한거 같기도..



//초기 코드
function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += (price * i)
    }
    money >= total ? 0 : total - money
}


/* 다른 사람의 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

-> 가우스 공식 사용하여 깔끔하게.. 허
50+1, 49+2 ....ㅋ
여기다가 가우스 공식 대입할 생각을 햇냐
봐도 모르겠따


const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);
->허,, 한줄로 끝날 수 있다니 이렇게 간단하게?

1. ..._ 는 코딩 테스트시 solution 함수에 들어오는 매개변수의 목록
2. 함수 몸체에서 _[0] 은 price, _[1]은 money, _[2]는 count가 됩니다.
3. Math.max 부분은 0과 우리가 계산하고자 하는 결과 둘 중에 더 큰 수를 반환하게 하여,
 계산 결과가 음수인 경우, 즉 돈이 부족하지 않은 경우에는 0이 나오도록 한 것입니다.
4. '++_[2]' 부분은 전위연산자로써, _[2]에 대해 먼저 +1하고 계산하는..
 즉 count+1을 의미한다고 보시면 됩니다.


 
*/
