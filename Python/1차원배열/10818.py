# 문제 10818
# 최소, 최대
# N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
# 9월 8일


# 수도코드
# 1. input으로 함수 입력받고 int로 정수형 선언
# 2. 배열을 공백으로 구별하여 나누고 map을통해 정수형으로 변환하고 그걸 리스트형태로 변환
# 3. max, min 함수 사용

N = int(input())
array = list(map(int, input().split()))
print(min(array), max(array))

# 근데 효율성이 좀 떨어진다

N = int(input())
array = list(map(int, input().split()))
array.sort()
print(array[0], array[-1])
