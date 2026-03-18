import React, { useState } from 'react';
import Child from './Child';
function Parent() {

// User clicks this API button to display a new Dad joke
const [data, setData] = useState("Dad joke will be dispayed here");

// Background color of page
return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
    }}

// Top of page background color, border color and font styling
    >
    <header
        style={{
          backgroundColor: '#154eb9',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center',
          borderBottom: '4px solid #fc3b06'
        }}

// Added a little more space below title
    ><h1
        style={{
            margin: 0,
            color: 'white',
            marginBottom: '25px', 
            fontSize: 'clamp(28px, 5vw, 48px)'
          }}

// Main title of page
     >Pietrowski's Assignment 7
    </h1>
    <p
        style={{
            marginTop: '10px',
            marginBottom: 0,
            color: '#FFD9CC',
            fontSize: 'clamp(16px, 2.5vw, 20px)'
          }}

// Sub-title of page
    >Introduction to React.js Project</p>
    </header>
        <div
        style={{
          padding: '30px 15px',
          textAlign: 'center'
        }}
    >
    <div

// Box that displays the Dad joke
        style={{
            backgroundColor: 'white',
            color: '#1D1D1D',
            padding: '25px',
            borderRadius: '10px',
            border: '2px solid #0B162A',
            maxWidth: '700px',
            margin: '0 auto 30px auto',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)'
          }}
    >
    <p
        style={{
              margin: 0,
              fontSize: 'clamp(16px, 2.5vw, 22px)'
            }}
    >
        {data}
    </p>
        </div>
    <Child name={data} setData={setData}></Child>
      </div>
    </div>
  );
}

// Lets this be used in the other files
export default Parent;