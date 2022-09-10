-- 문제 설명
-- ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 
-- ANIMAL_INS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 
-- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

-- ANIMAL_OUTS 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. 
-- ANIMAL_OUTS 테이블 구조는 다음과 같으며, 
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 
-- 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. 
-- ANIMAL_OUTS 테이블의 ANIMAL_ID는 ANIMAL_INS의 ANIMAL_ID의 외래 키입니다.

-- 관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 
-- 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 
-- 이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.

-- 코드를 입력하세요(Join)
SELECT A.ANIMAL_ID, A.NAME 
FROM ANIMAL_INS AS A JOIN ANIMAL_OUTS AS B 
WHERE A.ANIMAL_ID = B.ANIMAL_ID AND B.DATETIME <= A.DATETIME 
ORDER BY A.DATETIME