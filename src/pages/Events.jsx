import { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([
  ]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "" });

  function handleAddEvent() {
    if (!newEvent.title || !newEvent.date || !newEvent.category) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", category: "" });
  }
  return (
    <div className="container">
      <h2>Events</h2>
    <div className="event-container">
      {/* Add New Event Form */}
      <input
        type="text"
        placeholder="Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <input
        type="date"
        value={newEvent.date}
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
      />
      <select
        value={newEvent.category}
        onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <div className="ae-button">
<button onClick={handleAddEvent}>Add Event</button>
      </div>
      {/* List of Events */}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.date} ({event.category})
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Events;
