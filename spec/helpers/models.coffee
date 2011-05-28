M.User = class User 
  constructor: (@attributes) ->
    @attributes or= {}
    if 'email' not of @attributes
      throw 'All users must have an email address'
  get: (attr) -> @attributes[attr]
  set: (attr,val) -> @attributes[attr] = val
