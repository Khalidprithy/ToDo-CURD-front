import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const TodoOutput = () => {
    return (
        <div className='mt-5'>
            <h4 className='font-mono pb-4'>All Tasks</h4>
            <div>
                <div className='flex justify-center items-center gap-2 py-2 hover:scale-105 duration-300 transition ease-in-out delay-250 hover:-translate-y-1'>
                    <input
                        className='h-8 w-8 accent-green-400'
                        type="checkbox" name="todoCheck" id="" />
                    <h4 className='border-2 p-1 rounded-md w-36 text-left'>Go to Gym</h4>
                    <AiFillEdit className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
                    <AiFillDelete className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
                </div>
                <div className='flex justify-center items-center gap-2 py-2 hover:scale-105 duration-300 transition ease-in-out delay-150 hover:-translate-y-1'>
                    <input
                        className='h-8 w-8 accent-green-400'
                        type="checkbox" name="todoCheck" id="" />
                    <h4 className='border-2 p-1 rounded-md w-36 text-left'>Study 1 hour</h4>
                    <AiFillEdit className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
                    <AiFillDelete className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
                </div>
                <div className='flex justify-center items-center gap-2 py-2 hover:scale-105 duration-300 transition ease-in-out delay-150 hover:-translate-y-1'>
                    <input
                        className='h-8 w-8 accent-green-400'
                        type="checkbox" name="todoCheck" id="" />
                    <h4 className='border-2 p-1 rounded-md w-36 text-left'>Meeting at Office</h4>
                    <AiFillEdit className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
                    <AiFillDelete className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
                </div>
                <div className='flex justify-center items-center gap-2 py-2 hover:scale-105 duration-300 transition ease-in-out delay-150 hover:-translate-y-1'>
                    <input
                        className='h-8 w-8 accent-green-400'
                        type="checkbox" name="todoCheck" id="" />
                    <h4 className='border-2 p-1 rounded-md w-36 text-left'>Meet Tom Hardy</h4>
                    <AiFillEdit className='text-4xl p-1 text-blue-400 hover:text-blue-600 border rounded-md'></AiFillEdit>
                    <AiFillDelete className='text-4xl p-1 text-red-400 hover:text-red-600 border rounded-md'></AiFillDelete>
                </div>
                <div className='flex justify-center gap-2 py-2'>
                    <button className='btn btn-xs btn-error rounded-md'>Delete All</button>
                    <button className='btn btn-xs btn-success rounded-md'>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoOutput;