import React, { useState } from 'react';
import Calendar from 'react-calendar';
import EventModal from '../EventModal';
import 'react-calendar/dist/Calendar.css';
import './style.css';

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

 
  const scheduledEvents = {
    '2024-10-29': [{ title: 'Reunião com cliente', time: '14:00' }],
    '2024-10-30': [{ title: 'Evento de Marketing', time: '16:00' }],
   
  };

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setSelectedDate(scheduledEvents[formattedDate] || []);
    setModalOpen(true);
  };

  return (
    <div className="calendario-container">
      <Calendar
        onClickDay={handleDateClick}
        className="react-calendar"
      />
      {modalOpen && (
        <EventModal
          events={selectedDate}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Calendario;
