/*문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 
예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, 
n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. 
n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, 
solution을 완성해 주세요.
*/

//유클리드 호제법 활용
//최대공약수 구하기
const gcd = (a, b) => {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

//최소공배수 구하기
const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

const solution = (arr) => {
    let answer = 1;
    for (let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }

    return answer;
};


/* 다른 사람의 풀이
function nlcm(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}
*/