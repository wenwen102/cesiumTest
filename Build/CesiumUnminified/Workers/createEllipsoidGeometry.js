define(['./defaultValue-040c41f9', './EllipsoidGeometry-bab77128', './Transforms-b6969c22', './Matrix3-51afcfcb', './Check-e01dbea3', './Math-f7bd710c', './Matrix2-3a8613cf', './RuntimeError-3c5db370', './combine-6eb6e848', './ComponentDatatype-614bb7b9', './WebGLConstants-f7267ced', './GeometryAttribute-7be0199d', './GeometryAttributes-52134c76', './GeometryOffsetAttribute-b6810db4', './IndexDatatype-086e75a1', './VertexFormat-4802f782'], (function (defaultValue, EllipsoidGeometry, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype, VertexFormat) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

}));
//# sourceMappingURL=createEllipsoidGeometry.js.map
