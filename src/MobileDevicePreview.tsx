import React, { PropsWithChildren } from "react"
import "./styles/index.css"
import "./styles/devices.min.css"
import Device from "./components/Device"
import { TDeviceId } from "./types/TDeviceId"
import { TColors } from "./types/TColors"
import { useOOState } from "use-oo-state"
import { DeviceStateManager } from "./state/DeviceStatemanager"
import Dropdown from "./components/Dropdown"
import { devices } from "./devices/devices"
import { capitalizeString } from "./utils/capitalizeString"

export interface IMobileDeviceProps {
  allowedDevices?: TDeviceId[]
  selectedDevice?: TDeviceId
  selectedColor?: TColors
  selectedLandscape?: boolean
  showMenu?: boolean
  url?: string
}

const MobileDeviewPreview: React.FC<PropsWithChildren<IMobileDeviceProps>> = (
  props
) => {
  const [state, manager] = useOOState(
    DeviceStateManager,
    {
      selectedColor: "black",
      selectedDevice: devices["iphone-14"],
      selectedLandscape: false,
      showMenu: false,
      devices: [],
      colors: [],
    },
    props
  )

  console.log(state)

  return (
    <div className="flex flex-col justify-center items-center min-w-[min-content]">
      {props.showMenu !== false && (
        <div className="flex">
          <Dropdown<TDeviceId>
            availableItems={state.devices}
            onItemSelected={manager.deviceHandler.updateDevice}
            selectedItem={{
              label: state.selectedDevice.name,
              value: state.selectedDevice.id,
            }}
          />
          <Dropdown<TColors>
            availableItems={state.colors}
            onItemSelected={manager.deviceHandler.updateDevice}
            selectedItem={{
              label: capitalizeString(state.selectedColor),
              value: state.selectedColor,
            }}
          />
        </div>
      )}
      {state.selectedDevice && (
        <Device
          landscape={state.selectedLandscape}
          selectedColor={state.selectedColor}
          selectedDevice={state.selectedDevice}
        >
          <div className="bg-white w-full h-full !flex justify-center items-center">
            hello
          </div>
        </Device>
      )}
    </div>
  )
}

export default MobileDeviewPreview
