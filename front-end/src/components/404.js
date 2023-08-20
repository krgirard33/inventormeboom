import { Link } from "react-router-dom";
import styles from "./404.css";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>We looked high and low, left & right, behind the couch, under the cushions, and in the ice box, but we couldn't find the resource you are requesting.</p>
      <p>We even looked in the Roomba in case it got sucked up last night. </p>
      <p>Maybe one of these might help?</p>
      <Link to='/'>Home</Link>
      <Link to='/register'>Registration</Link>
    </div>
  )
}