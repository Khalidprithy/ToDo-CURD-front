import React from 'react';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

const MainPage = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <TodoInput></TodoInput>
            </div>
            <TodoOutput></TodoOutput>
        </div>
    );
};

export default MainPage;