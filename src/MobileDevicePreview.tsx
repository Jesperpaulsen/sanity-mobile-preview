import React, { PropsWithChildren } from "react"
import "./styles/index.css"
import "./styles/devices.min.css"
import Device from "./components/Device"
import { TDeviceId } from "./types/TDeviceId"
import { TColor } from "./types/TColor"
import { useOOState } from "use-oo-state"
import { DeviceStateManager } from "./state/DeviceStatemanager"
import Dropdown from "./components/Dropdown"
import { devices } from "./devices/devices"
import { capitalizeString } from "./utils/capitalizeString"

export interface IMobileDeviceProps {
  allowedDevices?: TDeviceId[]
  selectedDevice?: TDeviceId
  selectedColor?: TColor
  selectedLandscape?: boolean
  showMenu?: boolean
  url?: string
}

const initialState = {
  selectedColor: "black",
  selectedDevice: devices["iphone-14-pro"],
  selectedLandscape: false,
  showMenu: false,
  devices: [],
  colors: [],
}

const MobileDeviewPreview: React.FC<PropsWithChildren<IMobileDeviceProps>> = (
  props
) => {
  const [state, manager] = useOOState(DeviceStateManager, initialState, props)

  if (!props.children && !props.url) {
    throw new Error(
      "Make sure SanityMobilePreview recieves either children or an url as child"
    )
  }

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
          <Dropdown<TColor>
            availableItems={state.colors}
            onItemSelected={(color) =>
              manager.colorHandler.loadColorForDevice(
                state.selectedDevice,
                color
              )
            }
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
          {props.children ? (
            props.children
          ) : (
            <div className="w-full h-full">
              <iframe src={props.url} frameBorder={"0"} />
            </div>
          )}
        </Device>
      )}
    </div>
  )
}

export default MobileDeviewPreview
