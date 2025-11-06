import React from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();
  const roomId = id || "general";
  return <h2>Room: {roomId}</h2>;
}
