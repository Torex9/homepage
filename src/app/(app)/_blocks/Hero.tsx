import React from "react";

interface HeroProps {
  heading: string;
  text: string;
  backgroundImage: string;
}

export default function Hero({ heading, text, backgroundImage }: HeroProps) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}
