import { StateManager } from "use-oo-state"
import { IMobileDeviceProps } from "../MobileDevicePreview"
import { DeviceColorHandler } from "./DeviceColorHandler"
import { IDeviceState } from "./iDeviceState"
import { SelectedDeviceHandler } from "./SelectedDeviceHandler"

export class DeviceStateManager extends StateManager<
  IDeviceState,
  IMobileDeviceProps
> {
  colorHandler = new DeviceColorHandler(this)
  deviceHandler = new SelectedDeviceHandler(this)

  override onCreated = () => {
    const device = this.deviceHandler.getPreselectedDevice({
      selectedDevice: this.props.selectedDevice,
      allowedDevices: this.props.allowedDevices,
    })
    this.colorHandler.loadColorForDevice(device, this.props.selectedColor)
    this.setState({ selectedDevice: device })
    this.deviceHandler.loadDropdownItems()
  }

  override onBeforeStateUpdated = (stateUpdate: Partial<IDeviceState>) => {
    console.log(stateUpdate)
    if (stateUpdate.selectedDevice) {
      const colors = this.colorHandler.buildDropdownOptions(
        stateUpdate.selectedDevice
      )
      stateUpdate.colors = colors
    }
    return stateUpdate
  }

  override onStateUpdated = (
    newState: IDeviceState,
    oldState: IDeviceState
  ) => {
    console.log(newState.selectedDevice.id, oldState.selectedDevice.id)
  }

  override onPropsUpdated = (newProps: IMobileDeviceProps) => {
    if (newProps.allowedDevices) {
      this.deviceHandler.loadDropdownItems()
    }
  }
}
