# transform-image-js

[![Build Status](https://img.shields.io/travis/shellophobia/transform-image-js.svg)](https://travis-ci.org/github/shellophobia/transform-image-js)
[![Version](https://img.shields.io/npm/v/@shellophobia/transform-image-js.svg)](https://www.npmjs.com/package/@shellophobia/transform-image-js)
[![License](https://img.shields.io/npm/l/@shellophobia/transform-image-js.svg)](https://www.npmjs.com/package/@shellophobia/transform-image-js)
[![minified size](https://img.shields.io/bundlephobia/min/@shellophobia/transform-image-js.svg)](https://www.npmjs.com/package/@shellophobia/transform-image-js)

> [transform-image-js](https://github.com/shellophobia/transform-image-js) is a library to perform transformations on an image file e.g. resize an image within defined constraints and also allows to adjust the quality of image. One of the use cases is when you want to perform a size optimization on the image before uploading.

## Getting started

### Installing

Using npm:

```bash
npm i @shellophobia/transform-image-js
```

Using yarn:

```bash
yarn add @shellophobia/transform-image-js
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@shellophobia/transform-image-js/lib/transform-image-js.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/@shellophobia/transform-image-js/lib/transform-image-js.min.js"></script>
```

### Usage

#### Import

in CommonJS:
```js
const transformImage = require("@shellophobia/transform-image-js")
```

in ES6:

```js
import transformImage from '@shellophobia/transform-image-js';
```

#### Resize image to max 500x500 with quality as 0.9:

##### Vanilla JS and HTML
```html
<input id="demo" type="file" onchange="handleUpload">
```
```js
function handleUpload(e){
  const file = e.target.files[0];
  // The library will add a property `transformImageJS` on window once you import it
  const transformImage = new transformImageJS.TransformImage({maxHeight: 500, maxWidth:500, quality:0.9});
  transformImage.resizeImage(file).then(res=>{
    //The response returns an object that has the output blob in output attribute and has metadata for image sizes before and after transformation
    console.log(res);
  }).catch(err => {
    // handle error
  });
}

// using async function
async function handleUpload(e) {
  const file = e.target.files[0];
  const transformImage = new transformImageJS.TransformImage({maxHeight: 500, maxWidth:500, quality:0.9});
  try {
    const res = await transformImage.resizeImage(file);
    console.log(res);
  } catch(e) {
    // handle error
  }
}
```

##### React JSX
```js
import React from "react";
import transformImage from "@shellophobia/transform-image-js";

const handleUpload = async (e) => {
  const file = e.target.files[0];
  console.log(file);
  const transformImage = new transformImage({maxHeight: 500, maxWidth:500, quality:0.9});
  try {
    const res = await transformImage.resizeImage(file);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export default function App() {
  return (
    <div className="App">
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
```

## API

### Initialization options

#### Description
Following options can be passed during initialization of transformImage that returns an object on which methods can be called

#### `transformImage(options)`

| Name             | Type     | Description                                                                                                | Default                |
|------------------|----------|------------------------------------------------------------------------------------------------------------|------------------------|
| sizeLimit        | int      | Byte size limit of the output                                                                              | 16777216 // 16MB       |
| maxWidth         | int      | Max width of the output                                                                                    | 500                    |
| maxHeight        | int      | Max height of the output                                                                                   | 500                    |
| quality          | float    | A Number between 0 and 1 indicating the image quality to use for  image formats that use lossy compression | 0.92                   |
| base64OutputType | bool     | Return base64 output string in response                                                                    | false                  |
| blobOutputType   | bool     | Return blob output in response                                                                             | true                   |
| allowedFileTypes | []string | Array of allowed file types for uploaded file                                                              | ["jpg", "png", "jpeg"] |


### Methods

### `resizeImage(imageFile) => {Promise}`

#### Description:
Resize an image file with the configuration provided in the initialization options

#### Parameters:
| Name          | Type | Description              |
|---------------|------|--------------------------|
| imageFile     | file | The image file to resize |

#### Returns:
Promise that resolves to the output object

| Name     | Type               | Description                                                        |
|----------|--------------------|--------------------------------------------------------------------|
| output   | blob/base64 string | Blob or base64 string based on configuration                       |
| metadata | object             | Metadata about initial image dimensions and final image dimensions |

##### Metadata
| Name           | Type | Description           |
|----------------|------|-----------------------|
| originalHeight | int  | Original image height |
| originalWidth  | int  | Original image width  |
| resizedHeight  | int  | Resized image height  |
| resizedWidth   | int  | Resized image width   |

## License

[MIT](http://opensource.org/licenses/MIT)
