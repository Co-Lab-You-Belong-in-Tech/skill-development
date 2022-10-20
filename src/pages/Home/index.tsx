import React, { FunctionComponent, useState } from "react";
import CheckBox from "../../components/Checkbox";
import { skills, jobs, Career } from "../../data/mockData";
import ControllableStates from "../../components/TextBox";
import { VscDebugRestart } from "react-icons/vsc";
import skillIcon from '../../assets/skillIcon.png'

const Home: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [title, setTitle] = useState<Career | null>(null);
  console.log(checkedList);
  return (
    <div>
      <section className="upper-section">
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
      </section>
      <section className="lower-section">
        {checkedList.length > 0 ? (
          <div  className="jobs">
            <em>Finding tech roles for you..</em>
            <div className="share_roles">
              <img src={skillIcon} alt="icon"/><p>Top tech roles based on skills associated with your role</p>
              <button>Share your matches</button>
            </div>
            {jobs.map(
              (job) =>
                title &&
                job.career.includes(title.id) && (
                  <div className="list_roles">
                    <ul key={job.id}>
                      <li><button className="list-btn"><a href ={job.info} target="_blank" rel="noreferrer"  >{job.name}</a></button></li>
                    </ul>
                  </div>
                ),
            )}
          </div>
        ) : null}

        {/* <div className="feedback">Feedback Paragragh</div>
      <div className="social_media">Social media links</div> */}
      </section>
    </div>
  );
};

export default Home;
