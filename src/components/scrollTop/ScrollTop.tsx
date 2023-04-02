import style from './ScrollTop.module.scss'
import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isVisible = currentScrollY > 200;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <FaArrowCircleUp className={style.icon} onClick={handleOnClick} />
  )
}

export default ScrollTop