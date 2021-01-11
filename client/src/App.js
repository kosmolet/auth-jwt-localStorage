import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthProvider from "./store/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route
              exact
              path="/resetpassword/:resetToken"
              component={ResetPassword}
            />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
