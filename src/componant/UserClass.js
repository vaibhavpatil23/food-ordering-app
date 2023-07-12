import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    // console.log("child componentDidMount");

    const data = await fetch("https://api.github.com/users/vaibhavpatil23");
    const json = await data.json();
    this.setState({
      useInfo: json,
    });

    console.log(json);
  }
  render() {
    const { name, location,avatar_url } = this.state.useInfo;

    // const { name, location } = this.props;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@vaubhavpatil</h4>
      </div>
    );
  }
}
export default UserClass;
