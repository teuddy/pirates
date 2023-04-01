import React, { useState } from "react";
import axios from "axios";
// import "./index.css";

const AddPirate = () => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    threasures: "",
    phrase: "",
    position: "",
    pegLeg: true,
    eyePatch: true,
    hookHand: true,
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
  setFormData({ ...formData, [e.target.name]: value });
    // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/pirates", formData);
      alert("Pirate added successfully!");
      setFormData({
        name: "",
        imageUrl: "",
        threasures: "",
        phrase: "",
        position: "",
        pegLeg: false,
      });
    } catch (error) {
      //set errors
      setErrors('Solo puede habe un capitan')
      console.error("Error adding pirate:", error);
    }
  };

  return (
    <div className="add-pirate-container">
      <h1>Add Pirate</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pirate Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label htmlFor="threasures">Treasures:</label>
        <input
          min={0}
          type="number"
          name="threasures"
          value={formData.threasures}
          onChange={handleChange}
        />

        <label htmlFor="phrase">Pirate Catch Phrase:</label>
        <input
          type="text"
          name="phrase"
          value={formData.phrase}
          onChange={handleChange}
        />

        <label htmlFor="position">Crew Position:</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
        >
          <option value="">Select a position</option>
          <option value="captain">Captain</option>
          <option value="first mate">First Mate</option>
          <option value="quarter master">Quarter Master</option>
          <option value="boatswain">Boatswain</option>
          <option value="powder monkey">Powder Monkey</option>
        </select>

        <label htmlFor="pegLeg">Peg Leg:</label>
      <input
        type="checkbox"
        name="pegLeg"
        checked={formData.pegLeg}
        onChange={handleChange}
      />

      <label htmlFor="eyePatch">Eyepatch:</label>
      <input
        type="checkbox"
        name="eyePatch"
        checked={formData.eyePatch}
        onChange={handleChange}
      />

      <label htmlFor="hookHand">Hook Hand:</label>
      <input
        type="checkbox"
        name="hookHand"
        checked={formData.hookHand}
        onChange={handleChange}
      />
        <b>{errors}</b>
        <button type="submit">Add Pirate</button>
      </form>
    </div>
  );
};

export default AddPirate;
