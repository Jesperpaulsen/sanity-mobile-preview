import React, { useState } from 'react'
import { devices } from '../devices'
import { MobileDevice, MobileDeviceColors, MobileDevices } from '../index'
import { Dropdown } from './Dropdown'

interface IMenuProps {
  selectedDevice: MobileDevice
  allowedDevices?: MobileDevices[]
  selectedColor: MobileDeviceColors
  updateSelectedDevice: (
    device: MobileDevice,
    color: MobileDeviceColors
  ) => void
}

const capitalizeString = (stringToCapitalize: string) => {
  let res = ''
  if (stringToCapitalize.length > 0)
    res += stringToCapitalize.charAt(0).toUpperCase()
  if (stringToCapitalize.length > 1) res += stringToCapitalize.slice(1)
  return res
}

export const Menu: React.FC<IMenuProps> = ({
  selectedDevice,
  allowedDevices,
  updateSelectedDevice,
  selectedColor
}: IMenuProps) => {
  const [color, setColor] = useState(selectedColor)
  const [device, setDevice] = useState(selectedDevice)
  const [availableColors, setAvailableColors] = useState(selectedDevice.colors)

  const updateColor = (color: MobileDeviceColors) => {
    setColor(color)
    updateSelectedDevice(device, color)
  }

  const updateDevice = (deviceType: MobileDevices) => {
    const device = devices[deviceType]
    setDevice(device)
    setAvailableColors(device.colors)
    if (!device.colors.includes(color)) setColor('black')
    updateSelectedDevice(device, color)
  }

  const allDevices: MobileDevices[] = [
    'iphone-x',
    'note8',
    'iphone8',
    'iphone8plus',
    'iphone5s',
    'ipad',
    'nexus5'
  ]

  const readableDevices = (allowedDevices || allDevices).map((device) => {
    const tempDevice = devices[device]
    return {
      type: tempDevice.type,
      readableName: tempDevice.readableName
    }
  })

  const readableColors = availableColors.map((color) => {
    return {
      type: color,
      readableName: capitalizeString(color)
    }
  })

  return (
    <div style={{ display: 'flex', justifyItems: 'center' }}>
      <Dropdown
        selectedItem={device.readableName}
        availableItems={readableDevices}
        updateSelectedItem={updateDevice}
      />
      {availableColors && (
        <Dropdown
          selectedItem={capitalizeString(color)}
          availableItems={readableColors}
          updateSelectedItem={updateColor}
        />
      )}
    </div>
  )
}
