import React, { FunctionComponent, useState } from "react";
import CheckBox from "../../components/Checkbox";
import { skills, jobs, Career } from "../../data/mockData";
import ControllableStates from "../../components/TextBox";
import { VscDebugRestart } from "react-icons/vsc";
import skillIcon from "../../assets/skillIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import downLoadIcon from "../../assets/download_light.png";
import rightImage from "../../assets/right_group.png";
import leftImage from "../../assets/left_group.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedIn.png";
import whatsappIcon from "../../assets/whatsapp.png";
import chatGreen from "../../assets/chat_green.png";
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
              <ControllableStates setTitle={setTitle} />
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
        ) : (<div className="jobs"><em>Finding tech roles for you..</em><img className="loading-img" src={loadingIcon } alt="loading"/></div>)}
      </section>
      <footer>
        <img src={leftImage} alt="left" />
        <div>
          <p>Were this suggestion helpful?</p>
          <button className="footer-btn">
            Tell us about your experience <img src={chatGreen} alt="mail" />
          </button>
          <p>Tell someone about SkillMatcha!</p>
          <div className="icon-grp">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={linkedinIcon} alt="linkedIn" />
            <img src={whatsappIcon} alt="whatsapp" />
          </div>
        </div>
        <img src={rightImage} alt="right" />
      </footer>
    </div>
  );
};

export default Home;
