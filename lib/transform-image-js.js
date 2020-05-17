window["transformImageJS"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TransformImage", function() { return /* reexport */ src; });

// CONCATENATED MODULE: ./src/defaults.js
/* harmony default export */ var defaults = ({
  sizeLimit: 16777216,
  // 16MB
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.9,
  outputType: "blob",
  allowedFileTypes: ["jpg", "png", "jpeg"]
});
// CONCATENATED MODULE: ./src/constants.js
var OUTPUT_TYPE = {
  BLOB: "blob",
  BASE64: "base64",
  FILE: "file"
};
// CONCATENATED MODULE: ./src/utils.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var validateAndGetBlob = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image, options) {
    var imgBlob;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            imgBlob = image;

            if (!(image instanceof File)) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return fileToBlob(image);

          case 4:
            imgBlob = _context.sent;

          case 5:
            validateFileSize(imgBlob.size, options);
            validateFileType(imgBlob.type, options);
            return _context.abrupt("return", imgBlob);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validateAndGetBlob(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var validateFileType = function validateFileType(fileType, options) {
  var accepted = false;
  options.allowedFileTypes.forEach(function (allowedFileType) {
    var regEx = new RegExp("image/" + allowedFileType);
    if (regEx.test(fileType)) accepted = true;
  });
  return accepted;
};
var fileToBlob = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
    var getBlob;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            getBlob = function getBlob() {
              return new Promise(function (resolve, _reject) {
                var fileReader = new FileReader();

                fileReader.onload = function (event) {
                  resolve(new Blob([event.target.result], {
                    type: file.type
                  }));
                };

                fileReader.readAsArrayBuffer(file);
              });
            };

            return _context2.abrupt("return", getBlob());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fileToBlob(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var validateFileSize = function validateFileSize(imageSize, options) {
  if (imageSize > options.sizeLimit) {
    throw new Error("Please upload an image of size less than ".concat(options.sizeLimit / (1024 * 1024), "MB"));
  }
};
var base64ToBlob = function base64ToBlob(base64, fileType) {
  var sliceSize = 512; // uses 512 as packet size for efficient conversion

  var regEx = new RegExp("^data:" + fileType + ";base64,");
  base64 = base64.replace(regEx, "");
  var byteCharacters = atob(base64);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);

    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, {
    type: fileType
  });
  return blob;
};
var base64ToFile = function base64ToFile(base64, fileType, fileName) {
  var imgBlob = base64ToBlob(base64, fileType);
  return new File([imgBlob], fileName, {
    type: fileType
  });
};
var utils_validateOutputType = function validateOutputType(type) {
  if (!Object.values(OUTPUT_TYPE).includes(type)) {
    throw new Error("invalid output type ".concat(type));
  }
};
// CONCATENATED MODULE: ./src/resizeImage.js
function resizeImage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function resizeImage_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { resizeImage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { resizeImage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // Returns a promise

var resizeImageFn = /*#__PURE__*/function () {
  var _ref = resizeImage_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imgBlob, fileName, options, resolve, _reject) {
    var blobURL, image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            window.URL = window.URL || window.webkitURL;
            blobURL = window.URL.createObjectURL(imgBlob); // and get it's URL
            // helper Image object

            image = new Image();
            image.src = blobURL;

            image.onload = function () {
              // have to wait till it's loaded
              window.URL.revokeObjectURL(blobURL);
              var resizedImage = resizeImageCanvas(image, imgBlob.type, options); // send it to canvas

              switch (options.outputType) {
                case OUTPUT_TYPE.BASE64:
                  resolve(resizedImage);
                  break;

                case OUTPUT_TYPE.BLOB:
                  resizedImage.output = base64ToBlob(resizedImage.output, imgBlob.type);
                  resolve(resizedImage);
                  break;

                default:
                  resizedImage.output = base64ToFile(resizedImage.output, imgBlob.type, fileName);
                  resolve(resizedImage);
                  break;
              }
            };

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function resizeImageFn(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var resizeImageCanvas = function resizeImageCanvas(img, fileType, options) {
  var canvas = document.createElement("canvas");
  var width = img.width;
  var height = img.height; // calculate the width and height, constraining the proportions

  if (width > height) {
    if (width > options.maxWidth) {
      height = Math.round(height *= options.maxWidth / width);
      width = options.maxWidth;
    }
  } else {
    if (height > options.maxHeight) {
      width = Math.round(width *= options.maxHeight / height);
      height = options.maxHeight;
    }
  } // resize the canvas and draw the image data into it


  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");
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
// CONCATENATED MODULE: ./src/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var src_TransformImage =
/*
  Options - An object with following properties
  sizeLimit : the byte size limit for the input file/blob
  outputType: defines the output object format. Allowed values :- blob/base64/file
  allowedFileTypes: allowed types for the input file/blob e.g. PNG, JPEG, JPG
*/
function TransformImage() {
  var _this = this;

  var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, TransformImage);

  _defineProperty(this, "resizeImage", /*#__PURE__*/function () {
    var _ref = src_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
      var options,
          fileName,
          imgBlob,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              fileName = _args.length > 2 && _args[2] !== undefined ? _args[2] : "";

              if (image) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              options.maxWidth = options.maxWidth || defaults.maxWidth;
              options.maxHeight = options.maxHeight || defaults.maxHeight;
              options.quality = options.quality || defaults.quality; // Quality - A value between 0 and 1 to denote the quality of the image in the output

              _context.next = 9;
              return validateAndGetBlob(image, _this.options);

            case 9:
              imgBlob = _context.sent;
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                resizeImageFn(imgBlob, fileName, _objectSpread({}, _this.options, {
                  options: options
                }), resolve, reject);
              }));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  _options.sizeLimit = _options.sizeLimit || defaults.sizeLimit;
  _options.outputType = _options.outputType || defaults.outputType; // output object format BLOB/BASE64/FILE

  utils_validateOutputType(_options.outputType);
  _options.allowedFileTypes = _options.allowedFileTypes || defaults.allowedFileTypes; // An array of allowed file types

  this.options = _options;
}
/*
@params
image - File object / Blob
Options - An object with following properties
  maxWidth: the max width for the file in px
  maxHeight: the max height for the file in px
  quality: a value between 0 and 1 to denote the quality of the output image
fileName - Name of the file if input is file (Optional)
*/
;

/* harmony default export */ var src = (src_TransformImage);
// CONCATENATED MODULE: ./index.js


/***/ })
/******/ ]);
//# sourceMappingURL=transform-image-js.map