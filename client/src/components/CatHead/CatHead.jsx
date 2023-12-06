import React from 'react'
import classes from './CatHead.module.css'

const CatHead = () => {
  return (
    <div className={classes.cat}>
      <div className={[classes.ear, classes.ear__left].join(' ')} />
      <div className={[classes.ear, classes.ear__right].join(' ')} />
      <div className={classes.face}>
        <div className={[classes.eye, classes.eye__left].join(' ')}>
          <div className={classes.eye__pupil} />
        </div>
        <div className={[classes.eye, classes.eye__right].join(' ')}>
          <div className={classes.eye__pupil} />
        </div>
        <div className={classes.muzzle} />
      </div>
    </div>
  )
}

export default CatHead
