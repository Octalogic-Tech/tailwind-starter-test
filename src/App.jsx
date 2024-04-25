import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";

const App = () => {
  return (
    <Router>
      <div className="p-16 text-2xl">
        <nav>
          <ul>
            <li>
              <Link to="/">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
