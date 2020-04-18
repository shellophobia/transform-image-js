import defaultVal from "./defaults";
import { resizeImageFile } from "./resizeImage";

class TransformImage {
  /*
    Options - An object with following properties
    sizeLimit : the byte size limit for the output file
    maxWidth: the max width for the file in px
    maxHeight: the max height for the file in px
    quality: a value between 0 and 1 to denote the quality of the output image
    base64OutputType: boolean to return a base64 string as the output
    blobOutputType: boolean to return a blob as output
    allowedFileTypes: allowed types for the image file e.g. PNG, JPEG, JPG
  */
  constructor(options) {
    options.sizeLimit = options.sizeLimit || defaultVal.sizeLimit;
    options.maxWidth = options.maxWidth || defaultVal.maxWidth;
    options.maxHeight = options.maxHeight || defaultVal.maxHeight;
    options.quality = options.quality || defaultVal.quality; // Quality - A value between 0 and 1 to denote the quality of the image in the output
    options.base64OutputType =
      options.base64OutputType || defaultVal.base64OutputType; // return Base64 string
    options.blobOutputType =
      options.blobOutputType || defaultVal.blobOutputType; // return Blob // NOTE: you can only choose one of the base64 or blob options
    options.allowedFileTypes =
      options.allowedFileTypes || defaultVal.allowedFileTypes; // An array of allowed file types
    this.options = options;
  }

  /*
  @params
  imageFile - The image file object obtained after user has uploaded the file
  */
  resizeImage(imageFile) {
    resizeImageFile(imageFile, {
      ...this.options,
    });
  }
}

export default TransformImage;
