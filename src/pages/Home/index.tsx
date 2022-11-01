import React, { FunctionComponent, useState } from "react";
// import {
//   useMediaQuery,useTheme
// } from "@material-ui/core";
import Footer from "../../components/Footer";
import CheckBox from "../../components/Checkbox";
import { skills, jobs, Career } from "../../data/mockData";
import RenderGroup from "../../components/TextBox";
import { VscDebugRestart } from "react-icons/vsc";
import skillIcon from "../../assets/skillIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import downLoadIcon from "../../assets/download_light.png";
import loadingIcon from "../../assets/loading.png"


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
              <RenderGroup setTitle={setTitle} />
            </span>
            <button className="btn-restart">
              <VscDebugRestart />
            </button>
          </p>
        </div>
        <div className="skills">
          <h2>Choose your top 5 skills</h2>
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
          <div className="jobs">            
            <div className="share_roles">
              <div className="share-icons">
                <img src={skillIcon} alt="icon" />
                <p>Top tech roles based on skills associated with your role</p>
              </div>

              <button className="share-btn">
                Share your matches <img src={mailIcon} alt="Mail" />
                <img src={downLoadIcon} alt="download" />
              </button>
            </div>
            {jobs.map(
              (job) =>
                title &&
                job.career.includes(title.id) && (
                  <div className="list_roles" key={job.id}>
                    <ul>
                      <li>
                        <button className="list-btn">
                          <a href={job.info} target="_blank" rel="noreferrer">
                            {job.name}
                          </a>
                        </button>
                      </li>
                    </ul>
                  </div>
                ),
            )}
          </div>
        ) : (<div className="jobs"><em>Finding tech roles for you..</em><div className="loading-img"></div></div>)}
      </section>
       <Footer />
    </div>
  );
};

export default Home;
