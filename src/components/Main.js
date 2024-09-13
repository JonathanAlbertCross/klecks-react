import React, { useState } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const [showInkBlot, setShowInkBlot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInkBlot(true);
  };

  return (
    <main>
      <div id="headlines">
        <h1>KLECKS</h1>
        <p className="subheading">Explore Your Subconscious</p>
      </div>
      <form id="nameForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="functionbutton">
          Start
        </button>
      </form>
      <div id="messageDiv"></div>

      {showInkBlot && (
        <div>
          <div id="letsgo">
            <button className="functionbutton">Let's get started!</button>
          </div>
          <div id="inkblotarea">
            <img src="./images/inkblot.png" alt="ink blot" />
          </div>
          <div id="buttonarea">
            <h2>What do you see?</h2>
            <div>
              <button id="button1"></button>
              <button id="button2"></button>
              <button id="button3"></button>
            </div>
            <div>
              <button id="rotateBtn" className="functionbutton">
                Rotate image
              </button>
              <button id="skipButton" className="functionbutton">
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      <div id="showResults" className="hidden">
        <p>
          All done! Curious to know what your choices might say about you as a
          person?
        </p>
        <br />
        <button>Show results</button>
      </div>
    </main>
  );
};

export default Main;
