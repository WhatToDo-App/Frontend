import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskList.css'; // Import the CSS file

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

    const toggleTaskCompletion = async (task) => {
        try {
            const updatedTask = { ...task, completed: !task.completed };
            await axios.patch(`/api/tasks/${task.id}/`, updatedTask, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
                },
            });
            fetchTasks(); // Re-fetch tasks to update the list
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`/api/tasks/${taskId}/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
                },
            });
            fetchTasks(); // Re-fetch tasks to update the list
        } catch (error) {
            console.error('Error deleting task:', error);
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
                    <button onClick={() => toggleTaskCompletion(task)}>
                        Mark as {task.completed ? 'Pending' : 'Completed'}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;