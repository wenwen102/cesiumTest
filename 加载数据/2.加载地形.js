Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhOWZkZDMyNS04ZTcxLTQyODEtYTIxOS04NzkzMDI4MWYyMTciLCJpZCI6MTIwMTIwLCJpYXQiOjE2NzI3MTU5MDl9.AkykevLNG7aImztKVzQCC18u0LCfTFwlbL-qNzS87qE";

// Viewer 是Cesium任何应用程序的基础
const viewer = new Cesium.Viewer("cesiumContainer",);

// 创建地形服务
const worldTerrain = Cesium.createWorldTerrain({  
  requestWaterMask: true,  // 添加水面波浪效果
  requestVertexNormals: true  // 添加地形光照
});

viewer.terrainProvider = worldTerrain
viewer.scene.globe.enableLightning = true;  // 地形和globe需要同时打开光照

// viewer.camera.setView({
//   destination: new Cesium.Cartesian3(87.47563316139518,28.202865475735194,7893.987890621303),
//   orientation:{"heading":6.197278588274816,"pitch":-0.2714262119490989,"roll":6.282936088697614}
// });