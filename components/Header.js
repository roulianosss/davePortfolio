import React, { useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export  default function Header() {

  const headerRefs = useRef([])

  const addRefs = el => {
    if (el && !headerRefs.current.includes(el)) {
      headerRefs.current.push(el)
    }
  }

  useEffect(()=>{
    headerRefs.current.map((el, index) => {setTimeout(()=> {el.style.opacity = 1, el.style.transform = 'translateX(0px)'}, ++index*200)})
  }, [])

  return (
    <nav className={styles.container} id='main'>
        <div className={styles.logoContainer} ref={addRefs}>
            <Link href="/"><FontAwesomeIcon icon={faReact} color='#60f2d2'  /></Link>
            <p ref={addRefs}>DAVEWEB</p>
        </div>
        <div className={styles.menuContainer}>
            <Link href="#main" scroll={false}><p ref={addRefs}><span className={styles.number}>01.</span>About</p></Link>
            <Link href="#experience" scroll={false}><p ref={addRefs}><span className={styles.number}>02.</span>Experience</p></Link>
            <Link href="#work" scroll={false}><p ref={addRefs}><span className={styles.number}>03.</span>Work</p></Link>
            <Link href="#contact" scroll={false}><p ref={addRefs}><span className={styles.number}>04.</span>Contact</p></Link>
        </div>
    </nav>
  )
}
