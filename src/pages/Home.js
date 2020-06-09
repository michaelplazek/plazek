import React from "react";
import { useStateContext } from "../app/context";

const Home = () => {

  const [{ app }, dispatch] = useStateContext();

  return (
    <div style={{ background: app.theme }}>
      My home page
      <button onClick={() => dispatch({ type: 'changeTheme', theme: 'red' })}>Change theme</button>
    </div>
  );
};

export default Home;
