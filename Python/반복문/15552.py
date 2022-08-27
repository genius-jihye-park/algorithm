# 문제 15552
# 빠른 A+B
# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
# 시간 제한 1초
# 빠른 A+B를 위해 Python의 경우 input 대신 sys.stdin.readline을 사용하라고 권고
# 8월 26일

# 수도코드
# 1. import sys해서 sys.stdin.readline 사용
# 2. 사용자가 개수 적을 변수 지정
# 3. for 문으로 map 돌려서 sys.stdin.readline 사용하여 print

import sys

n = int(sys.stdin.readline())
for i in range(0, n):
    a, b = map(int, sys.stdin.readline().split())
    print(a+b)
