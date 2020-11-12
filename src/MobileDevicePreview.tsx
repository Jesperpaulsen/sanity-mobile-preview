import React from 'react'
import { MobileDevices } from './index'
import { BuildDevice } from './BuildDevice'

export interface IMobileDeviceProps {
  allowedDevices?: MobileDevices
}

export const MobileDevicePreview: React.FC<IMobileDeviceProps> = ({
  allowedDevices
}: IMobileDeviceProps) => {
  console.log(allowedDevices)
  return (
    <BuildDevice
      mobileDevice='iphone-x'
      selectedColor='black'
      landscape={false}
    >
      <h1>Test</h1>
    </BuildDevice>
  )
}
