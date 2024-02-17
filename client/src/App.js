import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import InterviewSettings from "./components/InterviewSettings/InterviewSettings";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
    <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/InterviewSettings" element={<InterviewSettings />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));