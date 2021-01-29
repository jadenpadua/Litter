import React, { useState } from "react";
import cat3 from "../../assets/cat_3.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const SplashContent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const validate = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = async (email: string): Promise<any> => {
    try {
      let resp = await axios.post("http://127.0.0.1:8000/sendemail", {
        email: email,
      });
      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (validate(email)) {
      console.log("Email of: ", email, "validated");

      sendEmail(email).then((res) => {
        console.log("This should be a confirmation message it was successfull");
      });

      setEmail("");
      setIsSubmitted(true);
      setIsAlert(false);
    } else {
      setIsAlert(true);
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
          Success! Thank you for believing in Litter{" "}
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
      {isAlert ? (
        <div className="alert">
          <h4>Please enter a valid email</h4>
        </div>
      ) : null}
    </>
  );
};

export default SplashContent;
