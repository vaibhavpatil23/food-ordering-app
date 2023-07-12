import User from "./user";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React and Vaibhav patil</h2>
      {/* <User name={"vaibhav patil is here"}/> */}

      <UserClass name={"Brother"}  location={"maharastra in Jalgoan"}/>
    </div>
  );
};
export default About;
