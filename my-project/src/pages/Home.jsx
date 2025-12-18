import { useNavigate } from 'react-router-dom';
import CountdownTimer from "../components/CountdownTimer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="title">
      <h1>Birthday Dinner Draw</h1>
    </div>
    <div className="story-card">
        <div>
            <h2>The Story</h2>
            <p>The idea for this came from a dinner at Dhamaka with my friend Nishanth.
                Dhamaka is owned by the same group as Semma, 
                and that night we talked about Semma- a place we hoped to visit but couldn't get a reservation for at that time. 
                Nishanth was the reason I was at Dhamaka in the first place, and he was also the one who introduced me to Semma. 
                Since then, it stayed on my list. When I eventually secured a reservation at Semma on my birthday, 
                it felt natural to make the experience shared- just as the dinner once was for me.
            </p>
        </div>
        </div>
        <div className="addressdate-card">
            <h2>When & Where</h2>
            <div className="link"> <a
            href="https://www.semma.nyc"
            target="_blank"
            rel="noopener noreferrer"
            >
            Semma.nyc
            </a>
            </div>
            <p>📍 60 Greenwich Ave, New York, NY 10011</p>
            <div className="buttons">
            <button
                onClick={() => {
                    window.open("https://www.google.com/maps/dir/?api=1&destination=60+Greenwich+Ave,+New+York,+NY+10011", 
                        '_blank', 
                        'noopener,noreferrer'
                        );
                }}>View on Google Maps</button>
            <button onClick={() => {
                window.open("https://maps.apple.com/?q=60+Greenwich+Ave,+New+York,+NY+10011", 
                    '_blank', 
                    'noopener,noreferrer'
                        );
                }}>View on Apple Maps</button>
            </div>
        </div>
        <div className="countdown-timer"><CountdownTimer /></div>
        <button className="enter-draw-button" onClick={() => navigate('/EntryForm')}>Enter Draw</button>
    </>
  );
}

export default Home;
