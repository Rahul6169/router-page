import { useNavigate } from "react-router-dom";

export default function Invoices() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>invoices page</h2>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}
