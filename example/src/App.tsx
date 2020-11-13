import React from 'react'

import MobileDevicePreview from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css'

const App = () => {
  return <MobileDevicePreview preSelectedDevice={"ipad"} preSelectedColor={"silver"} preSelectedLandscape={true} >
    <div style={{ display: 'flex', justifyContent: 'center' }}> This is a demo 🤠</div>
  </MobileDevicePreview>
}

export default App
