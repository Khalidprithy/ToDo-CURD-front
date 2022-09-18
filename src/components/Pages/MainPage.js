import React from 'react';
import TodoInput from './TodoInput';
import TodoOutput from './TodoOutput';

const MainPage = () => {
    return (
        <div>
            <TodoInput></TodoInput>
            <TodoOutput></TodoOutput>
        </div>
    );
};

export default MainPage;