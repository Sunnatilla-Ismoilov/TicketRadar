import { Link } from "react-router-dom";
import "./mainpage.scss";

export default function MainPage() {
  return (
    <>
      <h1>TickerRadar</h1>
      <h2 className="text">
        Looking to jet off on your next adventure? You've come to the right
        place. Our flight ticket aggregator is your passport to the best deals
        on airfare, making travel dreams a reality for everyone. Whether you're
        a globe-trotter in search of the next exotic destination or a business
        traveler looking for the most efficient way to reach your next meeting,
        we've got you covered.
      </h2>
      <Link to="/about">
        <button>About page!</button>
      </Link>
    </>
  );
}
