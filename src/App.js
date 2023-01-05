import "./App.css";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Invoices">
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}

export default App;
