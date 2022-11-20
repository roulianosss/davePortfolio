import React from 'react'
import styles from '../styles/WorkCard.module.css'
import Link from 'next/link'

export default function WorkCard({title, description, link, image}) {
  return (
    <Link href={link}>
      <div className={styles.container}>
        <h3>{title}</h3><br/>
        <img src={image} alt={image} />
        <p>{description}</p>
      </div>
    </Link>
  )
}
