import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
      <ul>
        <li className="mb-2">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded block">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/tables" className="hover:bg-gray-700 p-2 rounded block">Tables</Link>
        </li>
        <li className="mb-2">
          <Link to="/charts" className="hover:bg-gray-700 p-2 rounded block">Charts</Link>
        </li>
        <li className="mb-2">
          <Link to="/calendar" className="hover:bg-gray-700 p-2 rounded block">Calendar</Link>
        </li>
        <li className="mb-2">
          <Link to="/kanban" className="hover:bg-gray-700 p-2 rounded block">Kanban</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
