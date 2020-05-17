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
  const transformImage = new transformImageJS.TransformImage({});
  transformImage.resizeImage(file, {maxHeight: 500, maxWidth:500, quality:0.9}).then(res=>{
    //The response returns an object that has the output blob in output attribute and has metadata for image sizes before and after transformation
    console.log(res);
  }).catch(err => {
    // handle error
  });
}

// using async function
async function handleUpload(e) {
  const file = e.target.files[0];
  const transformImage = new transformImageJS.TransformImage({});
  try {
    const res = await transformImage.resizeImage(file, {maxHeight: 500, maxWidth:500, quality:0.9});
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
  const transformImage = new transformImage({});
  try {
    const res = await transformImage.resizeImage(file, {maxHeight: 500, maxWidth:500, quality:0.9});
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

| Name             | Type     | Description                                                          | Default                |
|------------------|----------|----------------------------------------------------------------------|------------------------|
| sizeLimit        | int      | the byte size limit for the input file/blob                          | 16777216 bytes = 16MB    |
| outputType       | enum     | defines the output object format. Allowed values :- blob/base64/file | blob                   |
| allowedFileTypes | []string | allowed types for the input file/blob e.g. PNG, JPEG, JPG            | ["jpg", "png", "jpeg"] |


### Methods

#### `resizeImage(imageFile, options, fileName) => {Promise}`

#### Description:
Resize an image file

#### Parameters:
| Name     | Type      | Description                                                                                 | Required | Default |
|----------|-----------|---------------------------------------------------------------------------------------------|----------|---------|
| image    | File/Blob | File object / Blob to be resized                                                            | Yes      | N/A     |
| options  | Object    | Additional options described below. The values can also override the TransformImage options | No       | {}      |
| fileName | string    | Name of the file if outputType is file (Optional)                                           | No       | ""      |

##### Options
| Name      | Type  | Description                                                       | Default |
|-----------|-------|-------------------------------------------------------------------|---------|
| maxWidth  | int   | the max width for the file in px                                  | 500     |
| maxHeight | int   | the max height for the file in px                                 | 500     |
| quality   | float | a value between 0 and 1 to denote the quality of the output image | 0.9     |

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

## JQuery Plugin
[image_compress_plugin](https://cdn.jsdelivr.net/npm/@shellophobia/transform-image-js@1.0.3/jquery_plugin/image_compress_plugin.js) is a jquery plugin that allows to add a file upload and compress functionality.

### Usage

#### Importing
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@shellophobia/transform-image-js/jquery_plugin/image_compress_plugin.js"></script>
```

#### Example
```html
<p>This is a demo for the resize image jquery plugin. Feel free to go through the source code 
<a href="https://github.com/shellophobia/UploadCompressImage/blob/master/jquery_plugin/image_compress_plugin.js">here</a></p>
<div id="fileinput">
  <button class="btn-upload"><i class="fas fa-cloud-upload-alt"></i> Click Here to Upload</button>
  <p class="drag-p">Or Drag N Drop the file</p>
  <input type="file" multiple="true">
</div>
<div id="preview"></div>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@shellophobia/transform-image-js/jquery_plugin/image_compress_plugin.js"></script>
<script type="text/javascript">
$(document).ready(function() {
  $("#fileinput").uploadFile({
    enablePreview: true,
    appendFileInput: false,
    autoSubmit: false,
    previewSelector: "#preview"
  });
});
</script>
```

[Configuration gist for jquery plugin](https://gist.github.com/shellophobia/547a13696996eebbcf20b19f1bfffca4)

## License

[MIT](http://opensource.org/licenses/MIT)
