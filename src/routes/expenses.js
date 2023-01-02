import { Link, useNavigate } from "react-router-dom";
export default function Expenses() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>expenses page</h2>
      <Link to="/expenses/game">game</Link>
      <div>
        <div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  );
}
