import { TColors } from "./TColors"
import { TDeviceId } from "./TDeviceId"

export interface IDevice {
  id: TDeviceId
  name: string
  colors: TColors[]
}
