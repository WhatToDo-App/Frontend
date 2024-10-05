import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
                },
            });
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due: {task.due_date}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;