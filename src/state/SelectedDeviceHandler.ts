import { SubStateHandler } from "use-oo-state"
import { devices } from "../devices/devices"
import { IDevice } from "../types/IDevice"
import { IDropdownItem } from "../types/IDropdownItem"
import { TDeviceId } from "../types/TDeviceId"
import { DeviceStateManager } from "./DeviceStatemanager"

export class SelectedDeviceHandler extends SubStateHandler<DeviceStateManager> {
  readonly getPreselectedDevice = ({
    selectedDevice,
    allowedDevices,
  }: {
    selectedDevice?: TDeviceId
    allowedDevices?: TDeviceId[]
  }) => {
    let device: IDevice

    if (selectedDevice && allowedDevices && allowedDevices.length > 0) {
      device = this.loadDeviceFromPreselectedDevices(
        selectedDevice,
        allowedDevices
      )
    } else if (selectedDevice) {
      device = devices[selectedDevice]
    } else if (allowedDevices && allowedDevices.length > 0) {
      device = devices[allowedDevices[0]]
    } else {
      device = devices["iphone-14-pro"]
    }
    return device
  }

  readonly updateDevice = (deviceId: TDeviceId) => {
    console.log(deviceId)
    const device = devices[deviceId]
    console.log(device)
    this.setState({ selectedDevice: device })
  }

  private readonly loadDeviceFromPreselectedDevices = (
    selectedDevice: TDeviceId,
    allowedDevices: TDeviceId[]
  ) => {
    if (this.checkThatSelectedDeviceIsAllowed(selectedDevice, allowedDevices)) {
      return devices[selectedDevice]
    } else {
      console.error(
        "The preselected device was not included in the allowedDevices. Defaulting to the first allowed device"
      )
      return devices[allowedDevices[0]]
    }
  }

  private readonly checkThatSelectedDeviceIsAllowed = (
    selectedDevice: TDeviceId,
    allowedDevices: TDeviceId[]
  ) => {
    return selectedDevice && allowedDevices.indexOf(selectedDevice) > -1
  }

  readonly loadDropdownItems = () => {
    const items: IDropdownItem<TDeviceId>[] = []

    if (this.props.allowedDevices?.length) {
      for (const deviceId of this.props.allowedDevices) {
        const device = devices[deviceId]
        items.push({
          label: device.name,
          value: device.id,
        })
      }
    } else {
      for (const device of Object.values(devices)) {
        items.push({
          label: device.name,
          value: device.id,
        })
      }
    }
    this.setState({ devices: items })
  }

  readonly rotateDevice = () => {
    this.setState({ selectedLandscape: !this.state.selectedLandscape })
  }
}
