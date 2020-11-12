import { MobileDevice } from './index'

export const devices: { [id: string]: MobileDevice } = {
  'iphone-x': {
    type: 'iphone-x',
    colors: ['black'],
    style: [
      {
        className: 'notch',
        children: [{ className: 'camera' }, { className: 'speaker' }]
      },
      { className: 'top-bar' },
      { className: 'sleep' },
      { className: 'bottom-bar' },
      { className: 'volume' },
      {
        className: 'overflow',
        children: [
          { className: ['shadow', 'shadow--tr'] },
          { className: ['shadow', 'shadow--tl'] },
          { className: ['shadow', 'shadow--br'] },
          { className: ['shadow', 'shadow--bl'] }
        ]
      },
      { className: 'inner-shadow' },
      { className: 'screen' }
    ]
  }
  // [MobileDevices.IPHONE_8_PLUS]: {
  //   type: MobileDevices.IPHONE_8_PLUS,
  //   colors: [MobilDeviceColors.BLACK, MobilDeviceColors.SILVER, MobilDeviceColors.GOLD],
  // },
  // [MobileDevices.IPHONE_8]: {
  //   type: MobileDevices.IPHONE_8,
  //   colors: [MobilDeviceColors.BLACK, MobilDeviceColors.SILVER, MobilDeviceColors.GOLD],
  // },
  // [MobileDevices.IPHONE_5S]: {
  //   type: MobileDevices.IPHONE_5S,
  //   colors: [MobilDeviceColors.BLACK],
  // },
  // [MobileDevices.GALAXY_NOTE_8]: {
  //   type: MobileDevices.GALAXY_NOTE_8,
  //   colors: [MobilDeviceColors.BLACK],
  // },
  // [MobileDevices.IPAD_MINI]: {
  //   type: MobileDevices.IPAD_MINI,
  //   colors: [MobilDeviceColors.BLACK, MobilDeviceColors.SILVER],
  // },
  // [MobileDevices.NEXUS_5]: {
  //   type: MobileDevices.NEXUS_5,
  //   colors: [MobilDeviceColors.BLACK],
  // },
  // [MobileDevices.LUMIA_920]: {
  //   type: MobileDevices.LUMIA_920,
  //   colors: [MobilDeviceColors.BLACK, MobilDeviceColors.WHITE, MobilDeviceColors.YELLOW, MobilDeviceColors.RED, MobilDeviceColors.BLUE],
  // },
  // [MobileDevices.SAMSUNG_GALAXY_S5]: {
  //   type: MobileDevices.LUMIA_920,
  //   colors: [MobilDeviceColors.BLACK, MobilDeviceColors.WHITE],
  // },
  // [MobileDevices.HTC_ONE]: {
  //   type: MobileDevices.HTC_ONE,
  //   colors: [],
  // },
}
