import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Jobs from "./components/Jobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Tests from "./components/Tests";
function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="components">
            <Routes>
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/account" element={<AuthForm />} />
              <Route path="/tests" element={<Tests />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
