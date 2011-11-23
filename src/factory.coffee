class Factory  
  @definitions: {}
  
  @define: (name, options, callback) ->
    @definitions[name] = new Factory(name, options, callback)
  
  @create: (name, options) ->
    factory = Factory.definitions[name]
    throw new Error("Factory '#{name}' doesn't exist.") unless factory
    factory.create(options)
    
  constructor: (name, options = {}, callback) ->
    return Factory.create(name, options) unless @constructor == Factory
    
    if typeof(options) == "function"
      callback  = options
      options   = {}
    
    throw new Error("Expected function callback for Factory '#{name}'") unless typeof(callback) == "function"
    
    @name             = name
    @className        = _.camelize("_" + (options.className || name))
    @parentClassName  = options.parent
    @callback         = callback
    
  toClass: ->
    parts = @className.split(".")
    fn    = if typeof(window) != "undefined" then window else (exports || this)
    fn    = fn[node] for node in parts
    
    throw new Error("Class #{string} not found") if typeof(fn) != "function"
    
    fn
    
  create: (overrides = {}) ->
    attributes      = {}
    defaults        = @callback.call(@) || {}
    
    attributes[key] = value for key, value of defaults
    attributes[key] = value for key, value of overrides
    
    klass           = @toClass()
    
    new klass(attributes)

if typeof(exports) != "undefined" && typeof(module) != "undefined"
  module.exports = Factory
else if typeof(window) != "undefined"
  window.Factory = Factory
else
  this.Factory = Factory
