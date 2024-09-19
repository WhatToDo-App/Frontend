import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList'; // Create this component later
import CreateTask from './pages/CreateTask'; // Create this component later

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/create" element={<CreateTask />} />
    </Routes>
  );
};

export default App;