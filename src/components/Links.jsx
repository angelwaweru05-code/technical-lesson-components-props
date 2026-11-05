import React from "react";

// Links component takes github and linkedin props to display anchor tags
function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;