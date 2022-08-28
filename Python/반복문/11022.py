# 문제 11022
# A + B - 8
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 8월 27일

import sys

T = int(sys.stdin.readline())
for i in range(1, T+1):
    a, b = map(int, sys.stdin.readline().split())
    print("Case #" + str(i) + ":", a, "+", b, "=", a + b)
