import { IDevice } from "../types/IDevice"
import { TDeviceId } from "../types/TDeviceId"
import { GooglePixel } from "./google-pixel"
import { GooglePixel2XL } from "./google-pixel-2-xl"
import { GooglePixel6Pro } from "./google-pixel-6-pro"
import { iPadPro } from "./ipad-pro"
import { iPhone } from "./iphone"
import { iPhone14 } from "./iphone-14"
import { iPhone14Pro } from "./iphone-14-pro"
import { iPhone8 } from "./iphone-8"
import { iPhoneX } from "./iphone-x"
import { SamsungGalaxyS8 } from "./samsung-galaxy-s8"

export const devices: Record<TDeviceId, IDevice> = {
  "iphone-14": iPhone14,
  "iphone-14-pro": iPhone14Pro,
  "iphone-x": iPhoneX,
  "iphone-8": iPhone8,
  "the-iphone": iPhone,
  "google-pixel-6-pro": GooglePixel6Pro,
  "google-pixel-2-xl": GooglePixel2XL,
  "google-pixel": GooglePixel,
  "galaxy-s8": SamsungGalaxyS8,
  "ipad-pro": iPadPro,
}
