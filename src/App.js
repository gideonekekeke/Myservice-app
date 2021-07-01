import GetStarted from "./Components/GetStarted";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoaderFile from "./Components/LoaderFile";

import Reader from "./Components/Reader";
import QuestionPage from "./WorkersPage/QuestionPage";
// import WorksignUp from "./WorkersPage/WorksignUp";
import UserSignUp from "./UsersPage/UserSignup";
import ElectricianSignUp from "./WorkersPage/WorkerSignup/ElectricianSignUp";
import PlumberSignUp from "./WorkersPage/WorkerSignup/PlumberSignUp";
import CarpenterSignUp from "./WorkersPage/WorkerSignup/CarpenterSignUp";
import FashionSignUp from "./WorkersPage/WorkerSignup/FashionSignUp";
import PainterSignUp from "./WorkersPage/WorkerSignup/PainterSignUp";
import WelderSignUp from "./WorkersPage/WorkerSignup/WelderSignUp";
import SalesSignUp from "./WorkersPage/WorkerSignup/SalesSignUp";
import OtherSignUp from "./WorkersPage/WorkerSignup/OtherSignUp";
import WorkerDashboard from "./WorkersPage/WorkerDashboard/WorkerDashboard";
import UserDashboard from "./UsersPage/UserDashboard";
import { GlobalProvider } from "./Components/AuthState/GlobalContext";
import Messaging from "./Messaging/Messaging";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={GetStarted} />
            <Route path="/load" component={LoaderFile} />

            <Route path="/read" component={Reader} />
            <Route path="/question" component={QuestionPage} />
            <Route path="/usersignup" component={UserSignUp} />
            <Route path="/userDashboard" component={UserDashboard} />
            <Route path="/chat" component={Messaging} />

            <Route path="/electrician" component={ElectricianSignUp} />
            <Route path="/plumber" component={PlumberSignUp} />
            <Route path="/carpenter" component={CarpenterSignUp} />
            <Route path="/fashiondesigner" component={FashionSignUp} />

            <Route path="/painter" component={PainterSignUp} />
            <Route path="/welder" component={WelderSignUp} />
            <Route path="/sales" component={SalesSignUp} />
            <Route path="/others" component={OtherSignUp} />
            <Route path="/workerdashboard/:id" component={WorkerDashboard} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
