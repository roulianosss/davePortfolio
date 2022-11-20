import React from 'react'
import styles from '../styles/ContentExperience.module.css'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContentExperience() {
  return (
    <div className={styles.container} id='experience'>
        <h3>Skills</h3>
        <p>Currently student at La Capsule</p>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} color='#60f2d2' /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3Alt} color='#60f2d2' /> CSS</li>
          <li><FontAwesomeIcon icon={faSquareJs} color='#60f2d2' /> JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} color='#60f2d2' /> ReactJS</li>
          <li><img src="./assets/next-js.svg" alt="" /> NextJS</li>
          <li><FontAwesomeIcon icon={faNodeJs} color='#60f2d2' /> NodeJS</li>
        </ul>
    </div>
  )
}
