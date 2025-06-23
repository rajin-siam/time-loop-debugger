import React from "react";
import EventList from "./EventList";
import { sampleEvents } from "../data/sampleEvents";
import AddEventForm from "./AddEventForm";
const Timeline = () => {
    const [events, setEvents] = React.useState(sampleEvents);

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    }
    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">
                Timeline
            </h2>
            <AddEventForm onAdd={handleAddEvent}/>
            
            <EventList events={events}/>
        </section>
    )
}
export default Timeline;