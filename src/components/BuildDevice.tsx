import React, { createElement, DetailedReactHTMLElement } from 'react'
import mobileStyle from '../devices.min.css'
import {
  MobileDevice,
  MobileDeviceColors,
  MobileDeviceStyleNode
} from '../types'

interface IProps {
  selectedDevice: MobileDevice
  selectedColor: MobileDeviceColors
  landscape: boolean
  children: any
}

export const BuildDevice: React.FC<IProps> = ({
  selectedDevice,
  selectedColor,
  landscape,
  children
}: IProps) => {
  const colors = selectedDevice.colors
  const hasColor = colors.includes(selectedColor)
  const color = hasColor ? selectedColor : 'black'

  let rootDeviceClass = `${mobileStyle['marvel-device']}  ${
    mobileStyle[selectedDevice.type]
  } ${mobileStyle[color]}`

  if (landscape) rootDeviceClass += ' ' + mobileStyle[rootDeviceClass]

  return (
    <div className={rootDeviceClass}>
      {renderer(selectedDevice.style, children)}
    </div>
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
