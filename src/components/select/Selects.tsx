import React, {useEffect, useState} from 'react';
import style from './Selects.module.scss';
import {useAppSelector, useAppDispatch} from '../../hooks/reduxHooks';
import {setNeuterYn} from '@/redux/slice/neuterYnSlice';
import { setSido } from '@/redux/slice/sidoSlice';
import { setKind } from '@/redux/slice/kindSlice';
const Selects = () => {
  const dispatch = useAppDispatch();
  const isNav = useAppSelector((state) => state.navModal.isOpen);
  const sidoAPI = useAppSelector((state) => state.sidoAPI.items);
  const [selectedSido, setSelectedSido] = useState('');

  const [selectedKind, setSelectedKind] = useState('');
  const [selectedneuterYn, setSelectedneuterYn] = useState('');

  const handleSidoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSido(event.target.value);
  };

  const handleKindChange = (
    event: React.ChangeEvent<HTMLSelectElement> | undefined
  ) => {
    if (event) {
      setSelectedKind(event.target.value);
    }
  };

  const handleNeuterYnChange = (
    event: React.ChangeEvent<HTMLSelectElement> | undefined
  ) => {
    if (event) {
      setSelectedneuterYn(event.target.value);
    }
  };

  useEffect(() => {
    dispatch(setSido(selectedSido));
  }, [dispatch,selectedSido]);

  useEffect(() => {
    dispatch(setKind(selectedKind));
  }, [dispatch, selectedKind]);

  useEffect(() => {
    dispatch(setNeuterYn(selectedneuterYn));
  }, [dispatch, selectedneuterYn]);

  return (
    <div className={style.container}>
      <div className={style.items}>
        <h3>지역</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '10rem'}}
            onChange={handleSidoChange}
            defaultValue='6110000'
          >
            {sidoAPI.map((item) => (
              <option key={item.orgCd} value={item.orgCd}>
                {item.orgdownNm}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={style.items}>
        <h3>품종</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            onChange={handleKindChange}
            defaultValue='417000'
          >
            <option value='417000'>강아지</option>
            <option value='422400'>고양이</option>
            <option value='429900'>기타</option>
          </select>
        </div>
      </div>

      <div className={style.items}>
        <h3>중성화</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='neuterYn'
            id='neuterYn-select'
            // style={{width: '35%'}}
            onChange={handleNeuterYnChange}
          >
            <option value=''>전체</option>
            <option value='Y'>중성화O</option>
            <option value='N'>중성화X</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Selects;
