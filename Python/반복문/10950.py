# 문제 109505
# A + B -3
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 8월 24일

t = int(input())

for i in range(t):
    A, B = map(int, input().split())
    print(A + B)
