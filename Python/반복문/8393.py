# 문제 8393
# 합
# n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
# 8월 25일

a = int(input())
sum = 0
for i in range(a+1):
    sum = sum + i
print(sum)

# 수도코드
# 1.  숫자를 입력받음
# 2. 반복 a 까지 (그래서 +1해줌)
# 3. sum변수에 넣어준다.
