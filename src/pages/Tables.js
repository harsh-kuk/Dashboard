import React from 'react';

function Tables() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tables</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="w-1/3 text-left py-3 px-4">John Doe</td>
            <td className="w-1/3 text-left py-3 px-4">john@example.com</td>
            <td className="text-left py-3 px-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
            </td>
          </tr>
          {/* More rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
