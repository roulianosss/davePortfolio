import React from 'react'
import styles from '../styles/ContentWork.module.css'
import WorkCard from './WorkCard'

const workData = [
  {
    title: 'Jeu des Cartes Memoire',
    description: 'Simple memory card game in Native JavaScript, html and CSS',
    link: 'https://roulianosss.github.io/memory-card/',
    image: './assets/works/carte-memoire.png'
  },
  {
    title: 'Morpion',
    description: 'TicTacToe in Native JavaScript, HTML and CSS',
    link: 'https://roulianosss.github.io/morpion/',
    image: 'assets/works/morpion.png'
  },
  {
    title: `Password Generator`,
    description: `Simple password generator Native JavaScript, html and CSS`,
    link: 'https://roulianosss.github.io/password-generator/',
    image: '/assets/works/password-generator.png'
  },
  {
    title: `Background Color Generator`,
    description: `Simple Background color generator Native JavaScript, html and CSS`,
    link: 'https://roulianosss.github.io/colors-js/',
    image: '/assets/works/colors.png'
  },
  {
    title: 'Custom Video Player',
    description: 'Custom video player in Native JavaScript, html and CSS',
    link: 'https://roulianosss.github.io/custom-video-player/',
    image: '/assets/works/custom-video-player.png'
  },
  {
    title: 'Form Validation',
    description: 'Form Validation sign up in Native JavaScript, html and CSS',
    link: 'https://roulianosss.github.io/form-validation/',
    image: '/assets/works/form-validation.png'
  },
  {
    title: 'Bug Report Interface',
    description: 'A bug report interface in Native JavaScript, html and CSS',
    link: 'https://roulianosss.github.io/bug-report-interface/',
    image: '/assets/works/bug-report-interface.png'
  },
  {
    title: `Dilla's Drumkit`,
    description: `J Dilla's inspired Drumkit in Native JavaScript, html and CSS`,
    link: 'https://roulianos.github.io/jdilla-drumkit-js/',
    image: '/assets/works/drumkit.png'
  }
]

export default function Work() {

  const cards = workData.map((work, index) => <WorkCard key={index} title={work.title} description={work.description} link={work.link} image={work.image}/>)

  return (
    <div className={styles.container} id='work'>
        <h1>My Work</h1>
        <div className={styles.cardContainer}>
          {cards}
        </div>
    </div>
  )
}
