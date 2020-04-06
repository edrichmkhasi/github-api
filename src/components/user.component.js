import React from "react";

const User = (props) => {
  return (
    <form onSubmit = {props.getUser}>
      <input style={{margin:'20px auto', display:'block'}}type="text" name="username" />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default User;
