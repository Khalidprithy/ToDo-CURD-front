import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Task = ({ task, handleDelete }) => {

    return (
        <div className='flex justify-center items-center gap-2 py-2 hover:scale-100 duration-300 transition ease-in-out delay-250 hover:-translate-y-2'>
            <input
                className='h-8 w-8 accent-green-400'
                type="checkbox" name="todoCheck" id="" />
            <h4 className='border-2 p-1 rounded-md w-6/12 text-left text-xl hover:shadow-md'>{task.task}</h4>
            <AiFillEdit className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
            <AiFillDelete
                onClick={() => handleDelete(task._id)}
                className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
        </div>
    );
};

export default Task;