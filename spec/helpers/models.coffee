M = {} # Namespace for models
M.User = class User 
  constructor: (@attributes) ->
    @attributes or= {}
    if 'registration' not of @attributes
      throw 'All vehicles must have a registration number'
  get: (attr) -> @attributes[attr]
  set: (attr,val) -> @attributes[attr] = val
