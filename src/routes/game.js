import { useNavigate } from "react-router-dom";
export default function Game() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>game page</h2>
      <div>
        <div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  );
}
