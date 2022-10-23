import React, { PropsWithChildren } from "react"
import deviceBuildingBlocks from "../constants/deviceBuildingBlocks"
import { IDevice } from "../types/IDevice"
import { TColor } from "../types/TColor"

interface IDeviceProps {
  selectedDevice: IDevice
  selectedColor: TColor
  landscape: boolean
}

const Device: React.FC<PropsWithChildren<IDeviceProps>> = ({
  selectedColor,
  selectedDevice,
  landscape,
  children,
}) => {
  return (
    <div className={`${landscape && "rotate-90"}`}>
      <div
        className={`device device-${selectedColor} device-${selectedDevice.id}`}
      >
        <div className="device-frame">
          <div className="device-screen overflow-hidden">{children}</div>
        </div>
        {deviceBuildingBlocks.map((className) => (
          <div
            key={`${selectedDevice.id}-${className}`}
            className={`device-${className}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Device
