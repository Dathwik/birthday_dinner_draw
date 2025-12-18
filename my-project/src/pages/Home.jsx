import { useNavigate } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { FaMapMarkedAlt, FaApple } from "react-icons/fa";


const SEMMA_ADDRESS = "60 Greenwich Ave, New York, NY 10011";
const RESERVATION_DATE = "Friday, December 26, 2025, at 9:15 PM";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=60+Greenwich+Ave,+New+York,+NY+10011";

const APPLE_MAPS_URL =
  "https://maps.apple.com/?q=60+Greenwich+Ave,+New+York,+NY+10011";

function Home() {
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
    <div className="background">
        <div className="balloon-container">
  <span className="balloon red"></span>
  <span className="balloon blue"></span>
  <span className="balloon pink"></span>
  <span className="balloon purple"></span>
  <span className="balloon gold"></span>
</div>

      {/* Title */}
      <div className="title">
        <h1><i>Birthday Dinner Draw</i></h1>
      </div>

      {/* Story */}
      <div className="story-card">
        <div className="title">
          <h2><i>The Story</i></h2>
        </div>
        <div className="paragraph">
        <p><span className="text-shimmer">
        <b>
        <i>
          The idea for this came from a dinner at Dhamaka with my friend Nishanth.
          Dhamaka is owned by the same group as Semma, and that night we talked
          about Semma—a place we hoped to visit but couldn't get a reservation
          for at the time. Nishanth was the reason I was at Dhamaka in the first
          place, and he was also the one who introduced me to Semma. Since then,
          it stayed on my list. When I eventually secured a reservation at Semma
          on my birthday, it felt natural to make the experience shared—just as
          the dinner once was for me.
        </i>
        </b>
        </span></p>
        </div>
      </div>

      {/* Address & Date */}
      <div className="addressdate-card">
        <div className="title">
          <h2><i>When & Where</i></h2>
        </div>
        <p className="address-text">
    📅 <span className="text-shimmer">{RESERVATION_DATE}</span>
        </p>
        <div className="link">
          <a
            href="https://www.semma.nyc"
            target="_blank"
            rel="noopener noreferrer"
          ><i>
            Semma.nyc
            </i>
          </a>
        </div>

        <p className="address-text">
  📍 <span className="text-shimmer">{SEMMA_ADDRESS}</span>
</p>


        <div className="buttons">
          <button
            className="Googlemaps"
            onClick={() => openInNewTab(GOOGLE_MAPS_URL)}
          >
           <FaMapMarkedAlt />Google Maps
          </button>

          <button
            className="Applemaps"
            onClick={() => openInNewTab(APPLE_MAPS_URL)}
          >
            <FaApple />Apple Maps
          </button>
        </div>
      </div>

      {/* Countdown */}
      <div className="countdown-timer">
        <CountdownTimer />
      </div>

      {/* Enter Draw */}
      <button
        className="enter-draw-button"
        onClick={() => navigate("/EntryForm")}
      >
        Put My Name In The Draw!
      </button>
    </div>
    </>
  );
}

export default Home;

