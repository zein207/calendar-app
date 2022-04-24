import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'

import { Navbar } from '../ui/Navbar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-messages'

moment.locale('es');


const localizer = momentLocalizer(moment);

const myEventsList = [{
  title: 'Cumpleaños del jefe',
  start: moment().toDate(),
  end: moment().add(2, 'hour').toDate(),
  bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  };

  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ myEventsList }
        startAccessor="start"
        endAccessor="end"
        messages={ messages }
        eventPropGetter={ eventStyleGetter }
      />
    </div>
  )
}
