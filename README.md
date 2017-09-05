# bmap-offline
Baidu Map JavaScript API offline components 

## Overview

Offline use of the map is commonly supported on iOS or Android.
However for web-based platforms where disconnection would not happen, offline usage is not provided.
bmap-offline is modified JavaScript API to support offline usage on web-based platforms, such as Electron.
Cached map tiles are located in maptile folder.
Satellite, normal, hybrid types are supported.

## Usage

This project requires Electron.
You may need an [APIKEY](http://lbsyun.baidu.com/index.php?title=jspopular) first.

```bash
npm install
electron .

```

## Modification
images folder contains downloaded Bmap resources.
Main html file need to add bmap.css and apiv2.0.min.js file.
Mapfile files is cached in getTilesUrl function in apiv2.0.min.js.
Bmap would check cached tile first when try to request a maptile url.