var M, User;
M = {};
M.User = (function() {
  User = function(_arg) {
    this.attributes = _arg;
    this.attributes || (this.attributes = {});
    if (!('registration' in this.attributes)) {
      throw 'All vehicles must have a registration number';
    }
    return this;
  };
  User.prototype.get = function(attr) {
    return this.attributes[attr];
  };
  User.prototype.set = function(attr, val) {
    return (this.attributes[attr] = val);
  };
  return User;
})();