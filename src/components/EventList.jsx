import React from "react";
import Event from "./Event";
const EventList = ({events}) => {
    return (
        <div>
            {events.map(event => (
                <Event
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    timestamp={event.timestamp}
                    description={event.description}
                    onDelete={handleDeleteEvent}
                    onEdit={handleStartEvent}
                />))}
        </div>
    )
}
export default EventList;