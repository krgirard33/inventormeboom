import styles from "./Landing.css"
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div id="landing-page" className="p-5 container-md">
        <div id="landing-left-col">
          <img
            id="logo"
            src="logo_transparent.png"
            alt="logo"
          ></img>
        </div>
        <div id="landing-right-col" className="landing-content">
          <p>
            <h4>Create your own customizable inventory with InventorMe</h4>
            <ul className="box-container">
              <section className="box-row">
                <li id="box1">Easily organize your inventory at the click of a button</li>
                <li id="box2">Add item details with custom fields</li>
                <li id="box3">Search inventory by name, category & quantity</li>
              </section>
            </ul>
          </p>
          <Link to="/register">
            <button id="get-started-button" className="btn btn-danger mx-5 btn-lg" type="submit">
              Get Started!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
