import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/auth/login", { email, password });

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  };

  return (
    <div className="login-page-wr">
      <form onSubmit={loginHandler} className="login-form">
        <h3 className="login-form-title">Sign In</h3>

        <div className="input-label-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="input-label-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-form-forgotpassword">
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            autoComplete="true"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        {error && <span className="error-message">{error}</span>}
        <button type="submit" className="btn">
          Login
        </button>

        <span className="login-form-subtext">
          New user? <Link to="/register">Create an account</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
