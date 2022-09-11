# 문제 1065
# 한수
# 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
# 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
#  N이 주어졌을 때,
# 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
# 9월 11일


# 어렵다.. 해석찾아봄

def HANSU2(X):
    cnt = 0
    for num in range(1, X+1):
        if num < 100:
            cnt += 1
        else:
            num = str(num)
            if int(num[1]) - int(num[0]) == int(num[2]) - int(num[1]):
                cnt += 1
    return cnt


print(HANSU2(int(input())))
