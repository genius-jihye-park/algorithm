/*문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, 
solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 
solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

function solution(n, m) {
    let answer = [];
    let big = 0;
    let small = 0;

    let num = n > m ? n : m;

    for (let i = 1; i < num; i++) {
        if (n % i == 0 && m % i == 0) {
            big = i;
        }
    }
    small = n * m / big;
    answer = [big, small];

    return answer;
}

/* 다른 사람의 풀이
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

->아니 이건 뭔 코드여,,, 
*/
