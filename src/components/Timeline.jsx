import React from "react";
import Event from "./Event";
import { sampleEvents} from "../data/sampleEvents";
import EventForm from "./EventForm";

const Timeline = () => {
    const [events, setEvents] = React.useState(sampleEvents);

    const [editingEventId, setEditingEventId] = React.useState(null);

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    }

    const handleEditEvent = (eventId) => {
        setEditingEventId(eventId);
    }


    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
    }


    const handleUpdateEvent = (updatedEvent) => {
        const updatedEvents = events.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
        setEditingEventId(null);
    }
    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">
                Timeline
            </h2>
            <EventForm
                onAdd={handleAddEvent}
                eventToEdit={events.find(event => event.id === editingEventId)}
                onUpdate={handleUpdateEvent}
            />

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
                    />))}
            </div>
        </section>
    )
}
export default Timeline;