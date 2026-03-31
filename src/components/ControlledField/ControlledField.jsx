import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
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

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Controlled Field</p>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameOnChange}
          type="text"
          name={name}
          placeholder="Name"
        />
        <br />
        <input
          onChange={handleEmailOnChange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
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
