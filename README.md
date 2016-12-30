# UploadCompressImage
###Upload files with resizing to a specified dimension using javascript

Its a plugin that enables you upload image files to the server with a front-end side compression. So basically the image that you upload gets redrawn on the canvas with new dimension that you specify in the options and a compressed base64 encoded string is obtained from it. Now most of us these days have a phone with a fancy camera, that clicks the images of sizes of around 8-13 MB. So uploading that kind of size onto the server is totally not acceptable. So you wish to either compress on front end side or the server side. Android has some libraries that allows you to compress the files before sending onto the server, but on the other hand there is no such solid lead available on the browser side.

So here's a plugin that comes to the rescue.

I have listed out the events, methods and params for incorporating the plugin at my gist.
Gist for jquery plugin - [jquerygist]
Gist for npm module - [npmgist]

The logic behind compression is that the larger size images have ample amount of resolution to them, but most of the time that kind of
resolution is not needed. So this plugin is basically resizing the higher resolution image to the specified dimensions that you will
provide or it is going to use the default dimensions as specified inside the plugin. To use the compression algorithm on the front end
especially with the current browser specs is quite a heavy task and it will slow down your page with high CPU usage, so resizing on the
other hand helps.

This repository contains both jquery plugin as well as a npm module code. You can use it as per your convenience.

I haven't done anything on the styling part, because I guess most of you would want to do it on your side, since everybody wants a custom thing. So you can go through the IDs of the element that I have created and style it on your own. This repo only contains a simple JS file.

So feel free to write any suggestions.

[jquerygist]: <https://gist.github.com/shellophobia/547a13696996eebbcf20b19f1bfffca4>
[npmgist]: <https://gist.github.com/shellophobia/7480afeda989bdd7fa93af6147ddd14d>
