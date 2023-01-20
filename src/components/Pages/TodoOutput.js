import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Task from './Task';

const TodoOutput = ({ todoData, isLoading, refetch }) => {

    const handleDelete = id => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('Deleted Successfully')
            })
    }

    const handleDeleteAll = () => {

        fetch(`http://localhost:5000/tasks`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('All Data Deleted Successfully')
            })
    }



    return (
        <div className='mt-5'>
            <h4 className='font-mono pb-4 text-2xl'>All Tasks</h4>
            <div>
                {
                    todoData?.map(task => <Task
                        key={task._id}
                        task={task}
                        handleDelete={handleDelete}
                    ></Task>)
                }
                <div className='flex justify-center gap-2 py-2'>
                    {
                        todoData.length === 0 ? ''
                            :
                            <>
                                <label
                                    htmlFor="deleteAllModal" className='btn btn-md btn-error rounded-md text-white'>Delete All</label>
                                <button className='btn btn-md btn-success rounded-md text-white'>All Completed</button>
                            </>

                    }
                </div>
            </div>
            {/* Delete all modal */}
            <input type="checkbox" id="deleteAllModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle backdrop-blur-md">
                <div className="modal-box bg-gray-50">
                    <h3 className="font-bold text-lg">Are you sure you want to delete all of your todo tasks? </h3>
                    <p className="py-4 text-base font-medium text-red-400">This action cannot be undone.</p>
                    <div className="modal-action">
                        <label
                            onClick={handleDeleteAll}
                            htmlFor="deleteAllModal"
                            className='btn btn-sm btn-error rounded-md text-white'>Confirm</label>
                        <label htmlFor="deleteAllModal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoOutput;