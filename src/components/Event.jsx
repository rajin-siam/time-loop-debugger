import React from "react";
const Event = ({ id, name, timestamp, description, onDelete, onEdit }) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded p-6 mb-4 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm mb-2">Timestamp: {timestamp}</p>
                <p className="text-gray-800">{description}</p>

                <div className="flex gap-2 mt-3">
                    <button
                        onClick={() => onEdit(id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div style={{
                    width: "2px",
                    height: "32px",
                    borderLeft: "2px dotted #a0aec0",
                    margin: "8px 0"
                }} />
            </div>
        </div>

    );
}
export default Event;