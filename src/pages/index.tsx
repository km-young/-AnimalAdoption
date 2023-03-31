import { useQuery } from 'react-query'
import  {getAnimals, getSido}  from './api/getAPI'


export default function Home() {

  const {
    data: sido,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getSido(),
    onSuccess: (data) => console.log('data: ', data.response.body.items.item),
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
    </div>
  );
}
