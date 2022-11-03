[![forthebadge](https://forthebadge.com/images/badges/ages-12.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)

# The Argonauts challenge : Wild Code School work-study entry test

The author aims to develop a web application allowing users to create their own list of aurgonauts, a group of heroes who set out from Iolcos, present-day Volos, with Jason aboard the ship Argo to find the Golden Fleece.

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [Licensing](#licensing)

### General Info

The Argonauts challenge is an educational project requested by The Wild Code School in which the author seeks to demonstrate mastery of the MERN stack (MongoDB, Express.js, React, Node.js) by fulfilling the requirement for the implementation place of CRUD (Create, Read, Update, Delete) (sometimes called SCRUD with an "S" for Search) which designates the four basic operations for the persistence of data, in particular the storage of information in the database.

The author realizes that this project is far from being finished, nor optimized, in particular in the part concerning the treatment of the server errors. Nevertheless, the application is now fully functional and responsive. Additions and possible modifications, as well as performance tests are planned within the framework of continuous learning as the professional evolution of the author progresses.

## Technologies

* [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
* [![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
* [![React](https://img.shields.io/badge/React-v17.0.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
* [![NodeJS](https://img.shields.io/badge/Node.js-v16.13.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

* [![MaterializeCSS](https://img.shields.io/static/v1?label=Materialize&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAABmJLR0QA/wD/AP+gvaeTAAACQklEQVQ4jY2STUgUcRjGf+9/193VVbZZ6VDSB2ZERYewTwovUR2LEi/mIeokSnnSbl7rJtFFCMLwUAZ5LDCQooNJJHSRNiRWMdEyNnN3dnd23g67M7PJQs7pP/O88/ze55kRalyrvcONEsnNAy0A0da26bBlTTb0dI4ArN4ZeiSivQChWP1C7Mixtfqea2dFRLd6mVoAiWSveOYA4YR1CJU+gFR/f1REu32tZc8icDo39vJMLa+aAMVc9AdisTQiu4C23NjzvVYofg5IeHqosWkngIhe2DZA0PP+hjuS6YBsOhA95c8ZsSUUagNwoWNbgMzAQBJo9TdMWH6vKpxEafe1psQXIFJeihOqKv8FOG5de3m+smU0kq0aP64SAIhEFqpetewnk/u2+oXt8RcHXUduld1E7dQ8bGQ8vWDC4XcKlwHUKRxA2e2JpY3NN8BV7z6/+ePS6t2h/YhrjBrHqI6aWHdnCqEVYRB0KNQQD7oUPouYD77h78zyP/Gz9jTwzU+fXrwp6D1RGURUkyP30wbAKKP+UOaXvyGqn/J55yPgVgB/Ag3bSkbmgdnKE1eLhcMB3YxD5RtE60vvAQfVNTdvV/VoZhK3u9aBuXIlG/EgnczI8LCD6iyA5rILqHq/b7E5/TXlA6SrKwfMlfJ2iuBPUFNyX1XOU6qa10LhaBBOpwA0JNMAxfWfQX1CSiYmSj6gHNB95iwvNVTV87r54YOlcnYdL658n0Hw9M26sPMUIH7j+qzrOm8LaytV1fLYO/4FsgfkkSdN3G8AAAAASUVORK5CYII=&color=#ee6e73)](https://materializecss.com)

* [![NodeJS](https://img.shields.io/badge/Materialize-0.100.2-%23ee6e73?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)


<!-- <img src="https://camo.githubusercontent.com/86f17df730ccbbbef991d61bb586bf2d3c165f19cfe334e6e4ba4f97d2dd691a/687474703a2f2f6d6174657269616c697a656373732e636f6d2f7265732f6d6174657269616c697a652e737667" width="40" data-canonical-src="http://materializecss.com/res/materialize.svg" style="max-width: 100%;"> -->

![image](https://img.shields.io/badge/MaterializeCSS-#ee6e73?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAABmJLR0QA/wD/AP+gvaeTAAACQklEQVQ4jY2STUgUcRjGf+9/193VVbZZ6VDSB2ZERYewTwovUR2LEi/mIeokSnnSbl7rJtFFCMLwUAZ5LDCQooNJJHSRNiRWMdEyNnN3dnd23g67M7PJQs7pP/O88/ze55kRalyrvcONEsnNAy0A0da26bBlTTb0dI4ArN4ZeiSivQChWP1C7Mixtfqea2dFRLd6mVoAiWSveOYA4YR1CJU+gFR/f1REu32tZc8icDo39vJMLa+aAMVc9AdisTQiu4C23NjzvVYofg5IeHqosWkngIhe2DZA0PP+hjuS6YBsOhA95c8ZsSUUagNwoWNbgMzAQBJo9TdMWH6vKpxEafe1psQXIFJeihOqKv8FOG5de3m+smU0kq0aP64SAIhEFqpetewnk/u2+oXt8RcHXUduld1E7dQ8bGQ8vWDC4XcKlwHUKRxA2e2JpY3NN8BV7z6/+ePS6t2h/YhrjBrHqI6aWHdnCqEVYRB0KNQQD7oUPouYD77h78zyP/Gz9jTwzU+fXrwp6D1RGURUkyP30wbAKKP+UOaXvyGqn/J55yPgVgB/Ag3bSkbmgdnKE1eLhcMB3YxD5RtE60vvAQfVNTdvV/VoZhK3u9aBuXIlG/EgnczI8LCD6iyA5rILqHq/b7E5/TXlA6SrKwfMlfJ2iuBPUFNyX1XOU6qa10LhaBBOpwA0JNMAxfWfQX1CSiYmSj6gHNB95iwvNVTV87r54YOlcnYdL658n0Hw9M26sPMUIH7j+qzrOm8LaytV1fLYO/4FsgfkkSdN3G8AAAAASUVORK5CYII=&logoColor=white)

## Installation

```
$ git clone https://github.com/iSaklov/dev-tech-argonauts-challenge.git
$ cd dev-tech-argonauts-challenge
$ npm install
$ cd client
$ npm install
$ cd ..
$ npm run dev
```

## Contribute to the project

The Argonauts challenge is an open source project. Feel free to fork the source and contribute with your own features.

## Authors

Our code squad : iSaklov & Global Internet Community.

In particular, special thanks to [![CodePen](https://img.shields.io/badge/Codepen-000000?style=plastic&logo=codepen&logoColor=white)](https://codepen.io) for the inspiration and to [![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=plastic&logo=stack-overflow&logoColor=white)](https://stackoverflow.com) for resolving technical issues.

## Licensing
This project was built under the iSac Creative Studio licence despite his own indifference to the feline family.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=?style=social&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aleh-smaliakou/)

*Dedicated to all cat lovers. :cat2:*
