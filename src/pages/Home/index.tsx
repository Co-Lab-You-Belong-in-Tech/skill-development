import React, { FunctionComponent, useState } from "react";
import CheckBox from "../../components/Checkbox";
import { skills, jobs, Career } from "../../data/mockData";
import ControllableStates from "../../components/TextBox";
import { VscDebugRestart } from "react-icons/vsc";


const Home: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [title, setTitle] = useState<Career | null>(null);
  console.log(checkedList);
  return (
    <div>
      <div className="prev_job">
        <p className="prev paragraph">I am a</p>
        <p className="title">
          <span className="prev">
            <ControllableStates setTitle={setTitle} />
          </span>

          <button className="btn-restart">
            <VscDebugRestart />
          </button>
        </p>
      </div>
      <div className="skills">
        <h2>Choose your skills</h2>
        <div className="skill-box">
          {skills.map(
            (skill) =>
              title &&
              skill.career.includes(title.id) && (
                <button key={skill.id} className="skill-btn">
                  <CheckBox
                    label={skill.skill}
                    checked={checked}
                    setChecked={setChecked}
                    setCheckedList={setCheckedList}
                  />
                </button>
              ),
          )}
        </div>
      </div>
      <div className="jobs">
        {/* <em>Finding tech roles for you..</em> */}
        {/* <div className="share_roles">
          <p>Top tech roles based on skills associated with your role</p>
          <p>Share your matches</p>
        </div> */}
        <div className="list_roles">
          {checkedList.length > 0 && jobs.map(
            (job) =>
              title &&
              job.career.includes(title.id) && (// need to fix
                <ul key={job.id}>
                  <li>{job.name}<a href ={job.info} target="_blank" rel="noreferrer"  >Check here</a></li>
                </ul>
              ),
          )}
        </div>
      </div>
      {/* <div className="feedback">Feedback Paragragh</div>
      <div className="social_media">Social media links</div> */}
    </div>
  );
};

export default Home;
