import React from 'react';
import toast from 'react-hot-toast';



const TodoInput = () => {

    const handleTask = event => {
        event.preventDefault()
        const task = event.target.task.value;
        const tasks = { task }

        fetch('http://localhost:5000/tasks', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Task added")
            })

    }
    return (
        <div className=''>
            <form
                onSubmit={handleTask}
            >
                <div className='flex items-center justify-center gap-2 w-full'>
                    <input className='border rounded-sm px-2 py-1 focus:outline-red-500 w-2/3 md:w-1/3' type="text" name="task" id="task" placeholder='Add task' />
                    <input className='btn btn-xs' type="submit" value="add" />
                </div>
            </form>
        </div>
    );
};

export default TodoInput;