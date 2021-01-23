import cat3 from "../../assets/cat_3.png";
import './styles.css'

const SplashContent = () => {
  return (
    <>
      <img className="cat-image" src={cat3} style={{ height: 200, width: 200 }} alt="cat" />
      <div className="container1">
        <h1>COMING SOON</h1>
        <h3>ARE YOU READY?</h3>
      </div>
      <div className="container2">
        <form className="input-form">
          <label>
            <input
              className="input-text"
              type="text"
              name="name"
              placeholder="YOUR EMAIL"
            />
          </label>
          <input className="input-button" type="submit" value="NOTIFY ME" />
        </form>
      </div>
    </>
  );
};

export default SplashContent;
