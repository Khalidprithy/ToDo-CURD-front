import React from 'react';
import { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Loading from '../Shared/Loading';

const Task = ({ task, handleDelete, refetch, isLoading, setUpdateTodo, setTempUpdateTodo }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleEditOne = async () => {

        const updatedProduct = {
            task: task.name,
            status: isChecked
        }
        const url = `https://todo-server-ze08.onrender.com/task/${task._id}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        await refetch();
    }

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center gap-2 py-2 hover:scale-100 duration-300 transform 0.3s transition ease-in-out delay-250 hover:-translate-y-2'>

            <input
                checked={task.status}
                onChange={() => {
                    setIsChecked(!isChecked)
                    handleEditOne()
                }}
                className='h-8 w-8 accent-teal-400'
                type="checkbox" name="todoCheck" id="" />
            <h4 className={`border-2 p-1 rounded-md w-6/12 text-left text-xl hover:shadow-md ${task?.status ? 'text-teal-400 blur-[1px]' : 'text-gray-800 dark:text-gray-100'}`}>{task.task}</h4>
            {
                !task?.status &&
                <label htmlFor="editModal" ><AiFillEdit
                    onClick={() => {
                        setUpdateTodo(task)
                        setTempUpdateTodo(task)
                    }}
                    className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md hover:rounded-full'></AiFillEdit></label>
            }

            <AiFillDelete
                onClick={() => handleDelete(task._id)}
                className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md hover:rounded-full'></AiFillDelete>
            {/* <EditModal /> */}
        </div>
    );
};

export default Task;