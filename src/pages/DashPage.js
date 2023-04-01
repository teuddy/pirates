import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./index.css";

const DashPage = () => {
  const [pirates, setPirates] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPirates = async () => {
      try {
        const response = await axios.get("/api/pirates");
        setPirates(response.data);
      } catch (error) {
        console.error("Error fetching pirates:", error);
      }
    };

    fetchPirates();
  }, []);

  const handleProfile = (id) => {
    window.location.href = `/pirate/${id}`;
    // history.push(`/pirate/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/pirates/${id}`);
      setPirates(pirates.filter((pirate) => pirate._id !== id));
    } catch (error) {
      console.error("Error deleting pirate:", error);
    }
  };

  return (
    <div className="dash-container">
    <ul className="pirate-list">
      {pirates.map((pirate) => (
        <li key={pirate._id} className="pirate-item">
          <img src={pirate.imageUrl} className="pirate-image" />
          {pirate.name} - {pirate.position}
          <button
            className="button"
            onClick={() => handleProfile(pirate._id)}
          >
            Profile
          </button>
          <button
            className="button"
            onClick={() => handleDelete(pirate._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default DashPage;
