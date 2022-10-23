import { TColor } from "./TColor"
import { TDeviceId } from "./TDeviceId"

export interface IDevice {
  id: TDeviceId
  name: string
  colors: TColor[]
}
