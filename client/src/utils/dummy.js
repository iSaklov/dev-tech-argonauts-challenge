import { v4 as uuidv4 } from 'uuid'

export default function getDummy() {
  const dummy = {
    _id: uuidv4(),
    name: undefined,
    date: undefined,
    img: undefined,
    owner: undefined
  }

  return dummy
}
