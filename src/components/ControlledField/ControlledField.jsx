import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <p>Controlled Field</p>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
        <p style={{ color: "red" }}>{error}</p>
      </form>
    </div>
  );
};

export default ControlledField;
