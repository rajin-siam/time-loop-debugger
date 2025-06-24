import React from "react";
const EventForm = ({ onAdd, eventToEdit, onUpdate, eventList }) => {
    const [newEvent, setNewEvent] = React.useState({
        name: '',
        timestamp: '',
        description: '',
    });


    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedEvent = {
            id: eventToEdit ? eventToEdit.id : Date.now(),
            name: newEvent.name,
            timestamp: Number(Date.now()),
            description: newEvent.description,
            children: eventToEdit ? eventToEdit.children : [eventList.length - 1],
        }

        if (eventToEdit) {
            onUpdate(formattedEvent);
        } else {
            onAdd(formattedEvent);
        }
        setNewEvent({
            name: '',
            timestamp: '',
            description: '',
        });

    }

    React.useEffect(() => {
        if (eventToEdit) {
            setNewEvent({
                name: eventToEdit.name,
                timestamp: eventToEdit.timestamp,
                description: eventToEdit.description,
            })
        }
    }, [eventToEdit])
    return (
        <form
            className="mb-6 bg-white p-4 rounded shadow"
            onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold mb-2">Add New Event</h3>
            <input
                type="text"
                name="name"
                value={newEvent.name}
                onChange={handleChange}
                placeholder="Event Name"
                className="block w-full border p-2 rounded mb-2"
                required
            />


            <textarea
                type="text"
                name="description"
                value={newEvent.description}
                onChange={handleChange}
                placeholder="Event Description"
                className="block w-full border p-2 rounded mb-2"
                rows={3}
                required
            />
            <button
                name="save"
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {eventToEdit ? "Update Event" : "Add Event"}
            </button>


        </form>
    )
}
export default EventForm;