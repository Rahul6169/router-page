import "./App.css";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>hello</h2>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}

export default App;
