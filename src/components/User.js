import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h3>Name : {name}</h3>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h3>Location : {location}</h3>
      <h3>Contact : @mohitgupta</h3>
    </div>
  );
};
export default User;
