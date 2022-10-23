import { IDevice } from "../types/IDevice"
import { IDropdownItem } from "../types/IDropdownItem"
import { TColor } from "../types/TColor"
import { TDeviceId } from "../types/TDeviceId"

export interface IDeviceState {
  devices: IDropdownItem<TDeviceId>[]
  colors: IDropdownItem<TColor>[]
  selectedDevice: IDevice
  selectedColor: TColor
  selectedLandscape: boolean
  showMenu: boolean
  url?: string
  children?: JSX.Element
}
