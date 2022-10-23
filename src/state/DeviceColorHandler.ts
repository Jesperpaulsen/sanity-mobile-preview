import { SubStateHandler } from "use-oo-state"
import { IDevice } from "../types/IDevice"
import { IDropdownItem } from "../types/IDropdownItem"
import { TColor } from "../types/TColor"
import { capitalizeString } from "../utils/capitalizeString"
import { DeviceStateManager } from "./DeviceStatemanager"

export class DeviceColorHandler extends SubStateHandler<DeviceStateManager> {
  readonly loadColorForDevice = (device: IDevice, selectedColor?: TColor) => {
    if (selectedColor && !device.colors.includes(selectedColor)) {
      console.error(
        `Color ${selectedColor} can't be chosen for device ${device.name}`
      )
      this.setState({ selectedColor: "black" })
    } else if (selectedColor && device.colors.includes(selectedColor)) {
      this.setState({ selectedColor })
    } else {
      this.setState({ selectedColor: "black" })
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
