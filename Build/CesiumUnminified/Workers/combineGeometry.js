define(['./PrimitivePipeline-21a6cbd5', './createTaskProcessorWorker', './Transforms-b6969c22', './Matrix3-51afcfcb', './Check-e01dbea3', './defaultValue-040c41f9', './Math-f7bd710c', './Matrix2-3a8613cf', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-7be0199d', './GeometryAttributes-52134c76', './GeometryPipeline-34435fcf', './AttributeCompression-ec6d27e6', './EncodedCartesian3-c698f48c', './IndexDatatype-086e75a1', './IntersectionTests-be66d187', './Plane-d89efb5b', './WebMercatorProjection-89a2d10a'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix3, Check, defaultValue, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
//# sourceMappingURL=combineGeometry.js.map
