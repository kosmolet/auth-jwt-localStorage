import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { authContext } from "../store/AuthContext";

const Home = () => {
  const history = useHistory();
  const { setAuthData, auth } = useContext(authContext);
  //   const onLogOut = () => {
  //     setAuthData(null);
  //     localStorage.removeItem("authToken");
  //     localStorage.removeItem("userData");
  //     history.push("/login");
  //   };
  return (
    <>
      <Navbar />
      <div className="home-page-wr">
        {console.log(auth)}
        <h1 className="home-page-hello"> {`Hello, ${auth.data.name}`} </h1>
        <button type="button" className="btn" style={{ width: 300 }}>
          Start
        </button>
      </div>
    </>
  );
};

export default Home;
