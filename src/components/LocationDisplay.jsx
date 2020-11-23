import React from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay(props) {
  return <div data-testid="location-display">{props.url}</div>;
}
