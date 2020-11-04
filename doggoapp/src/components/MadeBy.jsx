import React from "react";
import "../styles/MadeBy.scss";

const MadeBy = () => {
  return (
    <div className="made-by text-light fixed-bottom text-center text-md-right mr-3">
      <p className="p-2 m-0">
        Created by{" "}
        <a
          href="https://monikaswidzinska.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          Monika Swidzinska
        </a>
      </p>
    </div>
  );
};

export default MadeBy;
