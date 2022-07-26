import React, { useEffect } from 'react';
import { useState } from 'react';
import Task from './Task';

const TodoOutput = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className='mt-5'>
            <h4 className='font-mono pb-4 text-2xl'>All Tasks</h4>
            <div>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                    ></Task>)
                }
                <div className='flex justify-center gap-2 py-2'>
                    <button className='btn btn-md btn-error rounded-md'>Delete All</button>
                    <button className='btn btn-md btn-success rounded-md'>All Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoOutput;