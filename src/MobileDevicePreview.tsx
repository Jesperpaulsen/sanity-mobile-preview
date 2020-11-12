import React from 'react'
import { MobileDevices } from './index'
import { BuildDevice } from './BuildDevice'

export interface IMobileDeviceProps {
  allowedDevices?: MobileDevices
  showMenu?: boolean
  children: any
}

export const MobileDevicePreview: React.FC<IMobileDeviceProps> = ({
  allowedDevices,
  showMenu,
  children
}: IMobileDeviceProps) => {
  console.log(allowedDevices, showMenu)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        paddingTop: '10px'
      }}
    >
      <BuildDevice mobileDevice='note8' selectedColor='black' landscape={false}>
        {children}
      </BuildDevice>
    </div>
  )
}
