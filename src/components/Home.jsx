import React from "react";

// Home component receives color, name, and city props to dynamically render the header text and style
function Home({ color, name, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;