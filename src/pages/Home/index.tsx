import React, { FunctionComponent, useState } from "react";
import CheckBox from "../../components/Checkbox";
import {career, skills,Career} from "../../data/mockData"
import ControllableStates  from "../../components/TextBox";

const Home: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState<Career | null>(null)
 

  return (
    <div>
      <p>
        I am a
        <span>
          <ControllableStates setTitle={setTitle} />
        </span>
      </p>

      <div className="skills">
        <h2>Choose your skills</h2>
        <div>
          {skills.map((skill) => (
            title && 
            skill.career.includes(title.id) && 
            <CheckBox key={skill.id} label={skill.skill} checked={checked} setChecked={setChecked} />
          ))}
        </div>
      </div>
    </div>
  );
};


//           <CheckBox label="true" checked={checked} setChecked={setChecked} />
//         </div>
//         <p>
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
