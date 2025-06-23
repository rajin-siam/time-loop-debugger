import React from "react";
const Event = ({name, timestamp, description}) => {
    return (
        <div className="bg-white shadow-md rounded p-4 mb-4 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm mb-2">Timestamp: {timestamp}</p>
            <p className="text-gray-800">{description}</p>
        </div>
    )
}
export default Event;