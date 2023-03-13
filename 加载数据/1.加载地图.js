
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhOWZkZDMyNS04ZTcxLTQyODEtYTIxOS04NzkzMDI4MWYyMTciLCJpZCI6MTIwMTIwLCJpYXQiOjE2NzI3MTU5MDl9.AkykevLNG7aImztKVzQCC18u0LCfTFwlbL-qNzS87qE";

// Viewer 是Cesium任何应用程序的基础
const viewer = new Cesium.Viewer("cesiumContainer");
// 1. 加载arcgis地图 [已经定义好的provider]
// https://cesium.com/learn/cesiumjs/ref-doc/ArcGisMapServerImageryProvider.html
// const img_arcgis = new Cesium.ArcGisMapServerImageryProvider({
//   url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
// })
// viewer.scene.imageryLayers.addImageryProvider(img_arcgis)

// 2. 加载高德地图
// const img_gd = new Cesium.UrlTemplateImageryProvider({
//   // Gets the URL template to use to request tiles. 
//   url:"http://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
//   // url:"http://webst02.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}"   // 高德矢量
// })

// 3. 谷歌影像
// 经常访问不到
// var img_google = new Cesium.UrlTemplateImageryProvider({
//   // subdomains 可用子域之一，用于克服浏览器对每台主机同时请求数的限制。
//   subdomains: ["1", "2", "3"],
//   // url: "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}"  // 谷歌影像
//   url: 'http://mt{s}.google.cn/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}'  // 谷歌矢量
  
// });

// 4. 谷歌地球💦
// var geeMetadata = new Cesium.GoogleEarthEnterpriseMetadata({
//   url : 'http://www.earthenterprise.org/3d',
//   proxy : new Cesium.DefaultProxy('/proxy/')
// });
// var gee_Imagery = new Cesium.GoogleEarthEnterpriseImageryProvider({
//   metadata : geeMetadata
// });
// var gee_Terrain = new Cesium.GoogleEarthEnterpriseTerrainProvider({
//   metadata : geeMetadata
// });
// var viewer = initCesium.initViewer('cesiumContainer', {
//   imageryProvider : gee_Imagery,
//   terrainProvider : gee_Terrain,
//   baseLayerPicker : false
// });

// Start off looking at San Francisco.
viewer.camera.setView({
  destination: Cesium.Rectangle.fromDegrees(-123.0, 36.0, -121.7, 39.0)
});
// 跨域政策访问不到

// 5. 天地图
var img_tdt=new Cesium.WebMapTileServiceImageryProvider({
  url: "http://{s}.tianditu.com/img_w/wmts?tk="+tdt_key,
  layer:'img',
  style:'default',
  tileMatrixSetID:'w',
  format:'tiles',
  maximumLevel: 18,
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
});
var img_wms= new Cesium.WebMapTileServiceImageryProvider({
  url: 'http://{s}.tianditu.gov.cn/cia_w/wmts?tk='+tdt_key,
  layer:'cia',
  style:'default',
  tileMatrixSetID:'w',
  format:'tiles',
  maximumLevel: 18,
  subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]

});

// viewer.scene.imageryLayers.removeAll()
viewer.scene.imageryLayers.addImageryProvider(gee_Imagery)
console.log(viewer.scene.imageryLayers);

