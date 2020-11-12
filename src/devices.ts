import { MobileDevice } from './types'

export const devices: { [id: string]: MobileDevice } = {
  'iphone-x': {
    type: 'iphone-x',
    readableName: 'iPhone X',
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
  },
  note8: {
    type: 'note8',
    readableName: 'Note 8',
    colors: ['black'],
    style: [
      { className: 'inner' },
      { className: 'overflow', children: [{ className: 'shadow' }] },
      { className: 'speaker' },
      { className: 'sensors' },
      { className: 'more-sensors' },
      { className: 'sleep' },
      { className: 'volume' },
      { className: 'camera' },
      { className: 'screen' }
    ]
  },
  iphone8: {
    type: 'iphone8',
    readableName: 'iPhone 8',
    colors: ['black', 'silver', 'gold'],
    style: [
      { className: 'top-bar' },
      { className: 'sleep' },
      { className: 'volume' },
      { className: 'camera' },
      { className: 'sensor' },
      { className: 'speaker' },
      { className: 'screen' },
      { className: 'home' },
      { className: 'bottom-bar' }
    ]
  },
  iphone8plus: {
    type: 'iphone8plus',
    readableName: 'iPhone 8 plus',
    colors: ['black', 'silver', 'gold'],
    style: [
      { className: 'top-bar' },
      { className: 'sleep' },
      { className: 'volume' },
      { className: 'camera' },
      { className: 'sensor' },
      { className: 'speaker' },
      { className: 'screen' },
      { className: 'home' },
      { className: 'bottom-bar' }
    ]
  },
  iphone5s: {
    type: 'iphone5s',
    readableName: 'iPhone 5s',
    colors: ['black', 'silver', 'gold'],
    style: [
      { className: 'top-bar' },
      { className: 'sleep' },
      { className: 'volume' },
      { className: 'camera' },
      { className: 'sensor' },
      { className: 'speaker' },
      { className: 'screen' },
      { className: 'home' },
      { className: 'bottom-bar' }
    ]
  },
  ipad: {
    type: 'ipad',
    readableName: 'iPad mini',
    colors: ['black', 'silver'],
    style: [
      { className: 'camera' },
      { className: 'screen' },
      { className: 'home' },
      { className: 'bottom-bar' }
    ]
  },
  nexus5: {
    type: 'nexus5',
    readableName: 'Nexus 5',
    colors: ['black'],
    style: [
      { className: 'top-bar' },
      { className: 'sleep' },
      { className: 'volume' },
      { className: 'camera' },
      { className: 'screen' }
    ]
  }
}
