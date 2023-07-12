import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Class comoonant</h1>
        <h2>This is Namaste React and Vaibhav patil</h2>
        <UserClass name={"vaibhav patil"} location={"maharastra in Jalgoan"} />
      </div>
    );
  }
}

export default About;
