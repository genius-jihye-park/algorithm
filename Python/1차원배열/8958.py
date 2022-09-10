# 문제 8958
# OX퀴즈
# "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
# 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
# 예를 들어, 10번 문제의 점수는 3이 된다.
# "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
# OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
# 9월 10일


# 수도코드
# 1. input으로 테스트케이스 입력받기
# 2. for문으로 테스트케이스 반복
# 3. OX퀴즈 결과를 리스트형태로 입력받는다
# 4. 점수, 합계점수를 선언해주고
# 5. 다시 for문을 돌려서 만약 ox가 o라면
# 6. 점수를 +1 해줌 -> score += 1
# 7. 위에 score를 합계점수에 또 넣어줌(누적)
# 8. O이 아니라면  점수 다시 0점~


N = int(input())
for _ in range(N):
    OX_list = list(input())
    score = 0
    sum_score = 0
    for OX in OX_list:
        if OX == 'O':
            score += 1
            sum_score += score
        else:
            score = 0
    print(sum_score)
