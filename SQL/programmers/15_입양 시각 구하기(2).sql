-- 문제 설명
-- ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. A
-- NIMAL_OUTS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 
-- 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.

-- 보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 
-- 0시부터 23시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 
-- 이때 결과는 시간대 순으로 정렬해야 합니다.


-- 코드를 입력하세요
SET @HOUR = -1;
SELECT (@HOUR := @HOUR +1) AS HOUR,
    (SELECT COUNT(HOUR(DATETIME)) 
    FROM ANIMAL_OUTS 
    WHERE HOUR(DATETIME)=@HOUR) AS COUNT 
    FROM ANIMAL_OUTS
WHERE @HOUR < 23;

--group by 쓰면 count가 0인게 안나왔다
--0~6까지 데이터 생성
-- set 명령어로 특정값 할당
-- @HOUR 라는 변수에 -1 할당하고 22까지 +1 해줌
-- set사용시에는 = 사용하고 그 외에는 := 사용

