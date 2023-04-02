import {useAppDispatch, useAppSelector} from '@/hooks/reduxHooks';
import {useQuery} from 'react-query';
import {getAnimals, getSido} from '../api/getAPI';
import {setSidoAPI} from '@/redux/slice/apiSidoSlice';
import style from './index.module.scss';
import Image from 'next/image';
import {Animals} from '../../type';
import {v4 as uuidv4} from 'uuid';
import Selects from '@/components/select/Selects';
import ScrollTop from '@/components/scrollTop/ScrollTop';
import { useState } from 'react';
import Like from '@/components/like/Like';
export default function Home() {
  const dispatch = useAppDispatch();
  const selectSido = useAppSelector((state) => state.sido);
  const selectKind = useAppSelector((state) => state.kind);
  const selectNeuterYn = useAppSelector((state) => state.neuterYn);



  const {
    data: sido,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getSido(),
    onSuccess: (data) => dispatch(setSidoAPI(data.response.body.items.item)),
    cacheTime: 1000 * 60 * 60 * 24 * 365, // 1년
    staleTime: 1000 * 60 * 60 * 24 * 30, // 1달
  });

  const {data: animals} = useQuery({
    queryKey: ['animals', selectSido, selectKind, selectNeuterYn],
    queryFn: () => getAnimals(selectSido, selectKind, selectNeuterYn),

    cacheTime: 1000 * 60 * 60 * 24, // 1일
    staleTime: 1000 * 60 * 60 * 24, // 1일
  });

  const sortedData = animals?.response?.body?.items?.item?.sort(
    (a: Animals, b: Animals) => {
      const aDate = Number(a.noticeEdt);
      const bDate = Number(b.noticeEdt);
      return aDate - bDate;
    }
  );

  const removeKind = (str: string) => {
    const animalKinds = ['[개] ', '[고양이] ', '[기타축종]'];
    for (const animalKind of animalKinds) {
      str = str.replace(animalKind, '');
    }
    return str;
  };

  const removeParentheses = (str: string) => {
    const animalIsAge = str.includes('미만');
    if (animalIsAge) {
      // 미만이라는 단어가 있으면
      return '60일 미만';
    } else {
      return str.replace(/[()]/g, '');
    }
  };

  const getGenderString = (gender: string) => {
    return gender === 'M' ? '남' : '여';
  };

  const neuterText = (neuter: string) => {
    switch (neuter) {
      case 'Y':
        return 'O';
      case 'N':
        return 'X';
      default:
        return '확인되지 않음';
    }
  };

  const getDaysLeft = (date: string) => {
    // 입력받은 날짜 문자열을 Date 객체로 변환합니다.
    const targetDate = new Date(
      parseInt(date.slice(0, 4)),
      parseInt(date.slice(4, 6)) - 1,
      parseInt(date.slice(6, 8))
    );

    // 현재 시각을 가져옵니다.
    const now = new Date();

    // 남은 시간을 계산합니다.
    const diff = targetDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const truncate = (str: string): string => {
    if (str.length > 13) {
      return str.substring(0, 13) + '...';
    } else {
      return str;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className={style.container}>
      <Selects />
      {sortedData?.map((item: Animals) => {
        const uuid = uuidv4();
        const daysLeft = getDaysLeft(item.noticeEdt);

        const daysLeftStyle = {
          backgroundColor:
            daysLeft < 0 ? '#db4e16' : daysLeft < 10 ? '#ff9971' : '#50b77d',
          padding: '0.3rem 0.5rem',
          borderRadius: '30px',
          color: '#fff',
          display: 'inline',
        };

        return (
          <div className={style.item_box} key={uuid}>
            <Image
              src={item.popfile}
              alt={item.kindCd}
              width={150}
              height={150}
            />

            <div className={style.content}>
              <Like item={item} />
              <div style={daysLeftStyle}>
                <strong>
                  {daysLeft > 0 ? `공고 마감 ${daysLeft}일 전` : `공고 마감`}
                </strong>
              </div>
              <div className={style.position}>
                <div className={style.flex}>
                  <h4>품종:</h4>
                  <p>{removeKind(item.kindCd)}</p>
                </div>
                <div className={style.flex}>
                  <h4>나이:</h4>
                  <p>{removeParentheses(item.age)}</p>
                </div>
                <div className={style.flex}>
                  <h4>몸무게:</h4>
                  <p>{removeParentheses(item.weight)}</p>
                </div>
                <div className={style.flex}>
                  <h4>성별:</h4>
                  <p>{getGenderString(item.sexCd)}</p>
                </div>
                <div className={style.flex}>
                  <h4>중성화:</h4>
                  <p>{neuterText(item.neuterYn)}</p>
                </div>
                <div className={style.flex}>
                  <h4>발견장소:</h4>
                  <p>{truncate(item.happenPlace)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ScrollTop />
    </div>
  );
}

// age: '2019(년생)';
// careAddr: '세종특별자치시  전동면 미륵당1길 188 (전동면) ';
// careNm: '세종유기동물보호센터';
// careTel: '010-4435-3720';
// chargeNm: '동물복지담당';
// colorCd: '베이지색';
// desertionNo: '469569202300219';
// filename: 'http://www.animal.go.kr/files/shelter/2023/03/202304012104101_s.jpg';
// happenDt: '20230401';
// happenPlace: '금남면 용포중앙1길 24-1';
// kindCd: '[개] 골든 리트리버';
// neuterYn: 'U';
// noticeEdt: '20230411';
// noticeNo: '세종-세종-2023-00111';
// noticeSdt: '20230401';
// officetel: '044-300-7616';
// orgNm: '세종특별자치시';
// popfile: 'http://www.animal.go.kr/files/shelter/2023/03/202304012104101.jpg';
// processState: '보호중';
// sexCd: 'F';
// specialMark: '심장사상충 음성, 금남119로부터 인계받음';
// weight: '30(Kg)';
