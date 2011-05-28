class global.Factory
  @stringToFunction: (string) ->
    array = string.split(".")
    
    fn = (global || this)
    for node in array
      fn = fn[node]
    
    throw new Error("function not found") if typeof(fn) != "function"
    
    fn
  
  @definitions: {}
  
  @define: (name, options, attributes) ->
    options     or= {}
    attributes  or= {}
    
    class_name        = if options.class_name? then options.class_name else name
    parent_class_name = if options.parent? then parent else null
    defaults          = _.extend({}, options.parent?.defaults, {});
    defaults          = _.extend({}, defaults, attributes);
    
    clazz             = Factory.stringToFunction(class_name)
    
    F = (args) ->
      args or= {}
      new clazz(_.extend({}, defaults, args))
    F.defaults = defaults;
    Factory.definitions[name] = F
    F
  
  @create: (name, options) ->
    Factory.definitions[name](options)