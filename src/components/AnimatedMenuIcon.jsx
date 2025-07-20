import React from "react";
import "./AnimatedMenuIcon.css";

export function AnimatedMenuIcon({ open }) {
  return (
    <div className="hamburger-wrapper">
      <div className={`hamburger original ${open ? "rotate-left" : ""}`}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      
      <div className={`hamburger clone ${open ? "rotate-right" : ""}`}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>
  );
}