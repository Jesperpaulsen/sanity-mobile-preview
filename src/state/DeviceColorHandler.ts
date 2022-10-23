import { SubStateHandler } from "use-oo-state"
import { IDevice } from "../types/IDevice"
import { IDropdownItem } from "../types/IDropdownItem"
import { TColor } from "../types/TColor"
import { capitalizeString } from "../utils/capitalizeString"
import { DeviceStateManager } from "./DeviceStatemanager"

export class DeviceColorHandler extends SubStateHandler<DeviceStateManager> {
  readonly loadColorForDevice = (device: IDevice, selectedColor?: TColor) => {
    const color = this.getColorForDevice(device, selectedColor)
    this.setState({ selectedColor: color })
  }

  readonly getColorForDevice = (device: IDevice, selectedColor?: TColor) => {
    if (selectedColor && !device.colors.includes(selectedColor)) {
      return device.colors[0]
    } else if (selectedColor && device.colors.includes(selectedColor)) {
      return selectedColor
    } else {
      return device.colors[0]
    }
  }

  readonly buildDropdownOptions = (device: IDevice) => {
    const res: IDropdownItem<TColor>[] = []

    for (const color of device.colors) {
      res.push({ label: capitalizeString(color), value: color })
    }

    return res
  }
}
