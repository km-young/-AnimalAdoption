import React, {useState} from 'react';
import moment from 'moment';
import style from './CalendarStrip.module.scss'
const CalendarStrip = () => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const firstDayOfMonth = moment().startOf('month').startOf('week');
  const lastDayOfMonth = moment().endOf('month').endOf('week');

  const daysInMonth = [];
  let day = firstDayOfMonth;
  while (day.isSameOrBefore(lastDayOfMonth, 'day')) {
    daysInMonth.push(day);
    day = day.clone().add(1, 'day');
  }

  const handleDateClick = (date: moment.Moment) => {
    setSelectedDate(date);
  };

  return (
    <div className={style.calendar}>
      <div className={style.header}>{moment().format('YYYY년 MM월')}</div>
      <div className={style.weekdays}>
        <div className={`${style.weekday} ${style.sunday}`}>일</div>
        <div className={style.weekday}>월</div>
        <div className={style.weekday}>화</div>
        <div className={style.weekday}>수</div>
        <div className={style.weekday}>목</div>
        <div className={style.weekday}>금</div>
        <div className={`${style.weekday} ${style.saturday}`}>토</div>
      </div>
      <div className={style.days}>
        {daysInMonth.map((day) => (
          <div
            key={day.format('YYYYMMDD')}
            className={`${style.day} ${
              day.month() === moment().month() ? '' : style['out-of-month']
            } ${day.isSame(selectedDate, 'day') ? style.selected : ''}`}
            onClick={() => handleDateClick(day)}
          >
            {day.format('D')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarStrip;
