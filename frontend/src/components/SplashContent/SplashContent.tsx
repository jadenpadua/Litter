import React, { useState } from "react";
import cat3 from "../../assets/cat_3.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const SplashContent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const validate = (email: string): boolean => {
    // TODO: Email validation
    return true;
  };

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (validate(email)) {
      console.log(email);
      setEmail("");
      setIsSubmitted(true);
    } else {
      console.log("Validation is false, send alert prompt...");
    }
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

      {isSubmitted ? (
        <div className="thank-you">
          Success! thank you for believing in Litter{" "}
          <FontAwesomeIcon icon={faCat} className="icon" />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SplashContent;
