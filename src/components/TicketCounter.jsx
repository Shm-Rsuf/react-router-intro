import { useNavigate } from "react-router-dom";

const TicketCounter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
};

export default TicketCounter;
