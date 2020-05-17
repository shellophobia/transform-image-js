import { base64ToBlob, base64ToFile } from "./utils";
import { OUTPUT_TYPE } from "./constants";

// Returns a promise
export const resizeImageFn = async (
  imgBlob,
  fileName,
  options,
  resolve,
  _reject
) => {
  window.URL = window.URL || window.webkitURL;
  const blobURL = window.URL.createObjectURL(imgBlob); // and get it's URL

  // helper Image object
  const image = new Image();
  image.src = blobURL;
  image.onload = function() {
    // have to wait till it's loaded
    window.URL.revokeObjectURL(blobURL);
    const resizedImage = resizeImageCanvas(image, imgBlob.type, options); // send it to canvas
    switch (options.outputType) {
      case OUTPUT_TYPE.BASE64:
        resolve(resizedImage);
        break;
      case OUTPUT_TYPE.BLOB:
        resizedImage.output = base64ToBlob(resizedImage.output, imgBlob.type);
        resolve(resizedImage);
        break;
      default:
        resizedImage.output = base64ToFile(
          resizedImage.output,
          imgBlob.type,
          fileName
        );
        resolve(resizedImage);
        break;
    }
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
      resizedWidth: width
    }
  };
};
