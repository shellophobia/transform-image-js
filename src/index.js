import defaultVal from "./defaults";
import { resizeImageFn } from "./resizeImage";
import { validateAndGetBlob, validateOutputType } from "./utils";

class TransformImage {
  /*
    Options - An object with following properties
    sizeLimit : the byte size limit for the input file/blob
    outputType: defines the output object format. Allowed values :- blob/base64/file
    allowedFileTypes: allowed types for the input file/blob e.g. PNG, JPEG, JPG
  */
  constructor(options = {}) {
    options.sizeLimit = options.sizeLimit || defaultVal.sizeLimit;
    options.outputType = options.outputType || defaultVal.outputType; // output object format BLOB/BASE64/FILE
    validateOutputType(options.outputType);
    options.allowedFileTypes =
      options.allowedFileTypes || defaultVal.allowedFileTypes; // An array of allowed file types
    this.options = options;
  }

  /*
  @params
  image - File object / Blob
  Options - An object with following properties
    maxWidth: the max width for the file in px
    maxHeight: the max height for the file in px
    quality: a value between 0 and 1 to denote the quality of the output image
  fileName - Name of the file if outputType is file (Optional)
  */
  resizeImage = async (image, options = {}, fileName = "") => {
    // Perform a null check on image
    if (!image) return;

    options.maxWidth = options.maxWidth || defaultVal.maxWidth;
    options.maxHeight = options.maxHeight || defaultVal.maxHeight;
    options.quality = options.quality || defaultVal.quality; // Quality - A value between 0 and 1 to denote the quality of the image in the output

    const imgBlob = await validateAndGetBlob(image, this.options);

    return new Promise((resolve, reject) => {
      resizeImageFn(
        imgBlob,
        fileName,
        { ...this.options, options },
        resolve,
        reject
      );
    });
  };
}

export default TransformImage;
