import React, { useState } from 'react';

const EditModal = ({ updateTodo, tempUpdateTodo, setTempUpdateTodo }) => {

    const [changed, setChanged] = useState(false);


    const handleEditTodo = () => {

        const url = `https://simmibackend.pythonanywhere.com/api/press-media/${updateTodo?.id}/`;

    }

    return (
        <div>
            <input type="checkbox" id="editModal" className="modal-toggle" />
            <div className="modal backdrop-blur-md">
                <div className="modal-box bg-gray-50">
                    <input
                        value={tempUpdateTodo?.task}
                        onChange={(e) => {
                            setChanged(true)
                            setTempUpdateTodo({
                                ...tempUpdateTodo,
                                task: e.target.value,
                            })
                        }}
                        className='border rounded-md px-4 py-1 focus:outline-red-500 w-full h-12 m-0' type="text" />
                    {
                        changed && <div className="modal-action">
                            <label
                                onClick={handleEditTodo}
                                htmlFor="editModal"
                                className='btn btn-sm btn-error rounded-md text-white'>Save</label>
                            <label
                                onClick={(e) => {
                                    setTempUpdateTodo({ ...updateTodo })
                                }}
                                htmlFor="editModal" className="btn btn-sm rounded-md">Cancel</label>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default EditModal;