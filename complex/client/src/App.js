import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <main>
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>

        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
