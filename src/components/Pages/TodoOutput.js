import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import EditModal from './EditModal';
import Task from './Task';

const TodoOutput = ({ todoData, isLoading, refetch }) => {

    const [openTab, setOpenTab] = React.useState(1);

    const handleDelete = id => {
        fetch(`https://todo-server-ze08.onrender.com/task/${id}`, {
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

        fetch(`https://todo-server-ze08.onrender.com/tasks`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('All Data Deleted Successfully')
            })
    }

    const sortedData = todoData?.sort((a, b) => {
        if (a.status === b.status) return 0;
        return (a.status === false) ? -1 : (b.status === false) ? 1 : (a.status === true) ? -1 : (b.status === true) ? 1 : 0;
    });

    return (
        <div className='mt-2 md:mt-5'>
            <div className="w-full mt-1 md:mt-6">
                <div className='flex items-center justify-center'>
                    <ul
                        className="flex gap-2 items-center justify-center mb-0 list-none pt-3 pb-4 mx-6"
                        role="tablist"
                    >
                        <li className="flex-auto text-center w-full">
                            <a
                                className={
                                    "text-base font-semibold capitalize px-5 py-1 md:py-3 shadow rounded-md block leading-normal " +
                                    (openTab === 1
                                        ? "text-teal-400 bg-white border-b-2 border-red-400 shadow-md"
                                        : "text-gray-800 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                All Task
                            </a>
                        </li>
                        <li className="flex-auto text-center w-full">
                            <a
                                className={
                                    "text-base font-semibold capitalize px-5 py-1 md:py-3 shadow rounded-md block leading-normal " +
                                    (openTab === 2
                                        ? "text-teal-400 bg-white border-b-2 border-red-400 shadow-md"
                                        : "text-gray-800 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Completed
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="px-1 md:px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                                    {
                                        sortedData?.map(task => <Task
                                            key={task._id}
                                            task={task}
                                            refetch={refetch}
                                            isLoading={isLoading}
                                            handleDelete={handleDelete}
                                        ></Task>)
                                    }
                                </motion.ul>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                {
                                    todoData?.filter(value => {
                                        if (value.status === true) {
                                            return value;
                                        }
                                    }).map(task => <Task
                                        key={task._id}
                                        task={task}
                                        refetch={refetch}
                                        isLoading={isLoading}
                                        handleDelete={handleDelete}
                                    ></Task>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center gap-2 py-2'>
                    {
                        todoData?.length === 0 ? ''
                            :
                            <>
                                <label
                                    htmlFor="deleteAllModal" className='btn btn-sm md:btn-md btn-error rounded-md text-white'>Delete All</label>
                                <button className='btn btn-sm md:btn-md bg-teal-500 border-0 rounded-md text-white'>All Completed</button>
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
            {/* Edit Modal */}
            <EditModal />
        </div>
    );
};

export default TodoOutput;