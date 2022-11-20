import { faPause } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/ContentMain.module.css'




let prank = ''

export default function ContentMain() {
    const imgRef = useRef(null)
    const textRef = useRef(null)


    useEffect(()=>{
      console.log('useEffect')
      setTimeout(()=> {imgRef.current.style.opacity = 1; imgRef.current.style.transform = 'scale(100%)'},1000)
      setTimeout(()=> {textRef.current.style.opacity = 1; textRef.current.style.transform = 'translateY(0px)'},500)
      document.addEventListener('keydown', detectKeyDown)
    }, [])


    const detectKeyDown = (e) => {
      // setPressedKeys(current => [...current, e.key]);
      prank = prank += e.key
      prank = prank.slice(-4)
      if (prank === 'dave') {
        play()
      }

    }
    
    
    const play = () => {
      let audio = document.getElementById('a1');
      audio.volume = 1
      audio.play();
      imgRef.current.style.transform = 'scale(2000%)'
      imgRef.current.style.transform += 'translate(35px, -15px)'
      imgRef.current.style.filter= 'invert(1)'
      textRef.current.style.opacity = '0'
      setTimeout(()=>{
        audio.currentTime = 0;
        imgRef.current.style.transform = 'scale(100%)'
        imgRef.current.style.transform += 'translateX(0px)'
        imgRef.current.style.filter= 'invert(0)'
        textRef.current.style.opacity = '1'
      }, 18000)
    };
    
    const pause = () => {
      let audio = document.getElementById('a1');
      const fadeOut = setInterval(()=>{audio.volume > 0.01 ? audio.volume = audio.volume - 0.01 : clearInterval(fadeOut)}, 10)
      setTimeout(()=>{audio.pause(); audio.currentTime = 0;}, 3000)
      imgRef.current.style.transform = 'scale(100%)'
      imgRef.current.style.filter= 'invert(1)'
    };
    
    // if(pressedKeys.filter((key, i) => i > pressedKeys.length-1).join('').toLowerCase() === 'dave' ) {
    //   play()
    // }

    return (
      <div className={styles.container} >
          <div className={styles.textContainer} ref={textRef}>
              <p>Hi, my name is</p><br />
              <h1>Dave Lopper</h1>
              <h2>I build things for the web.</h2>
              <p>Web davelopper in ReactJS NextJS and NodeJS</p>
          </div>
          <img src="./assets/dave.jpeg" alt="" ref={imgRef} />
          <audio id='a1' src='./dave-slow.mp3'></audio>
      </div>
    )
}
