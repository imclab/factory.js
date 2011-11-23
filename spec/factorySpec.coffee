describe 'Factory:', ->
  describe 'simple attributes:', ->
    beforeEach ->
      @user = Factory.create "User",
        email:        "factory@js.com"
      
    it 'should create', ->
      expect(@user.email).toEqual("factory@js.com");
  
  describe 'evaluated attributes:', ->
    beforeEach ->
      @user = Factory.create "User",
        first_name:   "lance"
        email: ->     "#{@first_name}@js.com"
        
    it 'should allow for evaluated attributes', ->
      expect(@user.email).toEqual("lance@js.com");