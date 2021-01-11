import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/resetpassword/:resetToken"
            component={ResetPassword}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
