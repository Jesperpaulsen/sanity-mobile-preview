import React, { useEffect, useState } from 'react'
import { MobileDevice, MobileDeviceColors, MobileDevices } from '../index'
import { BuildDevice } from './BuildDevice'
import { Menu } from './Menu'
import { devices } from '../devices'

export interface IMobileDeviceProps {
  allowedDevices?: MobileDevices[]
  preSelectedDevice?: MobileDevices
  preSelectedColor?: MobileDeviceColors
  showMenu?: boolean
  children?: any
}

export const MobileDevicePreview: React.FC<IMobileDeviceProps> = ({
  allowedDevices,
  preSelectedDevice,
  preSelectedColor = 'black',
  showMenu = true,
  children
}: IMobileDeviceProps) => {
  const [selectedDevice, setSelectedDevice] = useState<MobileDevice>()
  const [selectedColor, setSelectedColor] = useState<MobileDeviceColors>(
    'black'
  )

  useEffect(() => {
    setPreselectedDevice()
  }, [])

  const setPreselectedDevice = () => {
    let device: MobileDevice
    if (preSelectedDevice && allowedDevices && allowedDevices.length > 0) {
      device = checkPreSelectedDeviceAndAllowedDevices(
        preSelectedDevice,
        allowedDevices
      )
    } else if (preSelectedDevice) {
      device = devices[preSelectedDevice]
    } else if (allowedDevices && allowedDevices.length > 0) {
      device = devices[allowedDevices[0]]
    } else {
      device = devices['iphone-x']
    }
    setPreselectedColorForDevice(device)
    setSelectedDevice(device || devices['iphone-x'])
  }

  const checkPreSelectedDeviceAndAllowedDevices = (
    device: MobileDevices,
    possibleDevices: MobileDevices[]
  ) => {
    if (device && possibleDevices.includes(device)) {
      return devices[device]
    } else {
      console.error(
        'The preselected device was not included in the allowedDevices. Defaulting to the first allowed device'
      )
      return devices[possibleDevices[0]]
    }
  }

  const setPreselectedColorForDevice = (device: MobileDevice) => {
    if (device.colors.includes(preSelectedColor)) {
      setSelectedColor(preSelectedColor)
    } else {
      console.error(
        `Color ${preSelectedColor} can't be chosen for device ${device.readableName}`
      )
      setSelectedColor('black')
    }
  }

  const updateSelectedDevice = (
    updatedDevice: MobileDevice,
    updatedColor: MobileDeviceColors
  ) => {
    setSelectedDevice(updatedDevice)
    setSelectedColor(updatedColor)
  }

  return selectedDevice ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}
    >
      {showMenu && (
        <Menu
          selectedDevice={selectedDevice}
          selectedColor={selectedColor}
          allowedDevices={allowedDevices}
          updateSelectedDevice={updateSelectedDevice}
        />
      )}
      <BuildDevice
        selectedDevice={selectedDevice}
        selectedColor={selectedColor}
        landscape={false}
      >
        {children}
      </BuildDevice>
    </div>
  ) : (
    <div>Something strange happened</div>
  )
}
