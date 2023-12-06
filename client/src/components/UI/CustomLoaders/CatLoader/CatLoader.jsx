// https://codepen.io/Rplus/pen/PWZYRM
import React from 'react'
import TextLoading from '../TextLoading/TextLoading'
import classes from './CatLoader.module.css'

const CatLoader = (props) => {
  return (
    <div className={classes.box} {...props}>
      <div className={classes.cat}>
        <div className={classes.cat__body} />
        <div className={classes.cat__body} />
        <div className={classes.cat__tail} />
        <div className={classes.cat__head} />
      </div>
      {props.text ? <TextLoading text={props.text} /> : null}
    </div>
  )
}

export default CatLoader
