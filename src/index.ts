import { MobileDevicePreview } from './MobileDevicePreview'

export { MobileDevicePreview }

export type MobileDevices =
  | 'iphone-x'
  | 'galaxy-note-8'
  | 'iphone-8'
  | 'iphone-8-plus'
  | 'iphone-6s'
  | 'ipad-mini'
  | 'iphone-5s'
  | 'nexus-5'
  | 'lumia-920'
  | 'samsung-galaxy-s5'
  | 'htc-one'

export type MobilDeviceColors =
  | 'silver'
  | 'black'
  | 'gold'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'white'

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
  | 'more-sensors'
  | 'sleep'
  | 'volume'
  | 'camera'
  | 'screen'
  | 'home'

export interface MobileDevice {
  type: MobileDevices
  colors: MobilDeviceColors[]
  style: MobileDeviceStyleNode[]
}

export interface MobileDeviceStyleNode {
  className: MobileDeviceStyleClasses | MobileDeviceStyleClasses[]
  children?: MobileDeviceStyleNode[]
}
