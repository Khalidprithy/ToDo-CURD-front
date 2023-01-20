import React from 'react';
import { useQuery } from 'react-query';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

const MainPage = () => {

    const { data: todoData, isLoading, refetch } = useQuery('todoData', () => fetch(`http://localhost:5000/tasks`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));


    return (
        <div>
            <TodoInput
                todoData={todoData}
                isLoading={isLoading}
                refetch={refetch}
            ></TodoInput>
            <TodoOutput
                todoData={todoData}
                isLoading={isLoading}
                refetch={refetch}
            ></TodoOutput>
        </div>
    );
};

export default MainPage;