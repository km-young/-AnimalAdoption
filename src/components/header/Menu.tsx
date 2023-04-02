import React from 'react'
import style from './Menu.module.scss'


const Menu = () => {
  return (
    <div
      className={style.container}

    >
      <div className={style.items}>
        <h3>지역</h3>
        <div className={style.item}>
          <select
            className={style.select}
            name='sido'
            id='sido-select'
            style={{width: '10rem'}}

          >
            <option value=''>전체</option>
           
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
            style={{width: '35%'}}

          >
            <option value=''>전체</option>
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
            style={{width: '35%'}}
          >
            <option value=''>전체</option>
            <option value='Y'>중성화O</option>
            <option value='N'>중성화X</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Menu