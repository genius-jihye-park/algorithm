# 문제 4673
# 셀프 넘버
# 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
# Python 3, PyPy, PyPy3: def solve(a: list) -> int
#   a: 합을 구해야 하는 정수 n개가 저장되어 있는 리스트
#  (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000)
#  리턴값: a에 포함되어 있는 정수 n개의 합 (정수)
# 9월 11일


# 수도코드
# 1. 함수 생성해서 숫자만큼 쪼개주고 그걸 합해줌
# 2. 셀프 넘거가 아닌 수가 들어갈 집ㅎㅂ
# 3. 집합에 들어갈 수를 찾아 넣고
# 4. 셀프 넘버 출력

# 함수 생성
def d(n):
    n = n + sum(map(int, str(n)))
    return n


# 셀프 넘버가 아닌 수,,
notSelfNum = set()

# notSelfNum 집합에 들어갈 수 찾아서 넣기
for i in range(1, 10001):
    notSelfNum.add(d(i))

# 셀프 넘버 출력
for j in range(1, 10001):
    if j not in notSelfNum:
        print(j)
