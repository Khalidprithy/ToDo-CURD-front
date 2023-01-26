import React from 'react';
import toast from 'react-hot-toast';

const TodoInput = ({ refetch }) => {

    const handleTask = event => {
        event.preventDefault()
        const task = event.target.task.value;
        const tasks = {
            "task": task,
            "status": false,
        }
        fetch('https://todo-server-ze08.onrender.com/tasks', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success("Task added")
            })
        event.target.reset();

    }
    return (
        <div className=''>
            <h1 className='text-xl md:text-3xl font-bold m-1 md:m-6 font-mono'>Add your Tasks</h1>
            <form
                onSubmit={handleTask}
            >
                <div className='flex flex-col items-center justify-center gap-2 '>
                    <input className='border rounded-md px-4 py-1 focus:outline-red-500 w-2/3 md:w-6/12 h-12 mb-4' type="text" name="task" id="task" placeholder='Write your task here' maxlength="100" required />
                    <input className='btn btn-md w-4/12 md:w-2/12 bg-teal-500 hover:bg-teal-600 hover:shadow-md border-0 text-gray-50 hover:ease-in hover:rounded-full animate-bounce hover:animate-none transition duration-700 hover:duration-300 ease-in' type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
};

export default TodoInput;