import React from 'react';
function Child(props) {

// Retrieves a Dad joke when the button is clicked
const getData = async () => {

// Found a dad joke API that I used 
const response = await fetch("https://icanhazdadjoke.com/", 
    
{
  headers: {Accept: "application/json"}
});

// Converts the response into JSON
const json = await response.json();

// Sends the returned joke back up to Parent
props.setData(json.joke);
};

return (
    <div>
      <button
        onClick={getData}
        style={{
          backgroundColor: '#030dc8',
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          fontSize: 'clamp(14px, 2vw, 18px)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
        }}
> Click Me for a Dad Joke
      </button>
    </div>
  );
}

// Allows this to be used in other files
export default Child;