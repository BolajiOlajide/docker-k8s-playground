import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>

      <Route exact path="/" component={Fib} />
      <Route path="/otherpage" component={OtherPage} />
    </Router>
  );
}

export default App;
