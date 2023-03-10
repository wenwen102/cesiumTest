
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhOWZkZDMyNS04ZTcxLTQyODEtYTIxOS04NzkzMDI4MWYyMTciLCJpZCI6MTIwMTIwLCJpYXQiOjE2NzI3MTU5MDl9.AkykevLNG7aImztKVzQCC18u0LCfTFwlbL-qNzS87qE";

// Viewer 是Cesium任何应用程序的基础
const viewer = new Cesium.Viewer("cesiumContainer");
// Add Sentinel-2 imagery
viewer.imageryLayers.addImageryProvider(
  new Cesium.IonImageryProvider({ assetId: 3954 })
);
// Remove default base layer
viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
// Load Cesium World Terrain
viewer.terrainProvider = Cesium.createWorldTerrain({
  requestWaterMask: true, // required for water effects
  requestVertexNormals: true, // required for terrain lighting
});
// Enable depth testing so things behind the terrain disappear.
viewer.scene.globe.depthTestAgainstTerrain = true;

// view.scene 控制了viewer中的多有图形元素
// 激活太阳位置的日照
viewer.scene.globe.enableLightning = true;

// 入门五: 绘制形状
// 1.通过entities添加形状
const redBox = viewer.entities.add({
  name: "red box with black outline",
  position: Cesium.Cartesian3.fromDegrees(-107, 40, 30000),
  box: {
    dimensions: new Cesium.Cartesian3(400000, 300000, 500000),
    material: Cesium.Color.RED.withAlpha(0.5),
    outilne: true,
    outlineColor: Cesium.Color.BLACK,
  },
});
// 2.通过CZML添加形状
// czml还可以描述动画
// 是一种JSON格式的字符串, 描述与时间有关的动画场景
var czml = [
  {
    id: "document",
    name: "box",
    version: "1.0",
  },
  {
    id: "shape2",
    name: "Red box with black outline",
    position: {
      cartographicDegrees: [-107.0, 40.0, 300000.0],
    },
    box: {
      dimensions: {
        cartesian: [400000.0, 300000.0, 500000.0],
      },
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 128],
          },
        },
      },
      outline: true,
      outlineColor: {
        rgba: [0, 0, 0, 255],
      },
    },
  },
];

var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
viewer.dataSources.add(dataSourcePromise);
viewer.zoomTo(dataSourcePromise);

// viewer.zoomTo(viewer.entities);
