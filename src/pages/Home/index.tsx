import React, { FunctionComponent, useState } from "react";
import CheckBox from "../../components/Checkbox";
import { skills, Career } from "../../data/mockData";
import ControllableStates from "../../components/TextBox";
import { VscDebugRestart } from "react-icons/vsc";

const Home: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState<Career | null>(null);

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
                  />
                </button>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

//
//           <em>Finding tech roles for you..</em>
//           <button>Refresh Roles</button>
//         </p>
//       </div>
//       <div className="roles">
//         <div className="share_roles">
//           <p>Top tech roles based on skills associated with your role</p>
//           <p>Share your mathes</p>
//         </div>
//         <div className="list_roles">
//           <ul>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//             <li>UX Writer</li>
//           </ul>
//         </div>
//       </div>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//           </form>
//           <footer>The End</footer>
//     </div>
//   );
// };

export default Home;
