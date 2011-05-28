describe 'Factory:', ->
  beforeEach ->
    @user = Factory.create "User",
      email: "factory@js.com"
      
  it 'should create', ->
    expect(@user.email).toEqual("factory@js.com");