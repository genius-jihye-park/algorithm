# 문제 3052
# 나머지
# 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다.
# 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

# 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
# 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
# 9월 9일


# 수도코드
# 1. n으로 빈 배열 만들기
# 2. 수 10개 입력받아 42의 나머지 반복
# 3. 나머지 값을 n배열에 append 해준다
# 4. set 함수로 중복제거
# 5. len으로 길이 출력

n = []

for _ in range(10):
    a = int(input())
    b = a % 42
    n.append(b)

s = set(n)
print(len(s))
