import React from 'react';

const EditModal = () => {
    return (
        <div>
            <input type="checkbox" id="editModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle backdrop-blur-md">
                <div className="modal-box bg-gray-50">

                    <div className="modal-action ">
                        <label
                            htmlFor="editModal"
                            className='btn btn-sm btn-error rounded-md text-white'>Save</label>
                        <label htmlFor="editModal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;