import React from "react";

interface TwoColumnsProps {
  heading: string;
  text: string;
  image: string;
  direction: string;
}

export default function TwoColumns({
  heading,
  text,
  image,
  direction,
}: TwoColumnsProps) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}
