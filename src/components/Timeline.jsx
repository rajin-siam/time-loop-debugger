import React from "react";
import Event from "./Event";
import { sampleEvents } from "../data/sampleEvents";
import EventForm from "./EventForm";
import toast from 'react-hot-toast';

const Timeline = () => {
    const [events, setEvents] = React.useState(sampleEvents);

    const [editingEventId, setEditingEventId] = React.useState(null);
    const [timeBranches, setTimeBranches] = React.useState([events]);
    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
        setTimeBranches([...timeBranches, [...events, newEvent]]);
    }

    const handleEditEvent = (eventId) => {
        setEditingEventId(eventId);
    }


    const handleDeleteEvent = (eventId) => {
        paradoxDetector(eventId)
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
        setTimeBranches([...timeBranches, updatedEvents]);
    }

    const handleUpdateEvent = (updatedEvent) => {
        paradoxDetector(updatedEvent.id);
        const updatedEvents = events.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
        setEditingEventId(null);
        setTimeBranches([...timeBranches, updatedEvents]);
    }

    const paradoxDetector = (eventId) => {
        if (eventId < events.length) {
            toast.error("❌ Paradox Detected: This event is required by future events.");
        }
    }

    const handleRewind = () => {
        if (timeBranches.length > 1) {
            const previousBranch = timeBranches[timeBranches.length - 2];
            setEvents(previousBranch);
            setTimeBranches(timeBranches.slice(0, -1));
            toast.success("⏪ Rewound to the previous event.");
        }
    }


    return (
        <section className="p-6 bg-gray-100 min-h-screen flex flex-col max-w-3/4 m-auto">
            <h2 className="text-2xl font-bold mb-4">
                Timeline
            </h2>
            <EventForm
                onAdd={handleAddEvent}
                eventToEdit={events.find(event => event.id === editingEventId)}
                onUpdate={handleUpdateEvent}
                eventList={events}
            />
            <div className="w-full flex items-center justify-center mb-4">
                <button
                    type="submit"
                    onClick={handleRewind}
                    disabled={timeBranches.length < 2}
                    className={`px-4 py-2 rounded text-white ${
                        timeBranches.length < 2
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-emerald-700 hover:bg-emerald-900"
                    }`}>
                    Rewind
                </button>
            </div>
            <div>
                {events.map(event => (
                    <Event
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        timestamp={event.timestamp}
                        description={event.description}
                        onDelete={handleDeleteEvent}
                        onEdit={handleEditEvent}
                    />))
                }
            </div>
        </section>
    )
}
export default Timeline;