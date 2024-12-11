import React, { useState } from "react";
import Logo from "./logo";

const UserDashboard = () => {
  // Mock data for booked tickets
  const [tickets, setTickets] = useState([
    {
      id: 1,
      movie: "The Matrix Resurrections",
      time: "7:00 PM",
      date: "2024-12-15",
      seats: ["A1", "A2", "A3"],
    },
    {
      id: 2,
      movie: "Avengers: Endgame",
      time: "9:00 PM",
      date: "2024-12-16",
      seats: ["B4", "B5"],
    },
  ]);

  // Handle cancel ticket
  const cancelTicket = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this ticket?");
    if (confirmCancel) {
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    }
  };

  return (
    
    <div className="user-dashboard">

       <Logo/>
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-content">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.movie}</h3>
              <p>
                <strong>Date:</strong> {ticket.date}
              </p>
              <p>
                <strong>Time:</strong> {ticket.time}
              </p>
              <p>
                <strong>Seats:</strong> {ticket.seats.join(", ")}
              </p>
              <button className="cancel-btn" onClick={() => cancelTicket(ticket.id)}>
                Cancel Ticket
              </button>
            </div>
          ))
        ) : (
          <p>No tickets booked yet!</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
