import React from "react";

interface CardProps {
  title: string;
  copy: string;
  code: string;
  demo: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="copy">{props.copy} </p>

        <div className="buttons">
          <button
            className="btn"
            onClick={() => window.location.assign(props.code)}
          >
            View Code
          </button>
          <button
            className="btn"
            onClick={() => window.location.assign(props.demo)}
          >
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
