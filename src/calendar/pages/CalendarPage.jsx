import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from '../';
import { localizer } from '../../helpers';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const { user } = useAuthStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);
    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465670',
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
    setActiveEvent(event);
  };

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

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
      <FabAddNew />
      <FabDelete />
    </>
  );
};
