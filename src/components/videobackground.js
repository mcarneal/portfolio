import React from 'react';
import VideoCover from 'react-video-cover'



class VideoBackground extends React.Component {
state = {
    resizeNotifier: () => {},
  }
render() {
    const videoOptions = {
        src: '../../video.mp4',
      autoPlay: true,
      loop: true,
      muted: true
    };
    const style = {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      margin: 'auto',
      zIndex: -2,
    };
    return (
            <div style={{backgroundColor: 'grey', opacity: 1, width: '100vw', height: '100vh', position: 'fixed', zIndex: -1,}}>
      <div style={style} >
        <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
        </div>
</div>
    );
  }
}
export default VideoBackground;
