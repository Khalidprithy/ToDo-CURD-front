import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const EditModal = ({ updateTodo, tempUpdateTodo, setTempUpdateTodo, refetch }) => {

    const [changed, setChanged] = useState(false);
    console.log(tempUpdateTodo)

    const handleEditTodo = async () => {

        const url = `https://todo-server-ze08.onrender.com/task/${updateTodo._id}`;
        console.log(url)
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tempUpdateTodo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Updated')
            })
        await refetch();

    }

    return (
        <div>
            <input type="checkbox" id="editModal" className="modal-toggle" />
            <div className="modal backdrop-blur-md">
                <div className="modal-box relative bg-gray-50 dark:bg-gray-700">
                    <label htmlFor="editModal" className="btn btn-sm btn-circle hover:bg-red-400 border-0 absolute right-2 top-2">✕</label>
                    <textarea
                        className='text-gray-800  border rounded-md px-4 py-1 focus:outline-red-500 w-full h-12 mt-5'
                        value={tempUpdateTodo?.task}
                        onChange={(e) => {
                            setChanged(true)
                            setTempUpdateTodo({
                                ...tempUpdateTodo,
                                task: e.target.value,
                            })
                        }}
                        type="text" />
                    {
                        changed && <div className="modal-action">
                            <label
                                htmlFor="editModal"
                                className='btn btn-sm btn-error rounded-md text-white'
                                onClick={handleEditTodo}
                            >Save</label>
                            <label
                                htmlFor="editModal"
                                className="btn btn-sm rounded-md text-white"
                                onClick={(e) => {
                                    setChanged(false)
                                    setTempUpdateTodo({ ...updateTodo })
                                }}
                            >Cancel</label>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default EditModal;