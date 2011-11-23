var User;
var __hasProp = Object.prototype.hasOwnProperty;
User = function(_arg) {
  var _i, _ref, attr;
  this.attributes = _arg;
  this.attributes || (this.attributes = {});
  _ref = this.attributes;
  for (attr in _ref) {
    if (!__hasProp.call(_ref, attr)) continue;
    _i = _ref[attr];
    this[attr] = this.attributes[attr];
  }
  return this;
};
exports.User = User;
exports.M = {};
exports.M.User = User;