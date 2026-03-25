import React from 'react';
function Child(props) {

// Runs when button is clicked
const getData = async () => {

// Used a free dad joke API I found online
const response = await fetch("https://icanhazdadjoke.com/", {
headers: { Accept: "application/json" }
});

// Turn the response into usable data
const json = await response.json();

// Sends the joke back up to the parent
props.setData(json.joke);
};

// Shows the data passed down from Parent. This is from the second comment in the feedback
return (
<div className="child-area">
<p className="child-text">{props.name}</p>
    
{/* Button to get a new joke */}
<button className="joke-button" onClick={getData}>
Click Me for a Joke
</button>
</div>
  );
}

// Allows this to be used elsewhere
export default Child; 