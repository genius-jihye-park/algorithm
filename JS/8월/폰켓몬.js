// 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 
// 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성

function solution(nums) {
    let answer = new Set(nums); //중복제거
    let answer2 = [...answer]; //<- 문제점: 배열로 바꿔줌
    let arr = nums.length / 2
    if (answer2.length > arr) {
        return arr

    } return answer2.length;

}

// 문제점
// 일단 New set(nums)했는데 자꾸 Undefined가 떠서 
// 공식문서를 다시 읽어보니 정확히 일치하는 값을 찾으려면 
// set을 Array로 변환하기 위해 전개 연산자 사용함.

// 수도코드
// 1. 최대 가질수 있는 종류의 수는 nums.length /2  
// 2. 중복제거하기 위해 Set함수를 사용
// 3. 만약 종류/2보다 set.length가 크면 종류/2 반환
// 4. 아니라면 set의 length반환
