import './Home.scss'
import TypingFont from '../component/TypingFont/TypingFont';
import '@fontsource/aguafina-script';
import Board from '../component/Board/Board';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bespoke from './Bespoke';


export default function Home(){
  
  return(
    <div className='home-container'>
      <div className='video-wrap'> 
        <video className='video-contents' autoPlay loop muted>
          <source src="/videos/homePage_video.mp4"></source>
        </video>
        <div className='text-collection'>
          <p>Hello World!</p>
          <TypingFont TyingContents='Thank you for visiting my page.'/>
        </div>
      </div>
      <div className='profile-wrap'>
        <div className='profile-title'>Profile~</div>
        <Board/>
      </div>
    </div>
  )
}