import React, { createElement, DetailedReactHTMLElement } from 'react'
import { devices } from './devices'
import mobileStyle from './devices.min.css'
import {
  MobileDeviceColors,
  MobileDevices,
  MobileDeviceStyleNode
} from './index'

interface IProps {
  mobileDevice: MobileDevices
  selectedColor: MobileDeviceColors
  landscape: boolean
  children: any
}

export const BuildDevice: React.FC<IProps> = ({
  mobileDevice,
  selectedColor,
  landscape,
  children
}: IProps) => {
  const tempDevice = devices[mobileDevice]
  const device = tempDevice || devices['iphone-x']

  const colors = device.colors
  const hasColor = colors.includes(selectedColor)
  const color = hasColor ? selectedColor : 'black'

  let rootDeviceClass = `${mobileStyle['marvel-device']}  ${mobileStyle[mobileDevice]} ${mobileStyle[color]}`

  if (landscape) rootDeviceClass += ' ' + mobileStyle[rootDeviceClass]

  return (
    <div className={rootDeviceClass}>{renderer(device.style, children)}</div>
  )
}

function renderer(
  mobileDeviceStyleNodes: MobileDeviceStyleNode[],
  children?: React.FC
): DetailedReactHTMLElement<any, any>[] {
  return mobileDeviceStyleNodes.map((style) => {
    return createElement(
      'div',
      {
        className: mobileStyle[style.className as string],
        key: style.className as string
      },
      style.className === 'screen'
        ? children
        : style.children && renderer(style.children, children)
    )
  })
}
