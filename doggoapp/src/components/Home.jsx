import React from "react";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="homepage d-flex flex-column align-items-center">
      <h1>Welcome to the DoGGo App</h1>
      <img
        className="dog-gif"
        src="https://res.cloudinary.com/mokaweb/image/upload/v1604435749/DoGGoApp/dog_gif.webp"
        alt="dog_in_space"
      />
      <h2>Click buttons to see</h2>
      <h2>facts about dogs</h2>
    </div>
  );
}
