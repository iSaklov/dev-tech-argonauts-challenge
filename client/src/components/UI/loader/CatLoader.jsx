// https://codepen.io/Rplus/pen/PWZYRM
import React from 'react';
import classes from './CatLoader.module.css'

const CatLoader = () => {
	return (
		<div className={classes.box}>
			<div className={classes.cat}>
				<div className={classes.cat__body} />
				<div className={classes.cat__body} />
				<div className={classes.cat__tail} />
				<div className={classes.cat__head} />
			</div>
		</div>
	);
};

export default CatLoader;