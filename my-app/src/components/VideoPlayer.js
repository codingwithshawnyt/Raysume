import React, { useState, useRef } from 'react';

const VideoPlayer = ({ src }) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const videoRef = useRef(null);

    const handlePlay = () => {
        // Hide overlay when video starts playing
        setShowOverlay(false);
    };

    const handleEnded = () => {
        // Show overlay when video ends
        setShowOverlay(true);
    };

    return (
        <div>
            {showOverlay && <div className="overlay">Loading or Ended</div>}
            <video
                ref={videoRef}
                src={src}
                onPlay={handlePlay}
                onEnded={handleEnded}
                controls
            />
        </div>
    );
};

export default VideoPlayer;
