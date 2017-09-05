var mapOptions = {
  minZoom: 5,
  //mapType: BMAP_HYBRID_MAP
  //mapType: BMAP_NORMAL_MAP
  mapType: BMAP_SATELLITE_MAP
}
var map = new BMap.Map("container", mapOptions);
var initPoint = new BMap.Point(116.352634, 39.985821);
map.centerAndZoom(initPoint,18);
map.enableScrollWheelZoom();
map.enableKeyboard();
map.enableContinuousZoom();
map.enableDragging();
// map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_RIGHT, offset: new BMap.Size(20,80)}));