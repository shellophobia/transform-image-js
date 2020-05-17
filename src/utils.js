import { OUTPUT_TYPE } from "./constants";

export const validateAndGetBlob = async (image, options) => {
  let imgBlob = image;
  if (image instanceof File) {
    imgBlob = await fileToBlob(image);
  }
  validateFileSize(imgBlob.size, options);
  validateFileType(imgBlob.type, options);
  return imgBlob;
};

export const validateFileType = (fileType, options) => {
  let accepted = false;
  options.allowedFileTypes.forEach(allowedFileType => {
    const regEx = new RegExp("image/" + allowedFileType);
    if (regEx.test(fileType)) accepted = true;
  });
  return accepted;
};

export const fileToBlob = async file => {
  const getBlob = () =>
    new Promise((resolve, _reject) => {
      const fileReader = new FileReader();
      fileReader.onload = event => {
        resolve(new Blob([event.target.result], { type: file.type }));
      };
      fileReader.readAsArrayBuffer(file);
    });
  return getBlob();
};

export const validateFileSize = (imageSize, options) => {
  if (imageSize > options.sizeLimit) {
    throw new Error(
      `Please upload an image of size less than ${options.sizeLimit /
        (1024 * 1024)}MB`
    );
  }
};

export const base64ToBlob = (base64, fileType) => {
  const sliceSize = 512; // uses 512 as packet size for efficient conversion
  const regEx = new RegExp("^data:" + fileType + ";base64,");
  base64 = base64.replace(regEx, "");
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: fileType });
  return blob;
};

export const base64ToFile = (base64, fileType, fileName) => {
  const imgBlob = base64ToBlob(base64, fileType);
  return new File([imgBlob], fileName, { type: fileType });
};

export const validateOutputType = type => {
  if (!Object.values(OUTPUT_TYPE).includes(type)) {
    throw new Error(`invalid output type ${type}`);
  }
};
