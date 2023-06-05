import React, {useRef} from 'react'
import YouTube from 'react-youtube';
import '../styles/Home.css'
const YouTubeVid = () => {
  const videoId = '26o7xna51KE';
  const playerRef = useRef(null);
  const playerOptions = {
    width: '100%',
    height: '500px',
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };
  const handleVideoEnd = () => {
    playerRef.current.internalPlayer.playVideo();
  };
  return (
    <>
      <section className='container' style={{ backgroundColor: "whitesmoke", textAlign:"center", width:"100vw", padding:"2rem 0" }}>
        <p
          className="ourWorkHeading"
          style={{
            color: "black",
            fontFamily: "oswald",
            letterSpacing: "4px",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          How it's done
        </p>
        <div className='video-container' style={{width:"100%", height:"100%"}}>
        <YouTube videoId={videoId}
      opts={playerOptions}
      onEnd={handleVideoEnd}
      ref={playerRef}/>
        </div>
        </section>  
    </>
  )
}

export default YouTubeVid