import { IDevice } from "../types/IDevice"
import { IDropdownItem } from "../types/IDropdownItem"
import { TColors } from "../types/TColors"
import { TDeviceId } from "../types/TDeviceId"

export interface IDeviceState {
  devices: IDropdownItem<TDeviceId>[]
  colors: IDropdownItem<TColors>[]
  selectedDevice: IDevice
  selectedColor: TColors
  selectedLandscape: boolean
  showMenu: boolean
  url?: string
  children?: JSX.Element
}
