/*문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 
구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 
2번째 사람과 4번째 사람은 같이 탈 수 있지만 
1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 
구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 
모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
*/


function solution(people, limit) {
    let answer = 0
    people.sort((a, b) => b - a)
    for (i = 0, j = people.length - 1; i <= j; i++, answer++) {
        if (people[i] + people[j] <= limit) j--
    }
    return answer;
}

// 일단 큰거에서 작은순 배열
// 가장 몸무게 큰사람 + 가장 작은 사람이 limit보다 같거나 작아야 같이 탈 수 있다.
//점점 합한게 안쪽으로 들어오고
//j는 배열의 끝


/* 초기코드
function solution(people, limit) {
    let answer = people.length
    for(let i =0 ; i < people.length-1; i++){
        for(let j =i+1; j<people.length; j++){
            if(people[i]+people[j] == limit){
                answer -=1
            break;
            }
        } 
        
    }
    return answer;
}
*/