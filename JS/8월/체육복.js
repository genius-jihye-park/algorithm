/*문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 
바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
    //1. 본인이 잃어버리고 본인이 여유분이 있는 경우를 먼저 판단 -> 다른사람을 빌려줄수없으므로
    for (let i = 0; i < reserve.length; i++) {
        let haslost = lost.some((el) => el == reserve[i])
        if (haslost) {
            lost = lost.filter((el) => el !== reserve[i])
            reserve[i] = 0;
        }
    }
    reserve = reserve.filter(v => v)

    //2. 양 옆 사람중 여유분이 있는지 판단.
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if (Math.abs(reserve[i] - lost[j]) <= 1) {
                reserve[i] = 0
                lost[j] = 0
                break;
            }
        }

    }
    return n - lost.filter(v => v).length
}


//초기코드
function solution(n, lost, reserve) {
    //n 전체학생의 수
    //lost 도난당한 학생들의 번호가 담긴 배열
    //reserve 여벌 체육복 가져온 학생 번호
    let lostN = lost.length //잃어버린 학생수
    let resN = reserve.length //빌려줄 학생수
    let temp = 0;
    if (lostN <= resN) { //빌려줄 학생수가 같거나 더 많니?
        for (let i = 0; i < lostN; i++) {
            if (lost[i] == reserve[i] + 1 || lost[i] == reserve[i] - 1) {
                temp++
                continue;
            }
        } return n - lostN + temp >= n ? n : n - lostN + temp
    } else {
        for (let i = 0; i < resN; i++) {
            if (lost[i] == reserve[i] + 1 || lost[i] == reserve[i] - 1) {
                temp++
                continue;
            }
        } return n - lostN + temp > n ? n : n - lostN + temp
    }
}
//간과한게 많았다

