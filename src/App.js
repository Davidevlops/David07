import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAuthentication from "./pages/authentication/LoginAuthentication";
import SignupAuthentication from "./pages/authentication/SignupAuthentication";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
            <Route path="" element={<SignupAuthentication />} />
            <Route path="Login" element={<LoginAuthentication />} />
            <Route path="Home" element={<Home />} />
            {/* <Route path="Login" element={<Login />} />
            <Route path="ForgotPass" element={<ForgotPass />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
