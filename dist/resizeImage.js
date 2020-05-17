(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTPUT_TYPE", function() { return OUTPUT_TYPE; });
var OUTPUT_TYPE = {
  BLOB: "blob",
  BASE64: "base64",
  FILE: "file"
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAndGetBlob", function() { return validateAndGetBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFileType", function() { return validateFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileToBlob", function() { return fileToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFileSize", function() { return validateFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToBlob", function() { return base64ToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOutputType", function() { return validateOutputType; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
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
var validateOutputType = function validateOutputType(type) {
  if (!Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__["OUTPUT_TYPE"]).includes(type)) {
    throw new Error("invalid output type ".concat(type));
  }
};

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeImageFn", function() { return resizeImageFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeImageCanvas", function() { return resizeImageCanvas; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // Returns a promise

var resizeImageFn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imgBlob, fileName, options, resolve, _reject) {
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
                case _constants__WEBPACK_IMPORTED_MODULE_1__["OUTPUT_TYPE"].BASE64:
                  resolve(resizedImage);
                  break;

                case _constants__WEBPACK_IMPORTED_MODULE_1__["OUTPUT_TYPE"].BLOB:
                  resizedImage.output = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["base64ToBlob"])(resizedImage.output, imgBlob.type);
                  resolve(resizedImage);
                  break;

                default:
                  resizedImage.output = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["base64ToFile"])(resizedImage.output, imgBlob.type, fileName);
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=resizeImage.js.map