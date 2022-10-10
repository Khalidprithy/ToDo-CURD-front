import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Task = ({ task }) => {

    const [tasks, setTasks] = useState([]);
    const { id } = task._id;

    const handleDelete = id => {
        fetch(`http://localhost:5000/tasks${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = tasks.filter(task => task._id !== id);
                setTasks(remaining);
                toast.success('Deleted Successfully')
            })
    }

    return (
        <div className='flex justify-center items-center gap-2 py-2 hover:scale-105 duration-300 transition ease-in-out delay-250 hover:-translate-y-1'>
            <input
                className='h-14 w-14 accent-green-400'
                type="checkbox" name="todoCheck" id="" />
            <h4 className='border-2 p-1 rounded-md w-6/12 text-left text-2xl h-14'>{task.task}</h4>
            <AiFillEdit className='text-6xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
            <AiFillDelete
                onClick={() => handleDelete(id)}
                className='text-6xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
        </div>
    );
};

export default Task;