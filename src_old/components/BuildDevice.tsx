import React, {
  createElement,
  DetailedReactHTMLElement,
  useEffect,
  useState
} from 'react'
import mobileStyle from '../devices.min.css'
import {
  MobileDevice,
  MobileDeviceColors,
  MobileDeviceStyleClasses,
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
  const [rootDeviceClass, setRootDeviceClass] = useState('')

  useEffect(() => {
    const colors = selectedDevice.colors
    const hasColor = colors.includes(selectedColor)
    const color = hasColor ? selectedColor : 'black'

    let tempRootDeviceClass = `${mobileStyle['marvel-device']}  ${
      mobileStyle[selectedDevice.type]
    } ${mobileStyle[color]}`

    if (landscape) tempRootDeviceClass += ' ' + mobileStyle.landscape
    setRootDeviceClass(tempRootDeviceClass)
  }, [selectedDevice, selectedColor, landscape])

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
  return mobileDeviceStyleNodes.map((style, index) => {
    return createElement(
      'div',
      {
        className: Array.isArray(style.className)
          ? convertClassNameArrayToClassName(style.className)
          : mobileStyle[style.className],
        key: 'mobileStyle' + index
      },
      style.className === 'screen'
        ? children
        : style.children && renderer(style.children, children)
    )
  })
}

const convertClassNameArrayToClassName = (
  classNameArray: MobileDeviceStyleClasses[]
) => {
  let res = ''
  for (const style of classNameArray) {
    res += `${mobileStyle[style]} `
  }
  return res
}
