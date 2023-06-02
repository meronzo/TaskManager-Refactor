import React from "react";
import "./TaskHeader.css";

export default function TaskHeader ({ year, month }) {
    return <h2 className="TaskHeader">{year}/{month}</h2>
}