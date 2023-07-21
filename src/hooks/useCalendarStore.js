import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO llegar al backend

    if (calendarEvent._id) {
      //Updating
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Creating a new one
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = async () => {
    //TODO llegar al backend

    dispatch(onDeleteEvent());
  };

  return {
    //Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};