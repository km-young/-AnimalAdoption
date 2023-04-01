import {useAppDispatch, useAppSelector} from '@/hooks/reduxHooks';
import {useQuery, useQueryClient} from 'react-query';
import {getAnimals, getSido} from './api/getAPI';
import {plusCounter, minusCounter} from '../redux/slice/counterSlice';
import {setSidoAPI} from '@/redux/slice/apiSidoSlice';
import style from './index.module.scss';
import Image from 'next/image';
import {Animals} from '../../type';
import {useEffect} from 'preact/hooks';
export default function Home() {
  const dispatch = useAppDispatch();

  const selectSido = useAppSelector((state) => state.sido);
  const selectKind = useAppSelector((state) => state.kind);
  const selectNeuterYn = useAppSelector((state) => state.neuterYn);

  const queryClient = useQueryClient();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div className={style.container}>
      {animals?.response?.body?.items?.item?.map((item: Animals) => {
        return (
          <>
            <div className={style.item_box}>
              <img
                src={item.popfile}
                alt={item.kindCd}
                width={150}
                height={150}
              />
              <div>
                <div className={style.flex}>
                  <h4>나이:</h4>
                  <p>{item.age}</p>
                </div>
                <div className={style.flex}>
                  <h4>몸무게:</h4>
                  <p>{item.weight}</p>
                </div>
                <div className={style.flex}>
                  <h4>견종:</h4>
                  <p>{item.kindCd}</p>
                </div>
                <div className={style.flex}>
                  <h4>성별:</h4>
                  <p>{item.sexCd}</p>
                </div>
                <div className={style.flex}>
                  <h4>중성화:</h4>
                  <p>{item.neuterYn}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
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
