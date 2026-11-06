import PropTypes from "prop-types";
import Links from "./Links";

// About component handles the user's bio and nests the Links component
function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

About.propTypes = {
  bio: PropTypes.string.isRequired,
  links: PropTypes.shape({
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;