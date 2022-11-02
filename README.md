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

* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB&message=v4.17.1)](https://expressjs.com) <sup>: v4.17.1</sup>
* [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org) <sup>: v17.0.2</sup>
* [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) <sup>: v16.13.0</sup>

* [![TEST](https://img.shields.io/static/v1?label=Materialize&style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSIxMDBweCIgaGVpZ2h0PSIxMDBweCI+PHBhdGggZD0iTSAxMCA1IEMgNy4yNTA0ODM5IDUgNSA3LjI1MDQ4MzkgNSAxMCBMIDUgMTYuOTUxMTcyIEEgMS4wMDA1NjQ2IDEuMDAwNTY0NiAwIDAgMCA1IDE3LjA1MDc4MSBMIDUgMjguMjI4NTE2IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCA1IDI4LjQ1MzEyNSBMIDUgNDAgQyA1IDQyLjc0OTUxNiA3LjI1MDQ4MzkgNDUgMTAgNDUgTCA0MCA0NSBDIDQyLjc0OTUxNiA0NSA0NSA0Mi43NDk1MTYgNDUgNDAgTCA0NSAyOC40NjA5MzggQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDQ1IDI4LjIzNjMyOCBMIDQ1IDE2Ljk5MjE4OCBMIDQ1IDEwIEMgNDUgNy4yNTA0ODM5IDQyLjc0OTUxNiA1IDQwIDUgTCAxMCA1IHogTSAxMCA3IEwgNDAgNyBDIDQxLjY2ODQ4NCA3IDQzIDguMzMxNTE2MSA0MyAxMCBMIDQzIDEzLjU4Mzk4NCBDIDQyLjczMzg1NSAxMy4wNjI0MDYgNDIuNDQyODg1IDEyLjUzNzM5NSA0Mi4wNTA3ODEgMTIuMDc0MjE5IEMgNDEuNTc5NzE1IDExLjUxNzc2OCA0MC44ODEgMTEgNDAgMTEgQyAzOS40NzUyMjMgMTEgMzkuMDY5NzkxIDExLjE2MjUxNCAzOC43Mjg1MTYgMTEuMzYxMzI4IEMgMzguNzAzNzc2IDExLjI3MTM1OCAzOC43Mjk5MTkgMTEuMjc1NTM4IDM4LjY5OTIxOSAxMS4xODM1OTQgQyAzOC41NDI1OTkgMTAuNzEzNzI1IDM4LjMwMTY2NiAxMC4yMDAxMDQgMzcuODYzMjgxIDkuNzYxNzE4OCBDIDM3LjQyNDg5NiA5LjMyMzMzMzggMzYuNzUgOSAzNiA5IEMgMzUgOSAzNC4zMTQ2OSA5LjU0NTk0NiAzMy41MzMyMDMgMTAuMTQ0NTMxIEMgMzIuNzUxNzE2IDEwLjc0MzExNyAzMS45MTIxMDYgMTEuNDg5MDY1IDMxIDEyLjIxODc1IEMgMjkuMTc1Nzg4IDEzLjY3ODExOSAyNy4xIDE1IDI1IDE1IEMgMjIuOSAxNSAyMC44MjQyMTIgMTMuNjc4MTE5IDE5IDEyLjIxODc1IEMgMTguMDg3ODk0IDExLjQ4OTA2NSAxNy4yNDgyODQgMTAuNzQzMTE3IDE2LjQ2Njc5NyAxMC4xNDQ1MzEgQyAxNS42ODUzMSA5LjU0NTk0NiAxNSA5IDE0IDkgQyAxMy4yNSA5IDEyLjU3NTEwNCA5LjMyMzMzMzkgMTIuMTM2NzE5IDkuNzYxNzE4OCBDIDExLjY5ODMzNCAxMC4yMDAxMDQgMTEuNDU3NDA0IDEwLjcxMzcyNSAxMS4zMDA3ODEgMTEuMTgzNTk0IEMgMTEuMjcwMTMxIDExLjI3NTUzNCAxMS4yOTYxODQgMTEuMjcxMzY0IDExLjI3MTQ4NCAxMS4zNjEzMjggQyAxMC45MzAyMTIgMTEuMTYyNTE0IDEwLjUyNDc3NyAxMSAxMCAxMSBDIDkuMTE5IDExIDguNDIwMjg0OSAxMS41MTc3NjggNy45NDkyMTg4IDEyLjA3NDIxOSBDIDcuNTU3MTE0NiAxMi41MzczOTUgNy4yNjYxNDQ3IDEzLjA2MjQwNiA3IDEzLjU4Mzk4NCBMIDcgMTAgQyA3IDguMzMxNTE2MSA4LjMzMTUxNjEgNyAxMCA3IHogTSAxNCAxMSBDIDE0IDExIDE0LjU2NDY5IDExLjIwNDA1NCAxNS4yNTE5NTMgMTEuNzMwNDY5IEMgMTUuOTM5MjE2IDEyLjI1Njg4MyAxNi43ODcxMDYgMTMuMDEwOTM1IDE3Ljc1IDEzLjc4MTI1IEMgMTkuNjc1Nzg4IDE1LjMyMTg4MSAyMi4xIDE3IDI1IDE3IEMgMjcuOSAxNyAzMC4zMjQyMTIgMTUuMzIxODgxIDMyLjI1IDEzLjc4MTI1IEMgMzMuMjEyODk0IDEzLjAxMDkzNSAzNC4wNjA3ODQgMTIuMjU2ODgzIDM0Ljc0ODA0NyAxMS43MzA0NjkgQyAzNS40MzUzMSAxMS4yMDQwNTQgMzYgMTEgMzYgMTEgQyAzNi4yNSAxMSAzNi4zMjUxMDQgMTEuMDUxNjcgMzYuNDQ5MjE5IDExLjE3NTc4MSBDIDM2LjU3MzMzNCAxMS4yOTk4OTYgMzYuNzA3NDA0IDExLjUzNjI3NSAzNi44MDA3ODEgMTEuODE2NDA2IEMgMzYuOTg3NTM2IDEyLjM3NjY3IDM3IDEzIDM3IDEzIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAzNy4wMjkyOTcgMTMuMjQ0MTQxIEMgMzcuMDY4NzY3IDEzLjQwMTU3NCAzNy4xNjUxNTcgMTMuNjM4Nzg1IDM3LjQwMjM0NCAxMy44MjgxMjUgQyAzNy42Mzk1MyAxNC4wMTc0NjUgMzcuOTY0MzY0IDE0LjA3MTY3NyAzOC4xNjQwNjIgMTQuMDUyNzM0IEMgMzguNTYzNDYgMTQuMDE0ODU0IDM4LjY2MjYxMyAxMy44OTI1MDQgMzguNzcxNDg0IDEzLjgxODM1OSBDIDM4Ljk4OTIyNyAxMy42NzAwNyAzOS4xMjU4ODUgMTMuNTQwMzIxIDM5LjI4NzEwOSAxMy40MTAxNTYgQyAzOS42MDk1NTYgMTMuMTQ5ODI3IDM5Ljk1MDMzMyAxMyA0MCAxMyBDIDQwLjExOSAxMyA0MC4yNTk0MjUgMTMuMDUzMDEgNDAuNTI1MzkxIDEzLjM2NzE4OCBDIDQwLjc5MTM1NiAxMy42ODEzNjEgNDEuMDg3Nzc0IDE0LjIwNjMyMiA0MS4zNzEwOTQgMTQuNzgxMjUgQyA0MS42NTQ0MTQgMTUuMzU2MTc4IDQxLjkyODE2OSAxNS45NzU5NzUgNDIuMjQ2MDk0IDE2LjUzMzIwMyBDIDQyLjQ1MDEzNCAxNi44OTA4MjYgNDIuNjY4MDc0IDE3LjI1MzgzMSA0MyAxNy41NDQ5MjIgTCA0MyAyOC4wOTU3MDMgQyA0MS41MDYzNTIgMzEuMDAwMjIgMzguNDkyNTgxIDMzIDM1IDMzIEMgMzMuNTQ1MTMyIDMzIDMyLjE4NTU2OSAzMi42Mzg3MDkgMzAuOTcwNzAzIDMyLjAyNTM5MSBDIDMwLjgzNTk4IDMxLjAxOTE2NyAzMC4xNzIwMTQgMzAuMTQ0OCAyOS4yNDAyMzQgMjkuNDE2MDE2IEMgMjguMTk0MzUxIDI4LjU5Nzk4NSAyNi43MzA1NTYgMjggMjUgMjggQyAyMy4yNjk0NDQgMjggMjEuODA1NjQ5IDI4LjU5Nzk4NSAyMC43NTk3NjYgMjkuNDE2MDE2IEMgMTkuODI3OTg2IDMwLjE0NDggMTkuMTY0MDIgMzEuMDE5MTY3IDE5LjAyOTI5NyAzMi4wMjUzOTEgQyAxNy44MTQ0MzEgMzIuNjM4NzA5IDE2LjQ1NDg2OCAzMyAxNSAzMyBDIDExLjUwNzQxOSAzMyA4LjQ5MzY0OTIgMzEuMDAwMjIgNyAyOC4wOTU3MDMgTCA3IDE3LjU0NDkyMiBDIDcuMzMxOTI2IDE3LjI1MzgzMSA3LjU0OTg2NTUgMTYuODkwODI2IDcuNzUzOTA2MiAxNi41MzMyMDMgQyA4LjA3MTgzMTQgMTUuOTc1OTc1IDguMzQ1NTg2NiAxNS4zNTYxNzggOC42Mjg5MDYyIDE0Ljc4MTI1IEMgOC45MTIyMjYxIDE0LjIwNjMyMiA5LjIwODY0NDIgMTMuNjgxMzYxIDkuNDc0NjA5NCAxMy4zNjcxODggQyA5Ljc0MDU3NDUgMTMuMDUzMDEzIDkuODgxIDEzIDEwIDEzIEMgMTAuMDQ5NjcgMTMgMTAuMzkwNDQxIDEzLjE0OTgyNyAxMC43MTI4OTEgMTMuNDEwMTU2IEMgMTAuODc0MTE1IDEzLjU0MDMyMSAxMS4wMTA3NzMgMTMuNjcwMDcgMTEuMjI4NTE2IDEzLjgxODM1OSBDIDExLjMzNzM4NyAxMy44OTI1MDkgMTEuNDM2NTQgMTQuMDE0ODQ5IDExLjgzNTkzOCAxNC4wNTI3MzQgQyAxMi4wMzU2MzUgMTQuMDcxNjc0IDEyLjM2MDQ3IDE0LjAxNzQ2NCAxMi41OTc2NTYgMTMuODI4MTI1IEMgMTIuODM0ODQzIDEzLjYzODc4NSAxMi45MzEyMzMgMTMuNDAxNTc0IDEyLjk3MDcwMyAxMy4yNDQxNDEgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDEzIDEzIEMgMTMgMTMgMTMuMDEyNDYgMTIuMzc2NjcgMTMuMTk5MjE5IDExLjgxNjQwNiBDIDEzLjI5MjU5OSAxMS41MzYyNzUgMTMuNDI2NjY2IDExLjI5OTg5NiAxMy41NTA3ODEgMTEuMTc1NzgxIEMgMTMuNjc0ODk2IDExLjA1MTY2NiAxMy43NSAxMSAxNCAxMSB6IE0gMTEuMDQ0OTIyIDEyLjczMjQyMiBDIDExLjA0NDM2MSAxMi43Njc4ODggMTEgMTMgMTEgMTMgTCAxMS4wMjkyOTcgMTIuNzU1ODU5IEMgMTEuMDMwNjk3IDEyLjc1MDM1OSAxMS4wNDMzMTIgMTIuNzM4MzEyIDExLjA0NDkyMiAxMi43MzI0MjIgeiBNIDM4Ljk1NTA3OCAxMi43MzI0MjIgQyAzOC45NTY2NzggMTIuNzM4MzIyIDM4Ljk2OTMzMyAxMi43NTAzODkgMzguOTcwNzAzIDEyLjc1NTg1OSBMIDM5IDEzIEMgMzkgMTMgMzguOTU1NjM4IDEyLjc2Nzg4OCAzOC45NTUwNzggMTIuNzMyNDIyIHogTSAxNSAxNiBDIDExLjY5ODM3NSAxNiA5IDE4LjY5ODM3NSA5IDIyIEwgOSAyNCBDIDkgMjcuMzAxNjI1IDExLjY5ODM3NSAzMCAxNSAzMCBDIDE4LjMwMTYyNSAzMCAyMSAyNy4zMDE2MjUgMjEgMjQgTCAyMSAyMiBDIDIxIDE4LjY5ODM3NSAxOC4zMDE2MjUgMTYgMTUgMTYgeiBNIDM1IDE2IEMgMzEuNjk4Mzc1IDE2IDI5IDE4LjY5ODM3NSAyOSAyMiBMIDI5IDI0IEMgMjkgMjcuMzAxNjI1IDMxLjY5ODM3NSAzMCAzNSAzMCBDIDM4LjMwMTYyNSAzMCA0MSAyNy4zMDE2MjUgNDEgMjQgTCA0MSAyMiBDIDQxIDE4LjY5ODM3NSAzOC4zMDE2MjUgMTYgMzUgMTYgeiBNIDE1IDE4IEMgMTcuMjIwMzc1IDE4IDE5IDE5Ljc3OTYyNSAxOSAyMiBMIDE5IDI0IEMgMTkgMjYuMjIwMzc1IDE3LjIyMDM3NSAyOCAxNSAyOCBDIDEyLjc3OTYyNSAyOCAxMSAyNi4yMjAzNzUgMTEgMjQgTCAxMSAyMiBDIDExIDE5Ljc3OTYyNSAxMi43Nzk2MjUgMTggMTUgMTggeiBNIDM1IDE4IEMgMzcuMjIwMzc1IDE4IDM5IDE5Ljc3OTYyNSAzOSAyMiBMIDM5IDI0IEMgMzkgMjYuMjIwMzc1IDM3LjIyMDM3NSAyOCAzNSAyOCBDIDMyLjc3OTYyNSAyOCAzMSAyNi4yMjAzNzUgMzEgMjQgTCAzMSAyMiBDIDMxIDE5Ljc3OTYyNSAzMi43Nzk2MjUgMTggMzUgMTggeiBNIDE1IDIwIEMgMTQuNzEgMjAgMTQuNDI5Njg4IDIwLjA1OTY4NyAxNC4xNzk2ODggMjAuMTc5Njg4IEMgMTQuNjY5Njg4IDIwLjQwOTY4NyAxNSAyMC45MSAxNSAyMS41IEMgMTUgMjIuMzMgMTQuMzMgMjMgMTMuNSAyMyBDIDEzLjMyIDIzIDEzLjE2IDIyLjk3MDE1NiAxMyAyMi45MTAxNTYgTCAxMyAyNCBDIDEzIDI1LjEgMTMuOSAyNiAxNSAyNiBDIDE2LjEgMjYgMTcgMjUuMSAxNyAyNCBMIDE3IDIyIEMgMTcgMjEuNDUgMTYuNzgwMTU2IDIwLjk0OTg0NCAxNi40MTAxNTYgMjAuNTg5ODQ0IEMgMTYuMDUwMTU2IDIwLjIxOTg0NCAxNS41NSAyMCAxNSAyMCB6IE0gMzUgMjAgQyAzNC43MSAyMCAzNC40Mjk2ODggMjAuMDU5Njg3IDM0LjE3OTY4OCAyMC4xNzk2ODggQyAzNC42Njk2ODggMjAuNDA5Njg3IDM1IDIwLjkxIDM1IDIxLjUgQyAzNSAyMi4zMyAzNC4zMyAyMyAzMy41IDIzIEMgMzMuMzIgMjMgMzMuMTYgMjIuOTcwMTU2IDMzIDIyLjkxMDE1NiBMIDMzIDI0IEMgMzMgMjUuMSAzMy45IDI2IDM1IDI2IEMgMzYuMSAyNiAzNyAyNS4xIDM3IDI0IEwgMzcgMjIgQyAzNyAyMS40NSAzNi43ODAxNTYgMjAuOTQ5ODQ0IDM2LjQxMDE1NiAyMC41ODk4NDQgQyAzNi4wNTAxNTYgMjAuMjE5ODQ0IDM1LjU1IDIwIDM1IDIwIHogTSAyNSAzMCBDIDI2LjI2OTQ0NCAzMCAyNy4zMDU2NDkgMzAuNDM5NTE1IDI4LjAwOTc2NiAzMC45OTAyMzQgQyAyOC42NzMwMTcgMzEuNTA4OTkyIDI4Ljk1NDYyNiAzMi4xNDQ1MjMgMjguOTg2MzI4IDMyLjM1MTU2MiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjguOTUxMTcyIDMyLjUzNTE1NiBDIDI4Ljg1NjU1MyAzMi43MTU0MjQgMjguNjA0NzM3IDMzLjAyNDE5NyAyOC4wNjI1IDMzLjMxNDQ1MyBDIDI3LjMzNDUxOCAzMy43MDQxMzggMjYuMjI2NTcgMzQgMjUgMzQgQyAyMy43NzM0MyAzNCAyMi42NjU0ODIgMzMuNzA0MTM4IDIxLjkzNzUgMzMuMzE0NDUzIEMgMjEuODk4OTQ3IDMzLjI5MzgxNiAyMS44Nzc0ODcgMzMuMjcyNzM1IDIxLjg0MTc5NyAzMy4yNTE5NTMgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIxLjczNDM3NSAzMy4xODM1OTQgQyAyMS4zNDQwMDYgMzIuOTM0Mzg5IDIxLjEyNzAyMSAzMi42ODgyNzIgMjEuMDQ2ODc1IDMyLjUzNTE1NiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjEuMDEzNjcyIDMyLjM1MTU2MiBDIDIxLjA0NTM3NCAzMi4xNDQ1MjMgMjEuMzI2OTgzIDMxLjUwODk5MiAyMS45OTAyMzQgMzAuOTkwMjM0IEMgMjIuNjk0MzUxIDMwLjQzOTUxNSAyMy43MzA1NTYgMzAgMjUgMzAgeiBNIDcgMzEuNTMzMjAzIEMgOS4wMDg4NDQ5IDMzLjY2NDQwNyAxMS44NTIzNiAzNSAxNSAzNSBDIDE2LjYzNjY5MyAzNSAxOC4xODYwNDQgMzQuNjI0Njk0IDE5LjU4NTkzOCAzMy45Nzg1MTYgQyAxOS43MjcyMDQgMzQuMTUxOTM0IDE5Ljg5NTIwOSAzNC4zMDc4MDggMjAuMDcyMjY2IDM0LjQ1NzAzMSBDIDIwLjAzNzE4NyAzNC42MzU1ODkgMjAgMzQuODE0MjMgMjAgMzQuOTk4MDQ3IEMgMjAgMzYuMTQzMDMzIDIwLjU2Mzc1NyAzNy4yNjA5OCAyMS40MTk5MjIgMzguMjM2MzI4IEMgMjIuMjc2MDg3IDM5LjIxMTY3NiAyMy41MDk3ODEgNDAuMDM5MDYyIDI1IDQwLjAzOTA2MiBDIDI2LjQ5MDIxOSA0MC4wMzkwNjIgMjcuNzIzOTEzIDM5LjIxMTY3NiAyOC41ODAwNzggMzguMjM2MzI4IEMgMjkuNDM2MjQzIDM3LjI2MDk4IDMwIDM2LjE0MzAzMyAzMCAzNC45OTgwNDcgQyAzMCAzNC44MTQyMyAyOS45NjI4MTMgMzQuNjM1NTg5IDI5LjkyNzczNCAzNC40NTcwMzEgQyAzMC4xMDQ3OTEgMzQuMzA3ODA4IDMwLjI3Mjc5NiAzNC4xNTE5MzQgMzAuNDE0MDYyIDMzLjk3ODUxNiBDIDMxLjgxMzk1NiAzNC42MjQ2OTQgMzMuMzYzMzA3IDM1IDM1IDM1IEMgMzguMTQ3NjQgMzUgNDAuOTkxMTU1IDMzLjY2NDQwNyA0MyAzMS41MzMyMDMgTCA0MyA0MCBDIDQzIDQxLjY2ODQ4NCA0MS42Njg0ODQgNDMgNDAgNDMgTCAxMCA0MyBDIDguMzMxNTE2MSA0MyA3IDQxLjY2ODQ4NCA3IDQwIEwgNyAzMS41MzMyMDMgeiBNIDIyLjEzNDc2NiAzNS41NDg4MjggQyAyMi45OTI0OTMgMzUuODMxNDIxIDIzLjk1ODQxNCAzNiAyNSAzNiBDIDI2LjA0MTU4NiAzNiAyNy4wMDc1MDcgMzUuODMxNDIxIDI3Ljg2NTIzNCAzNS41NDg4MjggQyAyNy43MTk3ODIgMzUuOTYyODQxIDI3LjQ2MDQwNiAzNi40ODI0NzMgMjcuMDc4MTI1IDM2LjkxNzk2OSBDIDI2LjQ4Njc5IDM3LjU5MTYyMSAyNS43MTk3ODEgMzguMDM5MDYyIDI1IDM4LjAzOTA2MiBDIDI0LjI4MDIxOSAzOC4wMzkwNjIgMjMuNTEzMjEgMzcuNTkxNjIxIDIyLjkyMTg3NSAzNi45MTc5NjkgQyAyMi41Mzk1OTQgMzYuNDgyNDczIDIyLjI4MDIxOCAzNS45NjI4NDEgMjIuMTM0NzY2IDM1LjU0ODgyOCB6Ii8+PC9zdmc+&message=v1.2&color=red)](https://materializecss.com)

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
