M.User = class User 
  constructor: (@attributes) ->
    @attributes or= {}
    @email = @attributes.email
  get: (attr) -> @attributes[attr]
  set: (attr,val) -> @attributes[attr] = val