var Factory, window;
var __hasProp = Object.prototype.hasOwnProperty;
window || (window = global);
Factory = function() {};
Factory.stringToFunction = function(string) {
  var _i, _len, _ref, array, fn, node;
  array = string.split(".");
  fn = (window || this);
  _ref = array;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    node = _ref[_i];
    fn = fn[node];
  }
  if (typeof (fn) !== "function") {
    throw new Error("function not found");
  }
  return fn;
};
Factory.definitions = {};
Factory.define = function(name, options, attributes) {
  var F, _ref, class_name, clazz, defaults, parent_class_name;
  options || (options = {});
  attributes || (attributes = {});
  class_name = (typeof (_ref = options.class_name) !== "undefined" && _ref !== null) ? options.class_name : name;
  parent_class_name = (typeof (_ref = options.parent) !== "undefined" && _ref !== null) ? parent : null;
  defaults = _.extend({}, options.parent == null ? undefined : options.parent.defaults, {});
  defaults = _.extend({}, defaults, attributes);
  clazz = Factory.stringToFunction(class_name);
  F = function(args) {
    var _i, _ref2, attr, attrs;
    args || (args = {});
    attrs = _.extend({}, defaults, args);
    _ref2 = defaults;
    for (attr in _ref2) {
      if (!__hasProp.call(_ref2, attr)) continue;
      _i = _ref2[attr];
      if (typeof (attrs[attr]) === "function") {
        attrs[attr] = attrs[attr]();
      }
    }
    return new clazz(attrs);
  };
  F.defaults = defaults;
  Factory.definitions[name] = F;
  return F;
};
Factory.create = function(name, options) {
  return Factory.definitions[name](options);
};
exports.Factory = Factory;