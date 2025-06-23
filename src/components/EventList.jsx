import React from "react";
import Event from "./Event";
const EventList = ({events}) => {
    return (
        <div>
            <h3>Event List Componenent</h3>
            <p>This will display all Event</p>
            <p>Event Components Are below</p>
            {events.map(event => (
                <Event
                    key={event.id}
                    name={event.name}
                    timestamp={event.timestamp}
                    description={event.description}
                />))}
        </div>
    )
}
export default EventList;