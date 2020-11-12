import React from 'react'

import { MobileDevicePreview } from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css'

const App = () => {
  return <MobileDevicePreview preSelectedDevice={"ipad"} preSelectedColor={"silver"} >
    <div>Hello</div>
  </MobileDevicePreview>
}

export default App
