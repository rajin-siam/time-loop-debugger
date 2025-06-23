import React from "react";
const AddEventForm = ({ onAdd }) => {
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
            id: Date.now(),
            name: newEvent.name,
            timestamp: Number(newEvent.timestamp),
            description: newEvent.description,
        }
        onAdd(formattedEvent);
        setNewEvent({
            name: '',
            timestamp: '',
            description: '',
        });

    }
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

            <input
                type="number"
                name="timestamp"
                value={newEvent.timestamp}
                onChange={handleChange}
                placeholder="Timestamp"
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
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add Event
            </button>
        </form>
    )
}
export default AddEventForm;