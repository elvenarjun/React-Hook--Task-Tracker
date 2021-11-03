import React from 'react'
const tasks = [
    {
        id: 1,
        text: 'Doctors Appoitment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 7th at 4:30pm',
        reminder: false,
    }
]

const Tasks = () => {
    return (
       <>
       {tasks.map((task) => (
       <h3 key={task.id}>{task.text}</h3>
       ))}
       </>
    )
}

export default Tasks