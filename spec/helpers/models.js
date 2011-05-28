var User;
M.User = (function() {
  User = function(_arg) {
    this.attributes = _arg;
    this.attributes || (this.attributes = {});
    if (!('email' in this.attributes)) {
      throw 'All users must have an email address';
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