(function() {
  var Factory;
  Factory = function(originalClass, opts) {
    var F, defaults;
    defaults = _.extend({}, opts.parent == null ? undefined : opts.parent.defaults, opts.defaults);
    F = function(args) {
      args || (args = {});
      return new originalClass(_.extend({}, defaults, args));
    };
    F.defaults = defaults;
    return F;
  };
}).call(this);
