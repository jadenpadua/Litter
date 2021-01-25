import React, { useState } from "react";
import cat3 from "../../assets/cat_3.png";
import "./styles.css";

const SplashContent: React.FC = () => {
  const [email, setEmail] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <img
        className="cat-image"
        src={cat3}
        style={{ height: 200, width: 200 }}
        alt="cat"
      />
      <div className="container1">
        <h1>COMING SOON</h1>
        <h3>ARE YOU READY?</h3>
      </div>
      <div className="container2">
        <form className="input-form">
          <label>
            <input
              onChange={onChange}
              className="input-text"
              type="text"
              name="email"
              placeholder="YOUR EMAIL"
            />
          </label>
          <input
            onClick={onSubmit}
            className="input-button"
            type="submit"
            value="NOTIFY ME"
          />
        </form>
      </div>
    </>
  );
};

export default SplashContent;
