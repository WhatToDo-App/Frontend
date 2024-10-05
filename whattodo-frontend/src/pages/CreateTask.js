import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            due_date: dueDate,
            priority,
        };

        try {
            const response = await axios.post('/api/tasks/', newTask, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust based on your auth method
                },
            });
            console.log('Task created:', response.data);
            // Optionally reset the form or display a success message
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('medium');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Task Title" 
                required 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description"
            ></textarea>
            <input 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default CreateTask;