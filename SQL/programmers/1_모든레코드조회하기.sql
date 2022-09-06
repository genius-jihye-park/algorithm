/* 문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

NAME	TYPE	NULLABLE
ANIMAL_ID	VARCHAR(N)	FALSE
ANIMAL_TYPE	VARCHAR(N)	FALSE
DATETIME	DATETIME	FALSE
INTAKE_CONDITION	VARCHAR(N)	FALSE
NAME	VARCHAR(N)	TRUE
SEX_UPON_INTAKE	VARCHAR(N)	FALSE
동물 보호소에 들어온 모든 동물의 정보를 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요. SQL을 실행하면 다음과 같이 출력되어야 합니다.

ANIMAL_ID	ANIMAL_TYPE	DATETIME	INTAKE_CONDITION	NAME	SEX_UPON_INTAKE
A349996	Cat	2018-01-22 14:32:00	Normal	Sugar	Neutered Male
A350276	Cat	2017-08-13 13:50:00	Normal	Jewel	Spayed Female
A350375	Cat	2017-03-06 15:01:00	Normal	Meo	Neutered Male
A352555	Dog	2014-08-08 04:20:00	Normal	Harley	Spayed Female
..이하 생략
*/

-- 나의 정답

SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID

-- GROUP BY 사용도 가능하다. 하지만 성능을 위해 ORDER BY 명령이 자동으로 삭제됌!
SELECT animal.*
FROM (
    SELECT *
    FROM ANIMAL_INS
    ORDER BY ANIMAL_INS.ANIMAL_ID
) AS animal
GROUP BY animal.ANIMAL_ID;

-- 따라서 서브쿼리 내의 ORDER BY 명령이 정상적으로 작동하게 하기 위해 아래와 같이 LIMIT 키워드를 사용하여 LIMIT 키워드의 최댓값으로 제한해준다.
SELECT animal.*
FROM (
    SELECT *
    FROM ANIMAL_INS
    ORDER BY ANIMAL_INS.ANIMAL_ID
    LIMIT 18446744073709551615
) AS animal
GROUP BY animal.ANIMAL_ID;