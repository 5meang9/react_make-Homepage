import './Home.scss'
import TypingFont from '../component/TypingFont/TypingFont';
// import useVideoPlayer from '../hooks/useVideoPlayer'
// import React, { useRef } from "react";
// import ReactPlayer from 'react-player'



export default function Home(){
  
  return(
    <div className='video-wrap'> 
       <video className='video-contents' autoPlay loop muted>
        <source src="/videos/homePage_video.mp4"></source>
      </video>
      <div className='text-collection'>
        {/* <p>Hello World!</p> */}
        <TypingFont prevContents='hello world!' TyingContents='profile'/>
      </div>
    </div>
  )
}