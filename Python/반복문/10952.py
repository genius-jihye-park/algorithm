# 문제 10952
# A+B - 5
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 8월 29일

# 수도코드
# 1. 테스트케이스 개수가 정해지지 않았다. for문 사용 못함
# 2. while문으로 입력받다가 입력이 없으면 출력 멈추기
# 3. 마지막 테스트 케이스가 A=0 B=0 이면 브레이키~

while True:
    A, B = map(int, input().split())
    if A == 0 and B == 0:
        break
    print(A + B)
