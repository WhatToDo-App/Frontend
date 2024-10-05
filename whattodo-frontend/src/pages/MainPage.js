import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const MainPage = () => {
    return (
        <div>
            <h1>WhatToDo App</h1>
            <CreateTask />
            <h2>Your Tasks</h2>
            <TaskList />
        </div>
    );
};

export default MainPage;