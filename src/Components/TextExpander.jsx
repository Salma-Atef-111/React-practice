import React, { useState } from "react";

export default function TextExpander() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div>
        <Contant>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science
          fiction, but believe it or not, space travel is a real thing. Humans
          and robots are constantly venturing out into the cosmos to uncover its
          secrets and push the boundaries of what's possible.
        </Contant>

        <Contant
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="show less"
          buttonColor="#ff6622"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </Contant>

        <Contant expanded={true} className="text-expander-box">
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </Contant>
      </div>
    </>
  );
}

function Contant({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [showText, setShowText] = useState(expanded);
  const displayText = showText
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <>
      <h1 className={className}>
        <span>{displayText}</span>
        <button
          onClick={() => setShowText((expanded) => !expanded)}
          style={buttonStyle}
        >
          {showText ? collapseButtonText : expandButtonText}
        </button>
      </h1>
    </>
  );
}
