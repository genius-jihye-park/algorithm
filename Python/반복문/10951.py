# 문제 10951
# A+B - 4
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 8월 29일

# 수도코드
# 1. 테스트케이스 개수가 정해지지 않았다. for문 사용 못함
# 2. while문으로 입력받다가 입력이 없으면 출력 멈추기

while True:
    try:
        A, B = map(int, input().split())
    except:
        break
    print(A + B)
