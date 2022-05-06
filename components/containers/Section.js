import React from "react";

export default function Section({ Component, bg = "section-dark", id }) {
  return (
    <div className={bg}>
      <div className="section-content" id={id}>
        {Component}
      </div>
    </div>
  );
}
