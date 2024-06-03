import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-05-01' },
          { title: 'Event 2', date: '2023-05-02' },
        ]}
      />
    </div>
  );
}

export default Calendar;
