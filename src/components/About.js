import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor is executes");
  }
  componentDidMount() {
    // console.log("Parent component is rendered");
  }
  render() {
    // console.log("Parent render is executes");
    return (
      <div>
        <>
          <UserContext.Consumer>
            {({ name }) => <h1 className="text-bold">{name}</h1>}
          </UserContext.Consumer>
        </>
        <h1>About Us</h1>
        <UserClass name={"Mohit Gupta"} location={"Amritsar"} />
      </div>
    );
  }
}

//------------> Functional Component
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <UserClass name = {"Mohit Gupta"} location ={"Amritsar"}/>
//     </div>
//   );
// };

export default About;
