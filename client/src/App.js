import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Donate from "./components/Donate/Donate";
import Order from "./components/Order/Order";
import About from "./components/About/About";
import LandingPage from "./components/LandingPage/LandingPage";
import AppContext from "./utils/context";

function App() {
  return (
    <BrowserRouter>
    <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Order" element={<Order />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById('root'));