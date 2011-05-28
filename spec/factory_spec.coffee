describe 'Factory:', ->
  beforeEach ->
    @user = new F.User
      email: "factory@js.com"
      
  it 'should create', ->
    expect(@user.get("email")).toEqual("factory@js.com");