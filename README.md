# sanity-mobile-preview

> An NPM package written in React used to preview mobile devices. Especially helpful when used in combination with a CMS like sanity.

[![NPM](https://img.shields.io/npm/v/sanity-mobile-preview.svg)](https://www.npmjs.com/package/sanity-mobile-preview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[DEMO](https://jesperpaulsen.github.io/sanity-mobile-preview/)

![Demo picture](https://github.com/Jesperpaulsen/sanity-mobile-preview/blob/master/docs/Preview-demo.png?raw=true)

## Install

```bash
npm install --save sanity-mobile-preview
```

## Usage

```tsx
import SanityMobilePreview from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css?raw'

const Example = () => {
  return <SanityMobilePreview />
}
```

### How to set up preview with Sanity

In order to set up mobile preview with Sanity, you first need to create a new view.

For simplicity, we will copy the predefined preview from [IframePreview.js](https://github.com/sanity-io/sanity-template-gatsby-blog/blob/master/template/studio/src/previews/IframePreview.js) to a file called `IframeMobilePreview.js`

Add imports:

```jsx
import SanityMobilePreview from 'sanity-mobile-preview'
import 'sanity-mobile-preview/dist/index.css?raw'
```

At line 47, replace

```tsx
return (
  <div className={styles.componentWrapper}>
    <div className={styles.iframeContainer}>
      <iframe src={url} frameBorder={'0'} />
    </div>
  </div>
)
```

with

```tsx
return (
  <div className={styles.componentWrapper}>
    <SanityMobilePreview>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={'0'} />
      </div>
    </SanityMobilePreview>
  </div>
)
```

Then go to `deskStructure.js`.

Under `getDefaultDocumentNode` add the next snippet to the Schemes you want to add mobile preview to:

```jsx
    S.view
        .component(IframeMobilePreview)
        .title('Mobile preview')
        .options({previewURL})
    ])
```

You should now be able to preview your website with a mobile view.

## Customization

The SanityMobilePreview takes five optional arguments:

| Argument             | Values                                                                                        | Default     |
| -------------------- | --------------------------------------------------------------------------------------------- | ----------- |
| allowedDevices       | An array of MobileDevices. This will be the devices that are selectable in the dropdown menu. | All devices |
| preSelectedDevice    | A MobileDevice. The default device to be selected.                                            | 'iphone-x'  |
| preSelectedColor     | A device color. The default device color to selected.                                         | 'black      |
| showMenu             | A boolean. Controls the visibility of the dropdowns.                                          | true        |
| preSelectedLandscape | A boolean. The default orientation of the devices                                             | false       |

If you have specified a preSelectedDevice that is not specified in allowedDevices, it will default to the first device in allowedDevices.

If you have specified a preSelectedColor that is not applicable to the preSelectedDevice, the preSelectedColor will default to black.

#### Example

This example will load a silver iPad mini as default, and only allows iPhone X and iPad to be selected:

```js
const App = () => {
  return (
    <MobileDevicePreview
      preSelectedDevice={'ipad'}
      preSelectedColor={'silver'}
      allowedDevices={['ipad', 'iphone-x']}
    >
      <div> This is a demo 🤠</div>
    </MobileDevicePreview>
  )
}
```

## Types

MobileDevices = 'iphone-x'
| 'note8'
| 'iphone8'
| 'iphone8plus'
| 'iphone5s'
| 'ipad'
| 'nexus5'

MobileDeviceColors = 'silver' | 'black' | 'gold'

## Devices

The different devices are:

| DeviceId    | Readable name | Colors              |
| ----------- | ------------- | ------------------- |
| iphone-x    | iPhone X      | black               |
| note8       | Note 8        | black               |
| iphone8     | iPhone 8      | black, silver, gold |
| iphone8plus | iPhone 8 Plus | black, silver, gold |
| iphone5s    | iPhone 5s     | black, silver, gold |
| ipad        | iPad mini     | black, silver       |
| nexus5      | Nexus 5       | black               |

## Credit

[Marvel Devices](https://github.com/marvelapp/devices.css/) <br>
[create-react-library](https://github.com/transitive-bullshit/create-react-library)

## License

MIT
