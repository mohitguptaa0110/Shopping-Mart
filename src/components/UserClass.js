import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: {
        Name: "Dummy", // if i dont write does not matter
        Location: "Dummy",
      },
    };
    // console.log("Child constructor is executes");
  }
  async componentDidMount() {
    // console.log("Child component mount is rendered");
    const data = await fetch("https://api.github.com/users/mohitguptaa0110");
    const json = await data.json();

    console.log(json);
    this.setState({
      Info: json,
    });
  }
  componentDidUpdate(){
    // console.log("Child constructor is updated");
  }
  componentWillUnmount(){
    // console.log("Child constructor is finished");
  }
  render() {
    // console.log("Child render is executes");
    const { name, location, avatar_url } = this.state.Info;
    return (
      <div className="user-card">
        <img className="git-image" src={avatar_url}></img>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : @mohitgupta</h3>
      </div>
    );
  }
}

export default UserClass;
