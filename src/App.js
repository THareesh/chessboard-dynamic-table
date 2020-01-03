import React from 'react';
import './App.css';
import ChessTable from "./components/index"

function App() {
  return (
   <React.Fragment>
         <h1 className="text-center mt-2">Chessboard-Dynamic-grid-table</h1>
         <ChessTable />
   </React.Fragment>
  );
}

export default App;
