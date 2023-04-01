import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const PirateProfile = () => {
  const [pirate, setPirate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPirate = async () => {
      try {
        const response = await axios.get(`/api/pirates/${id}`);
        setPirate(response.data);
      } catch (error) {
        console.error("Error fetching pirate:", error);
      }
    };

    fetchPirate();
  }, [id]);

  if (!pirate) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pirate-profile-container">
      <h2>{pirate.name}</h2>
      <img src={pirate.imageUrl} alt={pirate.name} className="pirate-image" />
      <p>Position: {pirate.position}</p>
      <p>Treasures: {pirate.threasures}</p>
      <p>Catch Phrase: {pirate.phrase}</p>
      <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
      <p>Eyepatch: {pirate.eyePatch ? "Yes" : "No"}</p>
      <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
    </div>
  );
};

export default PirateProfile;
