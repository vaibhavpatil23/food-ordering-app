import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedIn User  
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is React js</h2>
        <UserClass name={"vaibhav patil"} location={"maharastra in Jalgoan"} />
      </div>
    );
  }
}
export default About;
