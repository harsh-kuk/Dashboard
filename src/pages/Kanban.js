import React from 'react';
// import Board from '@lourenci/react-kanban';
// import '@lourenci/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'To Do',
      cards: [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description for Task 1',
        },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        {
          id: 2,
          title: 'Task 2',
          description: 'Description for Task 2',
        },
      ],
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        {
          id: 3,
          title: 'Task 3',
          description: 'Description for Task 3',
        },
      ],
    },
  ],
};

function Kanban() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kanban</h2>
<h2>kanban page</h2>

      {/* <Board initialBoard={board} /> */}
    </div>
  );
}

export default Kanban;
