import React, { FunctionComponent } from "react";
import {
  useMediaQuery,useTheme
} from "@material-ui/core";
import rightImage from "../../assets/right_group.png";
import leftImage from "../../assets/left_group.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedIn.png";
import whatsappIcon from "../../assets/whatsapp.png";
import chatGreen from "../../assets/chat_green.png";
import mobileImage from "../../assets/mobile_footer.png"



const Footer: FunctionComponent = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
    <div>
       {isMobile? (<footer>
       
        <img src={mobileImage}  width="200" 
     height="200"  alt="left" />
        <div>
          <p>Were these suggestions helpful?</p>
          <button className="footer-btn">
            Tell us about your experience <img src={chatGreen} width="30" height="30" alt="mail" />
          </button>
          <p>Tell someone about SkillMatcha!</p>
          <div className="icon-grp">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
            <img src={linkedinIcon} alt="linkedIn" />
            <img src={whatsappIcon} alt="whatsapp" />
          </div>
        </div>
            </footer>):(<footer>
       
        <img src={leftImage} alt="left" />
        <div>
          <p>Were these suggestions helpful?</p>
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
            </footer>)}
            </div>
       
    )
    
}

export default Footer;
