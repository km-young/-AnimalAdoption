import {useEffect} from 'react';
import {useAppSelector} from '@/hooks/reduxHooks';
import axios from 'axios';

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
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('30'); /**/
  queryParams +=
    '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/

  try {
    const response = await axios.get(
      BASE_URL + '/abandonmentPublic' + queryParams
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=cvnMv8cgAeE2uwWMvK5ob2xIU1WDuid241BV4MT%2FNd0UKX940%2Blhf%2F5lbZnOB%2BzQ%2FOEDpK11fhKlOrk6M33nag%3D%3D&neuter_yn=%5Bobject%20Object%5D&upkind=%5Bobject%20Object%5D&upr_cd=%5Bobject%20Object%5D&pageNo=1&numOfRows=30&_type=json

// http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=cvnMv8cgAeE2uwWMvK5ob2xIU1WDuid241BV4MT%2FNd0UKX940%2Blhf%2F5lbZnOB%2BzQ%2FOEDpK11fhKlOrk6M33nag%3D%3D&neuter_yn=%5Bobject%20Object%5D&upkind=%5Bobject%20Object%5D&upr_cd=%5Bobject%20Object%5D&pageNo=1&numOfRows=30&_type=json

// http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=cvnMv8cgAeE2uwWMvK5ob2xIU1WDuid241BV4MT%2FNd0UKX940%2Blhf%2F5lbZnOB%2BzQ%2FOEDpK11fhKlOrk6M33nag%3D%3D&neuter_yn=%5Bobject%20Object%5D&upkind=%5Bobject%20Object%5D&upr_cd=%5Bobject%20Object%5D&pageNo=1&numOfRows=30&_type=json

// http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=cvnMv8cgAeE2uwWMvK5ob2xIU1WDuid241BV4MT%2FNd0UKX940%2Blhf%2F5lbZnOB%2BzQ%2FOEDpK11fhKlOrk6M33nag%3D%3D&neuter_yn=Y&upkind=417000&upr_cd=6110000&pageNo=1&numOfRows=30&_type=json
