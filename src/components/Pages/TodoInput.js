import React from 'react';
import { GoDiffAdded } from 'react-icons/go';

const TodoInput = () => {
    return (
        <div className=''>
            <div className='flex items-center gap-2'>
                <input className='border rounded-lg px-2 py-1' type="text" name="task" id="task" placeholder='Add task' />
                <button className=''><GoDiffAdded className='text-3xl text-green-300 hover:text-green-600'></GoDiffAdded> </button>
            </div>
        </div>
    );
};

export default TodoInput;