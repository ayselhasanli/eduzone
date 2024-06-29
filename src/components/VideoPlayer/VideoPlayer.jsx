import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/media/edu.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
        setPlayState(false);
    }
  };

  return (
    <section
      onClick={closePlayer}
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
    >
      <video src={video} autoPlay muted controls></video>
    </section>
  );
};

export default VideoPlayer;
