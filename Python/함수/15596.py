# 문제 15596
# 정수 N개의 합
# 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
# Python 3, PyPy, PyPy3: def solve(a: list) -> int
#   a: 합을 구해야 하는 정수 n개가 저장되어 있는 리스트
#  (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
#  리턴값: a에 포함되어 있는 정수 n개의 합 (정수)
# 9월 11일


# 수도코드
# 1. 함수를 정의한다
# 2. sum을 사용한 합계를 리턴

# 방법1
def solve(a):
    return sum(a)


# 방법 2
def solve(a):
    total = 0
    for i in a:
        total += a
    return total
