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

* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white&message=test&color=red)](https://www.mongodb.com)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com) <sup>: v4.17.1</sup>
* [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org) <sup>: v17.0.2</sup>
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) <sup>: v16.13.0</sup>


* [![MaterializeCSS](https://img.shields.io/static/v1?label=MaterializeCSS&color=red&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIzNTIiIHZpZXdCb3g9Ii4xMTUgLTE3NjkuOTg0MzMwNDggOTQ1LjA5IDQzNDUuMTQ1MjA0ODkiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0ibTIzMy40ODYgMjMxLjg4NWMzLjQyMi01LjQ3NSA3Ljg3Mi0xMC43MzUgMTQuMjY0LTEzLjMxNSAyLjYyNC0uNDI4IDUuMjQ4LS4yMTIgNy44NzEtLjIxMmgxMjkuMTc3Yy0zLjc2NSAzLjAwNC03LjQxNiA2LjExOS05LjkyNSAxMC4xOTctNi42MTggMTAuMi0xMS4wNzEgMjEuNTc5LTE1LjE3NyAzMi45NTgtMTEuNjQgMzQuMzU4LTE5Ljc0NCA2OS42NzctMjcuNjE5IDEwNC45OTlhMjQwNi42MzQgMjQwNi42MzQgMCAwIDAgLTEwLjE1NCA0OC4wOThjLTkuODE1IDUyLjM5Mi0xOS45NyAxMDQuNjcyLTMyLjYzNyAxNTYuNTI1LTYuMDQ2IDIzLjk0My0xMi4yMSA0Ny44ODMtMjEuNTY2IDcwLjk2NC00LjMzOCA5LjU1Ny04LjU1OCAxOS43NTQtMTYuODg4IDI2LjgzOS0xLjk0IDEuNjEzLTMuODggMy42NS02LjYyMiAzLjMzaC0xMTQuMTExYy03Ljc2LS4yMTUtMTUuNDA2LjQyOC0yMy4xNjYtLjMyMyA1LjEzNy0zLjc1NSA5LjctOC4yNjcgMTIuNjY4LTEzLjYzNSA4LjU1OC0xNS4zNTIgMTMuOTItMzEuOTkxIDE5LjA1Ni00OC41MjYgNy45OS0yNi42MjMgMTQuMzc1LTUzLjU3IDIwLjQyOC04MC41MTcgMy43NjYtMTcuNzEzIDguMjE1LTM1LjMyMiAxMC45NTMtNTMuMTQzIDMuMDgyLTE5Ljg2MSA3Ljc2LTM5LjUwNyAxMS41MjYtNTkuMjYxIDUuOTM0LTI5LjA5NiAxMi4yMDktNTguMTg3IDE5LjE3MS04Ny4wNjcgNS41OTEtMjIuNTQ2IDExLjI5Ny00NC45ODcgMTguOTQyLTY2Ljk5NCAzLjc2OS0xMC42MjcgNy44NzEtMjEuMTQ4IDEzLjgwOS0zMC45MTd6IiBmaWxsPSIjZWI3MDc3IiBzdHJva2U9IiNlYjcwNzciLz48cGF0aCBkPSJtMzg0LjgwNSAyMTguMzUyYzMuMzA3IDAgNi42MTQtLjEwOCA5LjkyNSAwIDcuMzAyIDMuNjUgMTMuNDY2IDkuNDQ1IDE2Ljg4OCAxNi42MzggNC41NjQgOC4xNiA4LjMzMyAxNi43NSAxMS43NTEgMjUuNTUzIDExLjQxNSAzMy4xNzMgMTkuMTc1IDY3LjMxMyAyNi45MzUgMTAxLjM0NWE0MTAzLjUzNyA0MTAzLjUzNyAwIDAgMSAxOC44MjggOTEuNzkyYy40NTggMS42MS0uMTExIDMuODY2IDIuMTY5IDQuMjk0LTguMjE5IDQwLjM2Ni0xNi4zMTkgODAuODQtMjYuNTg4IDEyMC44ODctNS41OTUgMjEuNTc5LTExLjUyOSA0My4wNS0xOS45NjkgNjMuODc4LTQuNTY4IDEwLjQxMi05LjI0NiAyMS43OTEtMTguOTQ2IDI5LjIwMy02LjE2IDEuMjg2LTEwLjYxMy0zLjExNS0xNC4zNzUtNy4wODktNi41MDQtNy44MzYtMTAuNTAyLTE3LjA3LTE0LjM4Mi0yNi4zMDMtMTIuODk3LTMzLjA2Mi0yMC43NjgtNjcuNTI2LTI4Ljc1My0xMDEuODgxLTYuMDUtMjYuNzM1LTExLjQxNS01My42NzgtMTcuMDA2LTgwLjUxNy0yLjUxMy0xMy42MzktNS45MzEtMjcuMDU4LTcuODcxLTQwLjY5LS4zNDQtLjIxNS0xLjE0Ni0uNjQ2LTEuNDg2LS44NThhMjM5OS43MzYgMjM5OS43MzYgMCAwIDEgMTAuMTU1LTQ4LjA5OWM3Ljg3NS0zNS4zMjIgMTUuOTc4LTcwLjY0MyAyNy42MTktMTA0Ljk5NSA0LjEwNS0xMS4zODMgOC41NTgtMjIuNzYxIDE1LjE3Ni0zMi45NTggMi41MTMtNC4wODIgNi4xNi03LjE5NyA5LjkyNi0xMC4yeiIgZmlsbD0iI2Y2YTJhZCIgc3Ryb2tlPSIjZjZhMmFkIi8+PHBhdGggZD0ibTUyNy41NDggMjM2LjkyOWM0LjExMy03LjQwNSA5LjEzMi0xNS42NzIgMTguMDM0LTE4LjQ2NCA0NS4zMDQtLjIxNSA5MC42MDktLjEwNyAxMzUuOTA5LS4xMDctNC4yMjMgMy45Ny04LjY3MyA3Ljk0NC0xMS41MjkgMTIuOTg4LTguNzg0IDE0LjgxNy0xMy45MiAzMS4yNDQtMTkuMTY4IDQ3LjQ1NS0xMy40NjUgNDQuNjYtMjIuOTM2IDkwLjI4Ni0zMS45NTMgMTM1LjkxMy04LjMyOSA0NC45ODctMTcuMjMxIDg5Ljk2Ni0yNy4zODYgMTM0LjczOC01LjI0NyAyMi41NDItMTAuNzI3IDQ0Ljk3OS0xNy42ODYgNjcuMjAxLTQuNDUyIDEzLjc0My05LjEyNyAyNy41OTQtMTYuNDMzIDQwLjM3LTMuNTQgNS43OTYtNy42NDkgMTIuMTM0LTE0LjM3OCAxNS4xMzctNDMuMjUuMzI0LTg2LjYxNSAwLTEyOS44NjEuMTA1LTIuMzk4IDAtNC45MDcgMC03LjMwNS0uMzIgOS43LTcuNDA1IDE0LjM3OC0xOC43ODggMTguOTQ1LTI5LjIwMyA4LjQ0NC0yMC44MjUgMTQuMzc1LTQyLjI5NiAxOS45Ny02My44NzUgMTAuMjY5LTQwLjA0NyAxOC4zNjktODAuNTE3IDI2LjU4OC0xMjAuODg3IDkuOTI1LTUyLjA2OSAyMC4zMTMtMTA0LjEzNyAzMy41NDktMTU1LjU2MyA2LjE2LTIyLjIyMiAxMi4wOTUtNDQuNzY3IDIyLjcwOC02NS40ODh6IiBmaWxsPSIjZWI3MDc3IiBzdHJva2U9IiNlYjcwNzciLz48cGF0aCBkPSJtNjgxLjQ4NiAyMTguMzUyYzMuNjUgMCA3LjQxNi0uMTA4IDExLjA2NyAwIDUuOTM1IDIuODk5IDEwLjE1OCA3LjgzNiAxMy45MjQgMTIuODggNi4xNiA5LjIzNCAxMC4wNCAxOS42NSAxNC4wMzUgMjkuODQ3IDkuNDcxIDI3LjM3NyAxNi41NDcgNTUuNTA2IDIzLjA1MSA4My42MzIgOC42NzMgMzcuODk4IDE2LjIwNCA3Ni4wMTEgMjMuNjIgMTE0LjEyMSAxLjgyNiA5LjEyNiAzLjY1MSAxOC4zNTcgNC43OTMgMjcuNTk0bDEuNzExIDEuNjA5Yy00LjEwNSA1LjM2OC01LjcwNSAxMS44MS03Ljk4NSAxNy45MjktNy4xOTEgMjEuNzk1LTExLjg3IDQ0LjM0LTE1Ljg2NCA2Ni43NzgtMy4wNzkgMTcuNjA1LTcuMzAyIDM1LjEwNi0xMy4xMjIgNTIuMDY4LTQuMzM1IDEyLjU2MS05LjU4NiAyNS4wMTQtMTguMjU1IDM1LjUzNC00LjExMyA1LjA0OC05LjcwNCA4LjkxMS0xNS44NjQgMTEuNDg3LTkuNDcxLjk2Ni0xNS4wNjYtNy42MjEtMTkuNjMtMTMuOTU1LTkuNDcxLTE1LjU2OC0xNC42MDQtMzIuOTU4LTIwLjA4NC00OS45MjMtMTguMDI5LTYyLjgwNS0yOS43ODQtMTI3LjExMS00Mi40NDgtMTkwLjk4OWEyLjcxOCAyLjcxOCAwIDAgMCAtLjQ5My0xLjMyMSAyLjk0NCAyLjk0NCAwIDAgMCAtMS4xMDctLjkzNWM5LjAxNy00NS42MjcgMTguNDg4LTkxLjI1MyAzMS45NTQtMTM1LjkxMyA1LjI0Ny0xNi4yMTEgMTAuMzgzLTMyLjYzOCAxOS4xNzEtNDcuNDU1IDIuODUzLTUuMDQ0IDcuMzAyLTkuMDE4IDExLjUyNi0xMi45ODh6bS02ODEuMzcxIDI0NC4yMzljMi45NzEtLjIxNSA1LjkzOC0uNjQzIDkuMDE3LS42NDNoMTI0LjM4NGM1LjI0Ny42NDMgMTAuNzI3LjIxNiAxNS43NDkgMi4zNjQgNy4zNTQgMi44NDQgMTMuNzcyIDcuNDc1IDE4LjU5OSAxMy40Mi41NzMtLjMyMyAxLjYtMS4xODIgMi4xNjktMS42MTMtMi43MzggMTcuODIxLTcuMTg3IDM1LjQyNi0xMC45NTMgNTMuMTQyLTYuMDQ5IDI2Ljk0Ny0xMi40MzggNTMuODk0LTIwLjQyOCA4MC41MTgtNS4xMzYgMTYuNTM0LTEwLjQ5OCAzMy4xNzMtMTkuMDU2IDQ4LjUyNi0yLjk2OCA1LjM2Ny03LjUzMSA5Ljg3Ni0xMi42NjggMTMuNjM1LTEuOTQuMzIzLTMuNDIyLS45NjctNS4wMjItMS45MzMtNS4zNjItMy4yMi04LjQ0NC04LjgwMy0xMS43NTEtMTMuODQ4LTE1LjYzNS0zMy40OTYtMTcuMzQ2LTcwLjUzNi0yNy4wNDYtMTA1LjUzNC00LjkwNy0xNy40OTgtMTAuOTU3LTM0Ljg5MS0xOS44NTUtNTAuOTk0LTUuNDgtOS42NjUtMTIuMjEtMTguODk1LTIwLjk5Ny0yNi4zMDQtNi41MDMtNC45MzctMTQuMDM4LTguOTEtMjIuMTM4LTEwLjczNnoiIGZpbGw9IiNmNmEyYWQiIHN0cm9rZT0iI2Y2YTJhZCIvPjxwYXRoIGQ9Im03ODMuNzM0IDQ3My43NjhjNy4xODgtNy42MjQgMTcuOTE1LTEyLjQ1MyAyOC43NTctMTIuMDI1aDkzLjU3M2MxMy4wMDcuMjE2IDI2LjEzLS40MjggMzkuMTQxLjMyMy0zLjg4IDIuNDY5LTguNTU5IDMuNDM1LTEyLjY2OCA1LjQ3Ni0xNC4yNjQgNi4xMTktMjYuNDczIDE2LjMxNS0zNC4yMzMgMjkuMDkyLTEyLjQzOSAyMC40LTE2Ljc3NyA0My44MDUtMjAuNDI4IDY2Ljc3OC0zLjY1MSAyMi41NDUtMy41MzYgNDUuODQyLTExLjI5NiA2Ny43NDQtNS4yNDggMTUuMzUyLTEzLjIzNyAzMC44MDktMjcuMDQ2IDQwLjkwMi00Mi45MDMuNDMxLTg1LjgxMy4xMDctMTI4LjYwNS4yMTUtMi44NTIgMC01LjU5MS4xMDUtOC4zMjktLjQzMSA2LjE2LTIuNTczIDExLjc1MS02LjQzOCAxNS44Ni0xMS40ODYgOC42NzMtMTAuNTIxIDEzLjkyNC0yMi45NzQgMTguMjU5LTM1LjUzNCA1LjgyLTE2Ljk2NiAxMC4wNDQtMzQuNDY0IDEzLjEyMi01Mi4wNjkgMy45OTUtMjIuNDM4IDguNjczLTQ0Ljk4NyAxNS44NjQtNjYuNzc4IDIuMjgtNi4xMTggMy44OC0xMi41NiA3Ljk4Ni0xNy45MjggMy40MjUtNC43MjUgNS43MDUtMTAuMjAxIDEwLjA0My0xNC4yNzl6IiBmaWxsPSIjZWI3MDc3IiBzdHJva2U9IiNlYjcwNzciLz48L2c+PC9zdmc+&logoWidth=40&logoColor=violet)](https://materializecss.com)

<!-- <img src="https://camo.githubusercontent.com/86f17df730ccbbbef991d61bb586bf2d3c165f19cfe334e6e4ba4f97d2dd691a/687474703a2f2f6d6174657269616c697a656373732e636f6d2f7265732f6d6174657269616c697a652e737667" width="40" data-canonical-src="http://materializecss.com/res/materialize.svg" style="max-width: 100%;"> -->

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
