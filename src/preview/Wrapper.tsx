import React from "react"
import MobileDeviewPreview from "../MobileDevicePreview"

const Wrapper: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <MobileDeviewPreview>
        <div className="bg-white !flex justify-center items-center w-full h-full">
          <div>Demo</div>
        </div>
      </MobileDeviewPreview>
    </div>
  )
}

export default Wrapper
