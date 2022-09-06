// 10진수를 124진수로 변환시키기 (lv2)

// 수도코드
// 1의 자리는  1,2,4 반복
// n % 3 === 0 이라면 1의 자리는 4
// n % 3 === 1 이라면 1의 자리는 1
// n % 3 === 2 이라면 1의 자리는 2
// 몫과 나머지 활용하기
// Math.floor 사용하는 이유 = 소수점까지 나오기 때문


function solution(n) {
    let answer = '';

    while (n > 0) { // n이 0보다 클 때까지 계속 반복
        switch (n % 3) { //n을 나눈 나머지 값
            case 1:
                answer = "1" + answer;
                n = Math.floor(n / 3);
                break;
            case 2:
                answer = "2" + answer;
                n = Math.floor(n / 3);
                break;
            case 0:
                answer = "4" + answer;
                n = (n / 3) - 1;
                break;
        }
    }

    return answer;
}

// 만약 n이 10이라면?
// switch (10 % 3) ==== 1
// case 1로 들어가서 
// answer는 1이 되고 n은 3이 된다

// 다시 while 반복
// switch (3 % 3 ) ==== 0
// case 0으로 가서
// answer는 41이 되고 n은 0이 되어 break로 빠져 나오게 된다

// answer = 41


// 다른 사람의 풀이 

// function change124(n) {
//  return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// }
// 어떻게 이런 생각을..?  n-1로 배열의 자리를 구해서 앞에 몫과 합치다니.. 