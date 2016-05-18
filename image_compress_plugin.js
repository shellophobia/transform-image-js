var default_val = {
  url: '',
  sizeLimit: 16777216,
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.5,
  outputType: 'png',
  isBase64: false,
  allowFileType: ['jpg','png','jpeg'],
  enablePreview: false,
  inputFieldName: 'avatar',
  autoSubmit: true,
  isDragNDrop: true,
  appendFileInput: true,
  fileInputSelector: 'compressFileInput',
  allowMultiple: false,
  allowAjax: true,
  appendFormData: false
};

var uploadFile = function(options) {
  var self = this;
  this.url = options.url || default_val['url'];
  this.sizeLimit = options.sizeLimit || default_val['sizeLimit'];
  this.maxWidth = options.maxWidth || default_val['maxWidth'];
  this.maxHeight = options.maxHeight || default_val['maxHeight'];
  this.quality = options.quality || default_val['quality'];
  this.outputType = options.outputType || default_val['outputType'];
  this.isBase64 = (typeof options.isBase64 === "undefined") ? default_val['isBase64'] : options.isBase64;
  this.allowFileType = options.allowFileType || default_val['allowFileType'];
  
  this.enablePreview = (typeof options.enablePreview === "undefined") ? default_val['enablePreview'] : options.enablePreview;
  // if enable preview is enabled then specify the preview Selector
  this.previewSelector = options.previewSelector;
  
  this.inputFieldName = options.inputFieldName || default_val['inputFieldName'];
  this.autoSubmit = (typeof options.autoSubmit === "undefined") ? default_val['autoSubmit'] : options.autoSubmit;
  this.isDragNDrop = (typeof options.isDragNDrop === "undefined") ? default_val['isDragNDrop'] : options.isDragNDrop;
  
  this.appendFileInput = (typeof options.appendFileInput === "undefined") ? default_val['appendFileInput'] : options.appendFileInput;
  // if append file input is set to false then specify the input selector
  this.fileInputSelector = options.fileInputSelector || default_val['fileInputSelector'];
  
  this.allowMultiple = (typeof options.allowMultiple === "undefined") ? default_val['allowMultiple'] : options.allowMultiple;
  // if allow multiple is set to true
  this.maxFiles = options.maxFiles;
  
  // allow ajax call to server
  this.allowAjax = (typeof options.allowAjax === "undefined") ? default_val['allowAjax'] : options.allowAjax;
  
  this.appendFormData = (typeof options.appendFormData === "undefined") ? default_val['appendFormData'] : options.appendFormData;
  //append formdata from form
  this.formID = options.formID;
  //append formdata from string ["param1=x&param2=y"]
  this.formDataString = options.formDataString;
  
  // no op
  this.noop = function() { return; }
  
  this.onLoad = options.onLoad || this.noop;
  this.beforeSubmit = options.beforeSubmit || this.noop;
  this.onSuccess = options.onSuccess || this.noop;
  this.onFailure = options.onFailure || this.noop;
  this.targetElem = this.selector;
  this.stopFlag = false;
  this.formDataArray = {};
  this.imageID = 0;
  
  self.formData = new FormData();
  
  // construct the input DOM
  var toAppend = '<span>Click on the div to upload<p>Or Drag n Drop the file</p></span><input type = "file" ' + (this.allowMultiple ? 'multiple = "true"' : '')  + ' style = "position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;z-index:100;cursor:pointer;height:100%;width:100%;">';
  this.toAppend = options.toAppend || toAppend;
  if (this.appendFileInput) {
    $(this.targetElem).append(this.toAppend).css('position', 'relative');
    $($(this.targetElem).find('input[type=file]')).attr('id', this.fileInputSelector);
  }
  else {
    if (this.fileInputSelector !== "compressFileInput") {
      this.fileinput = $('#' + this.fileInputSelector);
    }
    else {
      $(this.targetElem).find('input[type=file]').attr('id', this.fileInputSelector);
    }
  }

  // read files
  this.readFiles = function(files) {
    for (var i = 0; i < files.length; i++) {
      this.processFile(files[i]); // process each file at once
    }
    var fileinput = document.getElementById(this.fileInputSelector);
    fileinput.value = "";
  }
  
  this.testFileType = function(fileType) {
    var accepted = false;
    for (var i=0; i < this.allowFileType.length; i++) {
      var regEx = new RegExp('image/' + this.allowFileType[i]);
      if (regEx.test(fileType))
        accepted = true;
    }
    return accepted; 
  }
  
  this.processFile = function(file) {
    if (! this.testFileType(file.type)) {
      alert( "File "+ file.name +" is not an image." );
      return false;
    }
    
    // fire the onload callback
    this.onLoad();
    
    // read the files
    var reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = function (event) {
      // blob stuff
      var blob = new Blob([event.target.result]); // create blob...
      var image_size = blob.size;
      // attach a 16 mb limit to images
      if (image_size > this.sizeLimit) {
        alert('Please upload an image of size less than ' + this.sizeLimit/(1024*1024) + 'MB');
      }
      window.URL = window.URL || window.webkitURL;
      var blobURL = window.URL.createObjectURL(blob); // and get it's URL
      
      // helper Image object
      var image = new Image();
      image.src = blobURL;
      image.onload = function() {
        // have to wait till it's loaded
        var resized = self.resizeImg(image); // send it to canvas
        var resized_blob;
        
        if (self.isBase64) {
          self.formData.append(self.inputFieldName + (self.allowMultiple ? '[]' : ''), resized);
        }
        else {
          resized_blob = self.base64ToBlob(resized);
          if (resized_blob.size > file.size) {
            resized_blob = file;
          }
          self.formData.append(self.inputFieldName + (self.allowMultiple ? '[]' : ''), resized_blob);
        }
        
        if (self.allowAjax) {
          if (self.autoSubmit) {
            self.submitFormData();
          } else {
            self.formDataArray[self.imageID] = (self.isBase64 ? resized : resized_blob);
            self.imageID++;
          }
        }
        else {
          if (self.isBase64) {
            var hiddenInput = document.createElement('input');
            hiddenInput.setAttribute('type', 'hidden');
            hiddenInput.setAttribute('name', self.inputFieldName + (self.allowMultiple ? '[]' : ''));
            hiddenInput.setAttribute('value', resized);
            hiddenInput.setAttribute('id', 'hidden' + self.imageID);
            document.getElementById(self.targetElem.substring(1)).appendChild(hiddenInput);
          }
        }
        
      }
    };
  }
  
  this.appendUserFormData = function() {
    
    // serialize form data to get a string of form data
    if (typeof this.formID !== "undefined") { this.formDataString = $(this.formID).serialize(); }
    
    this.formDataString = this.formDataString.split('&');
    
    for (var i=0; i<this.formDataString.length; i++) {
      var keyValue = this.formDataString[i].split('=');
      this.formData.append(keyValue[0], keyValue[1]);
    }
    
  }
  
  this.appendImageData = function() {
    var keys = Object.keys(this.formDataArray);
    this.formData = new FormData();
    for (var i=0; i<keys.length; i++) {
      this.formData.append(this.inputFieldName + (self.allowMultiple ? '[]' : ''), this.formDataArray[keys[i]]);
    }
  }
  
  // post data function
  this.submitFormData = function() {
    if (this.stopFlag) return;
    if(this.appendFormData) this.appendUserFormData();
    this.beforeSubmit();
    $.ajax({
      url: this.url,
      data: this.formData,
      type: 'POST',
      processData: false,
      contentType: false
    }).done(function(data) { self.onSuccess(data) }).fail( function() { self.onFailure() });
  }
  
  // starts the upload
  this.startUpload = function() {
    this.stopFlag = false;
    if (!this.allowAjax) { console.log('Ajax is set to false'); return;}
    if (!this.autoSubmit) {
      this.appendImageData();
      this.submitFormData();
    }
    else {
      this.submitFormData();
    }
  }
  
  // stops the upload
  this.stopUpload = function() {
    this.stopFlag = true;
  }
  
  this.resizeImg = function(img) {
    
    var canvas = document.createElement('canvas');

    var width = img.width;
    var height = img.height;

    // calculate the width and height, constraining the proportions
    if (width > height) {
      if (width > this.maxWidth) {
        height = Math.round(height *= this.maxWidth / width);
        width = this.maxWidth;
      }
    } else {
      if (height > this.maxHeight) {
        width = Math.round(width *= this.maxHeight / height);
        height = this.maxHeight;
      }
    }
    
    // resize the canvas and draw the image data into it
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    
    if (this.enablePreview) {
      var parentDiv = document.createElement('div');
      parentDiv.setAttribute('class', 'preview_container');
      var previewSelector = document.getElementById(this.previewSelector.substring(1));
      parentDiv.appendChild(canvas);
      var button = document.createElement('button');
      button.innerHTML = 'Delete';
      button.setAttribute('class', 'delete_preview');
      button.setAttribute('data-id', this.imageID);
      parentDiv.appendChild(button);
      previewSelector.appendChild(parentDiv);
    }
    
    return canvas.toDataURL("image/" + this.outputType, this.quality); // get the data from canvas as 50% JPG (can be also PNG, etc.)
  }
  
  this.base64ToBlob = function(base64, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512; // uses 512 as packet size for efficient conversion
    var regEx = new RegExp('^data:image/' + this.outputType + ';base64,');
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

    var blob = new Blob(byteArrays, {type: 'image/' + this.outputType});
    return blob;
  }
  
  // removes the upload Area container from dom
  this.removeField = function() {
    this.stopUpload();
    if (this.toAppend) {
      $(this.targetElem).html('');
    }
    if (this.enablePreview) {
      $(this.previewSelector).html('');
    }
  }
  
  // read files from input
  $('body').on('change', '#' + this.fileInputSelector, function(e) {
    if ( !( window.File && window.FileReader && window.FileList && window.Blob ) ) {
      alert('The File APIs are not fully supported in this browser.');
      return false;
    }
    self.readFiles(e.currentTarget.files);
  });
  
  // delete preview code
  $('body').on('click', '.delete_preview', function(e) {
    $(this).parent().remove();
    delete self.formDataArray[$(this).data('id')];
    $('#hidden' + $(this).data('id')).remove();
    var fileinput = document.getElementById(self.fileInputSelector);
    fileinput.value = "";
  });
  
  if (this.isDragNDrop) {
    // code for drag and drop images
    var $uploadArea = $(this.targetElem);
    
    // drag and drop feature integrated
    $uploadArea.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
      e.preventDefault();
      e.stopPropagation();
    }).on('dragover dragenter', function() {
      $uploadArea.addClass('is-dragover');
    }).on('dragleave dragend drop', function() {
      $uploadArea.removeClass('is-dragover');
    }).on('drop', function(e) {
      droppedFiles = e.originalEvent.dataTransfer.files;
      $uploadArea.addClass('ajax-file-upload-statusbar');
      self.readFiles(droppedFiles);
    });
  }
  
  return this;
};

// adds the method to jquery object
(function($) {
  $.fn.extend({
    uploadFile: uploadFile
  });
}(jQuery));
