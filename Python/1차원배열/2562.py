# 문제 2562
# 최댓값
# 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
# 9월 8일

# 수도코드
# 1. list 선언.
# 2. for문으로 9번 반복해서 list에 input 받은 걸 추가시킨다
# 3. list의 최댓값을 찾아 출력하고
# 4. 최댓값의 인덱스도 출력한다 대신 +1을 해줘야함 인덱스는 0부터 시작이자너

list = []
for i in range(9):
    list.append(int(input()))
print(max(list))
print(list.index(max(list))+1)


# append() : array.append(x) 형태로 사용. js의 push 같은거. 그 자체로 추가된다.
# extend() : array.extend(iterable) . iterable 자료형의 항목 각각을 array끝에 하나씩 추가
#            append()랑 다른 점은 iterable 자료형만 올 수 있음!
# insert(): array.insert(i,x). array의 원하는 위치 i(인덱스)앞에 추가할 x를 삽입할 수 있다.
#           iterable 자료형이더라도 추가할 값 x는 객체로 추가된다
