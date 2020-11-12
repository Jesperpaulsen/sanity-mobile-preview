import React from 'react'

import { MobileDevicePreview } from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css'

const App = () => {
  return <MobileDevicePreview allowedDevices={"iphone-x"} />
}

export default App
