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

export const getAnimals = async () => {
  let queryParams =
    '?' + encodeURIComponent('serviceKey') + '=' + encoding; /*Service Key*/
  queryParams +=
    '&' + encodeURIComponent('bgnde') + '=' + encodeURIComponent('20100101'); /**/
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  queryParams +=
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
  queryParams +=
    '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
  const response = await axios.get(
    BASE_URL + '/abandonmentPublic' + queryParams
  );

  return response.data;
};
