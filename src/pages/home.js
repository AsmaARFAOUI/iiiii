import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <nav>
        <ul className="items">
          <li className="item">
            <Link to="/" style={{ color: "white", textDecorationLine: "none" }}>
              Home
            </Link>
          </li>
          <li className="item">
            <Link
              to="/login"
              style={{ color: "white", textDecorationLine: "none" }}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      <h1>home test </h1>
    </>
  );
};
export default Home;
