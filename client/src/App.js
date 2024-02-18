import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import InterviewSettings from "./components/InterviewSettings/InterviewSettings";
import Interview from "./components/Interview/Interview";
import Summary from "./components/Summary/Summary";
import AppContext from "./utils/context";


require('dotenv').config() // adding dotenv to load environment variables.


function App() {
  return (
    <BrowserRouter>
    <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/InterviewSettings" element={<InterviewSettings />} />
          <Route path="/Interview" element={<Interview />} />
          <Route path="/Summary" element={<Summary />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));