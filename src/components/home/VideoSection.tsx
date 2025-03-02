import React from 'react'; 

const VideoSection = () => {
  return (
    <section className="video-section">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/main/122.mp4" type="video/mp4" />
        
      </video>
      

      {/* Overlay Content */}
      <div className="overlay-content">
        <h1>Discover Unmatched Brilliance</h1>
        <p>
          At Your Nearest <span className="highlight">whitelight store</span>
        </p>
        <button className="locate-btn">LOCATE US</button>
      </div>
    </section>
  );
};

export default VideoSection;
