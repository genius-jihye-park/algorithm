# 문제 4344
# 평균은 넘겠지
# 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다.
# 당신은 그들에게 슬픈 진실을 알려줘야 한다.
# 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
# 9월 10일


# 수도코드
# 1. input으로 테스트케이스 입력받음
# 2. 케이스 갯수만큼 for문으로 반복
# 3. nums는 한줄마다 각 점수의 배열
# 4. avg는 평균! nums[1:] -> 인덱스 1번부터 끝까지한걸 sum으로 만들어서 nums[0]->사람수로 나눠줌
# 5. for문 돌려! score는 nums[1:]해서 nums list의 점수들
# 6. 만약 점수가 평균보다 더 크다면? cnt 카운트 올려줘라
# 7. 비율은? 카운트/사람수 * 100
# 8. 소수점 셋째 자리까지 출력이니까 f-string 활용


n = int(input())

for _ in range(n):
    nums = list(map(int, input().split()))
    avg = sum(nums[1:])/nums[0]
    cnt = 0
    for score in nums[1:]:
        if score > avg:
            cnt += 1
    rate = cnt/nums[0] * 100
    print(f'{rate:.3f}%')
