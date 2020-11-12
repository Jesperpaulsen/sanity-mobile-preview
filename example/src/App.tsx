import React from 'react'

import { MobileDevicePreview } from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css'

const App = () => {
  return <MobileDevicePreview preSelectedDevice={"ipad"} allowedDevices={["iphone-x", "ipad"]} preSelectedColor={"silver"} showMenu={false}>
    <div>Hello</div>
  </MobileDevicePreview>
}

export default App
