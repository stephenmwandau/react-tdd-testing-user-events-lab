import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Interests:</label>
          <div>
            <input
              type="checkbox"
              id="coding"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="coding">Coding</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="design"
              name="design"
              checked={interests.design}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={interests.marketing}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you for signing up, {name}!</h3>
          <p>Your interests:</p>
          <ul>
            {Object.entries(interests)
              .filter(([_, checked]) => checked)
              .map(([interest]) => (
                <li key={interest}>{interest}</li>
              ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;