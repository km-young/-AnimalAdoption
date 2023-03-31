import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        eventContent={renderEventContent}
      />
    );
  }
}

function renderEventContent(eventInfo:any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
