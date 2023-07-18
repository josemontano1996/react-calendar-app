import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';

import { CalendarEvent, CalendarModal, NavBar } from '../';
import { localizer } from '../../helpers';
import { useUiStore } from '../../hooks/useUiStore';

const events = [
  {
    title: 'Boss birthday',
    notes: 'Must buy the cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Josema',
    },
  },
];

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return { style };
  };

  const onDoubleClick = (event) => {
    /*  console.log({ doubleClick: event }); */
    openDateModal();
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
  };

  return (
    <>
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
    </>
  );
};
