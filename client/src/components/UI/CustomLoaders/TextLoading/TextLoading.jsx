import React from 'react'
import classes from './TextLoading.module.css'

const TextLoading = (props) => {
  const arr = props.text ? props.text.split('') : 'Chargement...'.split('')
  const letters = document.querySelectorAll('.letter')

  if (letters) {
    let delay = 0.48
    let duration = letters.length * 0.12 + delay
    for (const letter of letters) {
      letter.style.animationDelay = delay + 's'
      letter.style.animationDuration = duration + 's'
      delay += 0.12
    }
  }

  return (
    <div className={classes.load__wrapp} {...props}>
      {arr.map((char, i) => (
        <p className={[classes.letter, 'letter'].join(' ')} key={i}>
          {char}
        </p>
      ))}
    </div>
  )
}

export default TextLoading
