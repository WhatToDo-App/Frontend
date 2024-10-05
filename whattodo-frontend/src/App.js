import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/create" element={<CreateTask />} />
            </Routes>
        </Router>
    );
}

export default App;