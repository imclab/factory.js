(function() {
  global.Factory = function() {};
  global.Factory.stringToFunction = function(string) {
    var _i, _len, _ref, array, fn, node;
    array = string.split(".");
    fn = (global || this);
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
  global.Factory.definitions = {};
  global.Factory.define = function(name, options, attributes) {
    var F, _ref, class_name, clazz, defaults, parent_class_name;
    options || (options = {});
    attributes || (attributes = {});
    class_name = (typeof (_ref = options.class_name) !== "undefined" && _ref !== null) ? options.class_name : name;
    parent_class_name = (typeof (_ref = options.parent) !== "undefined" && _ref !== null) ? parent : null;
    defaults = _.extend({}, options.parent == null ? undefined : options.parent.defaults, {});
    defaults = _.extend({}, defaults, attributes);
    clazz = Factory.stringToFunction(class_name);
    F = function(args) {
      args || (args = {});
      return new clazz(_.extend({}, defaults, args));
    };
    F.defaults = defaults;
    Factory.definitions[name] = F;
    return F;
  };
  global.Factory.create = function(name, options) {
    return Factory.definitions[name](options);
  };
}).call(this);
