/* 문제 설명
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

// 자꾸 테스트케이스4,6,7이 통과가 안돼..ㅠ

function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;

    //카펫의 최소높이는 3부터이다.(위아래 갈색, 가운데가 노란색이기 때문에)
    for (let height = 3; height <= brown; height++) {
        //임의의 높이로 나눌때 나머지가 없을경우만
        if (sum % height === 0) {
            //가로길이
            let weight = sum / height;

            //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
            //결과가 yellow와 같다면 해당 높이와 길이 리턴
            if ((height - 2) * (weight - 2) === yellow) {
                return [weight, height];
            }
        }
    }
    return answer;
}





// 나의 무수한 시도 ㅎ
function solution(brown, yellow) {
    let num = brown + yellow
    const divisors = [];
    let answer = []
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i != i) divisors.push(num / i);
        } // 숫자의 약수 추출
    } //for문 닫힘
    console.log(divisors)
    if (divisors.length % 2 == 0) {
        let result = new Array(divisors[divisors.length - 1], divisors[divisors.length - 2])
        return result
    }
    //       else if (divisors.length2 % 2 == 1) {

    //         }
    else {
        let result = new Array(divisors[divisors.length - 1], divisors[divisors.length - 1])
        return result
    }
}


/* 다른 사람의 풀이
1.2를 왜 빼주는거죠? 하아..s
function solution(brown, red) {
    var answer = [];
    for (var i = 3; i <= (brown+red)/i; i++) {
        var x = Math.floor((brown+red)/i);
        if( (x-2)*(i-2)=== red) {
            break;
        }
    }

    return [x,i];
}

2. 거듭제곱 Math.sqrt사용
function solution(brown, yellow) {
    const x = (brown - 12) * 0.5;
    const y = yellow - brown + 8;
    const i = ( 8 + x + Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    const j = ( 8 + x - Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    console.log(i)


    var answer = [i, j];
    return answer;
}

*/