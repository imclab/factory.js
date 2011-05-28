Factory = (originalClass, opts) ->
  defaults = _.extend({}, opts.parent?.defaults, opts.defaults)
  F = (args) -> 
    args or= {}
    new originalClass(_.extend({}, defaults, args))
  F.defaults = defaults
  F