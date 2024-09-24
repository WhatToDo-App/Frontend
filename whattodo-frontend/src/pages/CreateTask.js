import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await axios.post('http://127.0.0.1:8000/api/tasks/', { title, description });
      setTitle('');
      setDescription('');
      setSuccess(true);
    } catch (error) {
      setError("Error creating task.");
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
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
          placeholder="Task Description" 
        />
        <button type="submit">Add Task</button>
      </form>
      {success && <p>Task created successfully!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateTask;