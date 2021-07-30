import React from 'react'


const InstructorData = (props) => {
    return (
        <div>
            <h2>Class Name:{class_name}</h2>
            <p>Location:{class_location}</p>
            <p>Current number of registered attendees:{registered}</p>
            <p>Max Class Size:{max_size}</p>
            <p>Class Type:{class_type}</p>
            <p>Time Duration:{start_time}</p>
            <p>Intensity Level:{intensity_name}</p>
        </div>

      
    )
}

export default InstructorData

