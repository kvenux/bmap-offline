# bmap-offline
Baidu Map JavaScript API offline components 

## Overview

Offline use of the map is commonly supported on iOS or Android.
However for web-based platforms where disconnection would not happen, offline usage is not provided.
bmap-offline is modified JavaScript API to support offline usage on web-based platforms, such as Electron.
Satellite, normal, hybrid types are supported.
This project can be used to build an map app with offline needs.
Note that the maptiles need to be cached first.

## Usage

This project requires Electron.
You may need an [APIKEY](http://lbsyun.baidu.com/index.php?title=jspopular) first.
Replace with your key in js/apiv2.0.min.js.

```js
window.BMAP_AUTHENTIC_KEY = "YOUR_KEY";
```

To run this example:

```bash
npm install
electron .
```

## Modification
Cached maptile files are located in maptile folder.
images folder contains downloaded Bmap resources.
Main html file need to add bmap.css and apiv2.0.min.js file.
Mapfile files is cached in getTilesUrl function in apiv2.0.min.js.
Bmap would check cached tile first when try to request a maptile url.