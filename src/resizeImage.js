import { validateFileType, validateFileSize, base64ToBlob } from "./utils";

// Returns a promise
export const resizeImageFile = async (file, options, resolve, _reject) => {
  // Perform a null check on file
  if (!file) return;

  // Validate the file type
  if (!validateFileType(file.type, options)) {
    throw "File " + file.name + " is not a supported image.";
  }

  // read the files
  const reader = new FileReader();

  reader.readAsArrayBuffer(file);

  reader.onload = (event) => {
    const blob = new Blob([event.target.result]); // create blob...
    const imageSize = blob.size;

    validateFileSize(imageSize, options);

    window.URL = window.URL || window.webkitURL;
    const blobURL = window.URL.createObjectURL(blob); // and get it's URL

    // helper Image object
    const image = new Image();
    image.src = blobURL;
    image.onload = function () {
      // have to wait till it's loaded
      const resizedImage = resizeImageCanvas(image, file.type, options); // send it to canvas
      if (options.base64OutputType) {
        resolve(resizedImage);
      } else if (options.blobOutputType) {
        resizedImage.output = base64ToBlob(resizedImage.output, file.type);
        resolve(resizedImage);
      }
    };
  };
};

export const resizeImageCanvas = (img, fileType, options) => {
  const canvas = document.createElement("canvas");
  let width = img.width;
  let height = img.height;

  // calculate the width and height, constraining the proportions
  if (width > height) {
    if (width > options.maxWidth) {
      height = Math.round((height *= options.maxWidth / width));
      width = options.maxWidth;
    }
  } else {
    if (height > options.maxHeight) {
      width = Math.round((width *= options.maxHeight / height));
      height = options.maxHeight;
    }
  }

  // resize the canvas and draw the image data into it
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, width, height);

  return {
    output: canvas.toDataURL(fileType, options.quality),
    metadata: {
      originalHeight: img.height,
      originalWidth: img.width,
      resizedHeight: height,
      resizedWidth: width,
    },
  };
};
