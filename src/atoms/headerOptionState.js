import { atom } from "recoil"

const headerOptionState = atom({
  key: 'HeaderOption',
  default: "Home"
})

export default headerOptionState