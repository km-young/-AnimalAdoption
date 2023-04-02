import {useEffect} from 'react';
import {useAppSelector} from '@/hooks/reduxHooks';
import axios from 'axios';
import {Animals, TotalCount} from '../../type';
const BASE_URL = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc'; /*URL*/
const encoding = process.env.NEXT_PUBLIC_ANIMALS_KEY;

export const getSido = async () => {
  let queryParams =
    '?' + encodeURIComponent('serviceKey') + '=' + encoding; /*Service Key*/
  queryParams +=
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('20'); /**/
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams +=
    '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/

  const response = await axios.get(BASE_URL + '/sido' + queryParams);

  return response.data;
};

interface Sido {
  sido: string;
}
interface Kind {
  kind: string;
}
interface NeuterYn {
  neuterYn: string;
}

export const getAnimals = async (
  sido: Sido,
  kind: Kind,
  neuterYn: NeuterYn
) => {
  const resultSido = sido.sido;
  const resultKind = kind.kind;
  const resultNeuterYn = neuterYn.neuterYn;

  let queryParams =
    '?' + encodeURIComponent('serviceKey') + '=' + encoding; /*Service Key*/

  if (resultNeuterYn) {
    queryParams +=
      '&' +
      encodeURIComponent('neuter_yn') +
      '=' +
      encodeURIComponent(resultNeuterYn);
  }

  if (resultKind) {
    queryParams +=
      '&' + encodeURIComponent('upkind') + '=' + encodeURIComponent(resultKind);
  }

  if (resultSido) {
    queryParams +=
      '&' + encodeURIComponent('upr_cd') + '=' + encodeURIComponent(resultSido);
  }
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/

  queryParams +=
    '&' +
    encodeURIComponent('numOfRows') +
    '=' +
    encodeURIComponent('100'); /**/

  queryParams +=
    '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/

  const response = await axios.get(
    BASE_URL + '/abandonmentPublic' + queryParams
  );
  console.log('response.data: ', response.data);

  return response.data;
};


export const postLikeData = async (like: Animals) => {
  const response = await axios.post(
    'http://localhost:4000/likesData',
    like
  );
  return response.data;
}

export const deleteLikeData = async (desertionNo: string) => {
  return await axios.delete(`http://localhost:4000/likesData/${desertionNo}`);
};