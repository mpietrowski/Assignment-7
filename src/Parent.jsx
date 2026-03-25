import React, { useState } from 'react';
import Child from './Child';
import './style.css'; // Used external CSS instead of inline styles as suggested in feedback
function Parent() {

// This is the text that changes when button is clicked
const [data, setData] = useState("Dad joke will be displayed here");

return (
    <div className="page">

    {/* Header section styled using CSS instead of inline per comment */}
    <header className="header">
    <h1 className="title">Pietrowski's Assignment 7</h1>
    <p className="subtitle">Introduction to React.js Project</p>
    </header>

    {/* Main content area */}
    <div className="content">

    {/* Box that shows the current joke */}
    <div className="joke-box">
    <p className="joke-text">{data}</p>
    </div>

    {/* Sending the data and update function down to Child */}
    <Child name={data} setData={setData}></Child>
    </div>
    </div>
  );
}

export default Parent; // lets other files use this