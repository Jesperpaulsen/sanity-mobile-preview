import { MobileDevicePreview } from './components/MobileDevicePreview'

export { MobileDevicePreview }

export type MobileDevices =
  | 'iphone-x'
  | 'note8'
  | 'iphone8'
  | 'iphone8plus'
  | 'iphone5s'
  | 'ipad'
  | 'nexus5'

export type MobileDeviceColors =
  | 'silver'
  | 'black'
  | 'gold'

export type MobileDeviceStyleClasses =
  | 'notch'
  | 'top-bar'
  | 'bottom-bar'
  | 'shadow--tr'
  | 'shadow--tl'
  | 'shadow--br'
  | 'shadow--bl'
  | 'shadow'
  | 'inner-shadow'
  | 'inner'
  | 'overflow'
  | 'speaker'
  | 'sensors'
  | 'sensor'
  | 'more-sensors'
  | 'sleep'
  | 'volume'
  | 'camera'
  | 'screen'
  | 'home'

export interface MobileDevice {
  type: MobileDevices
  readableName: string
  colors: MobileDeviceColors[]
  style: MobileDeviceStyleNode[]
}

export interface MobileDeviceStyleNode {
  className: MobileDeviceStyleClasses | MobileDeviceStyleClasses[]
  children?: MobileDeviceStyleNode[]
}
