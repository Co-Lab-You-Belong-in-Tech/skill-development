import React, { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div>
      <p>
        I am a{" "}
        <span>
          <input type="text" id="job" name="job" />
        </span>
      </p>
      <div className="skills">
        <h2>Choose your top 5 skills</h2>
        <div>
          <button>Report writing</button>
          <button>Digital Marketing</button>
          <button>Data Analysis</button>
          <button>Audience Insights</button>
          <button>Social Listening</button>
          <button>Content Writing</button>
          <button>Front-end Development</button>
          <button>Full-stack Development</button>
          <button>Public Speaking</button>
          <button>Back-end Development</button>
        </div>
        <p>
          <em>Finding tech roles for you..</em>
          <button>Refresh Roles</button>
        </p>
      </div>
      <div className="roles">
        <div className="share_roles">
          <p>Top tech roles based on skills associated with your role</p>
          <p>Share your mathes</p>
        </div>
        <div className="list_roles">
          <ul>
            <li>UX Writer</li>
            <li>UX Writer</li>
            <li>UX Writer</li>
            <li>UX Writer</li>
            <li>UX Writer</li>
            <li>UX Writer</li>
            <li>UX Writer</li>
          </ul>
        </div>
      </div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
          </form>
          <footer>The End</footer>
    </div>
  );
};

export default Home;
