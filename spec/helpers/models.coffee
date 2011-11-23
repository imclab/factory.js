class User 
  constructor: (@attributes) ->
    @attributes or= {}
    for attr of @attributes
      @[attr] = @attributes[attr]
