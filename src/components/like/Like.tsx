import style from './Like.module.scss';
import {AiFillHeart} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import {useMutation} from 'react-query';
import {Animals} from '../../../type';
import {postLikeData, deleteLikeData} from '@/api/getAPI';

interface LikeProps {
  item: Animals;
}

interface Article {
  desertionNo: string;
  like: boolean;
}

const getArticlesFromLocalStorage = (): Article[] => {
  const articles = localStorage.getItem('articles');
  if (articles) {
    return JSON.parse(articles);
  }
  return [];
};

const Like = ({item}: LikeProps) => {
  const [isLike, setIsLike] = useState(false);
  const handleLike = (desertionNo: string) => {
    setIsLike(!isLike);
    if (isLike) {
      localStorage.removeItem(desertionNo);
      deleteLike(desertionNo);
    } else {
      localStorage.setItem(`${desertionNo}`, desertionNo);
      postLike({...item, id: desertionNo});
    }
  };

  const {mutate: postLike} = useMutation((like: Animals) => postLikeData(like));

  const {mutate: deleteLike} = useMutation((desertionNo: string) =>
    deleteLikeData(desertionNo)
  );

  useEffect(() => {}, [isLike]);

  return (
    <>
      <AiFillHeart
        color={isLike ? 'red' : 'gray'}
        onClick={() => handleLike(item.desertionNo)}
        className={style.icon}
      />
    </>
  );
};

export default Like;
