/* 문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
    let len = nums.length, answer = 0;

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}



//조합
const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    //3. getCombi([2,3,4],2) ->selectNumber 1아니니까 패스
    //7. getCombi([3,4],1)-> selectNum이 1이니까 
    // return [3,4].map((value) => [value]); // [[3],[4]] 리턴 
    //14.getCombi([4],1)-> selectNum이 1이니까 
    // return [4].map((value) => [value]); // [[4]] 리턴 
    //21..getCombi([],1)-> selectNum이 1이니까
    // return [].map((value) => [value]); // 암것도 없음 value가 없움 
    //27. getCombi([3,4],2) ->selectNumber 1아니니까 패스
    //31. getCombi([4],1)-> selectNum이 1이니까 리턴 [[4]] 
    //38. getCombi([],1) 리턴할거 없어 
    arr.forEach((element, index, array) => {
        //1. !맨처음 대순회1 arr.forEach((1, 0, [1,2,3,4])
        //4. !combinations(2.)의 처음 순회 arr.forEach((2, 0, [2,3,4]))
        //11. combinations(2.)의 두번째 순회 arr.forEach((3, 1, [2,3,4]))
        //18. combinations(2.)의 세번째 순회 arr.forEach((4, 2, [2,3,4])) 
        //25. !대순회2 arr.forEach((2, 1, [1,2,3,4]])
        //28. !combinations(26.)의 처음 순회 arr.forEach((3, 0, [3,4]))
        //35.  combinations(26.)의 두번째 순회 arr.forEach((4, 1, [3,4]))
        const rest = array.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        // 1-1 rest= [1,2,3,4].slice(0+1) // rest = [2,3,4]
        // 5. rest = [2,3,4].slice(0+1) // rest = [3,4]
        // 12. rest = [2,3,4].slice(1+1) // rest = [4]
        // 19. rest = [2,3,4].slice(2+1) // rest = [] 없음
        // 25-1 rest = [1,2,3,4].slice(1+1) // rest = [3,4]
        //29. rest = [3,4].slice(0+1) // rest = [4]
        //36. rest = [3,4].slice(1+1) // rest = [] 없음

        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        //2. 대순회1 combi=getcomb([2,3,4], 3-1); 재귀니까 function으로 올라가 3개 숫자 고르기로
        //6. combi=getcomb([3,4],2-1); 재귀니까 function으로 올라가
        //8. 드디어 (4.)의 답이 나옴 combinations = [[3],[4]] 
        // 아직 forEach 전부 안돌았음 arr.forEach((2, 0, [2,3,4]]) 상태
        //13. combi=getcomb([4], 2-1);  재귀니까 function으로 올라가
        //15. 드디어 (11.)의 답이 나옴 combinations = [[4]] 
        //20. combi=getcomb([], 2-1);  재귀니까 function으로 올라가
        //22. 드디어(18.)의 답이 나옴 combinations 은 비어있다
        //26. 대순회2 combi=getcomb([3,4], 3-1); 재귀니까 function으로 올라가 3개 숫자 고르기로
        //30. combi=getcomb([4],2-1); 재귀니까 function으로 올라가
        //32. 드디어 (28.)의 답이 나옴 combinations = [[4]] 
        //37. combi=getcomb([], 2-1);  재귀니까 function으로 올라가
        //39. 드디어(35.)의 답이 나옴 combinations 은 비어있다

        const attached = combinations.map((combination) => [element, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        //9. attached=[[3],[4]].map((combination)=> [element, ...combination]) 
        //                       combination은 [3] [4] => element=2 
        //                       ...combination하면 개별엘리먼트 선택되어서 3 4 
        // attached는 map으로 첫번째map [2 3], 두번째map [2 4]  
        //16.이하동문 (11.참조)element 3 combination은 [4]  그럼 [3,4]
        //23. 비어서 계산할게 없다
        //33.attached = [3,4] element가 3(28. 참조)combination은 [4] 그럼 [3,4]
        //40. 비어서 계산할게 없다
        results.push(...attached);
        //10. results.push  [2 3], [2,4] // 아직 순회 안끝남 forEach로
        //17. results.push [3,4]  현재 results 에는 [[2,3],[2,4],[3,4]] // 아직 순회 안끝남 forEach로
        //24 비어서 푸시할게 없다.  현재 results 에는 [[2,3],[2,4],[3,4]] //2.의 순회끝, 대순회A 안끝남 forEach로
        //34 results.push [3,4]  result에 [[3,4]] // 아직 순회 안끝남 forEach로
        //41 비어서 푸시할게 없다.  현재 results에는 [[3,4]]
    });

    return results; // 결과 담긴 results return
}

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);
  // => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

