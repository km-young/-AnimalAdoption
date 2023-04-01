import { useAppDispatch } from '@/hooks/reduxHooks';
import { useQuery } from 'react-query'
import  {getAnimals, getSido}  from './api/getAPI'
import {plusCounter, minusCounter} from '../redux/slice/counterSlice';
import {setSido} from '@/redux/slice/apiSidoSlice';


export default function Home() {
  const dispatch = useAppDispatch();

  const {
    data: sido,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getSido(),
    onSuccess: (data) => {
      dispatch(setSido(data.response.body.items.item));
    },
    cacheTime: 1000 * 60 * 60 * 24 * 365, // 1년
    staleTime: 1000 * 60 * 60 * 24 * 30, // 1달
  });

  const { data: animals } = useQuery({
    queryKey: ['animals'],
    queryFn: () => getAnimals(),
    onSuccess: (data) => console.log( '동물들: ' ,data.response.body)
    
  })


    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error occurred while fetching data</div>;
    }
  // console.log( 'data: ' ,sido);
  
  return (
    <div>
      테스트를 시작합니다.
      <button onClick={() => dispatch(plusCounter(1))}>+1</button>
      <button onClick={() => dispatch(minusCounter(1))}>-1</button>
    </div>
  );
}
