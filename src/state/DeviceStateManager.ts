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
    this.initializeDevice()
  }

  private readonly initializeDevice = () => {
    const device = this.deviceHandler.getPreselectedDevice({
      selectedDevice: this.props.selectedDevice,
      allowedDevices: this.props.allowedDevices,
    })
    this.colorHandler.loadColorForDevice(device, this.props.selectedColor)
    this.setState({ selectedDevice: device })
    this.deviceHandler.loadDropdownItems()
  }

  override onBeforeStateUpdated = (
    stateUpdate: Partial<IDeviceState>,
    currentState: IDeviceState
  ) => {
    if (stateUpdate.selectedDevice) {
      const colors = this.colorHandler.buildDropdownOptions(
        stateUpdate.selectedDevice
      )
      stateUpdate.colors = colors
      const selectedColor = this.colorHandler.getColorForDevice(
        stateUpdate.selectedDevice,
        currentState.selectedColor
      )
      stateUpdate.selectedColor = selectedColor
    }
    return stateUpdate
  }

  override onPropsUpdated = (
    newProps: IMobileDeviceProps,
    oldProps: IMobileDeviceProps
  ) => {
    if (newProps.allowedDevices) {
      this.deviceHandler.loadDropdownItems()
    } else if (newProps.showMenu !== oldProps.showMenu) {
      this.deviceHandler.setState({ showMenu: newProps.showMenu })
    } else if (newProps.selectedDevice !== oldProps.selectedDevice) {
      this.initializeDevice()
    }
  }
}
