import { useNavigate } from "react-router-dom";

const Theater = () => {
  const navigate = useNavigate();

  const handleTicketCounter = () => {
    navigate("/ticket-counter");
  };

  return (
    <div>
      <button onClick={handleTicketCounter}>Go to ticket counter</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Theater;
