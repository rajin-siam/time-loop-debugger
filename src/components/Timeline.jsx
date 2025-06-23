import React from "react";
import EventList from "./EventList";
import { sampleEvents as events } from "../data/sampleEvents";

const Timeline = () => {
    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">
                Timeline
            </h2>
            <EventList events={events}/>
        </section>
    )
}
export default Timeline;