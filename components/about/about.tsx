import { about, links } from "blogSetting";
import AboutView from "./aboutView";

const About = ({ currentLan }: LanguageI) => {
  const props = {
    about: about[currentLan],
    links,
  };

  return <AboutView {...props} />;
};

export default About;
