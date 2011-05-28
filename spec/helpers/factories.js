global.F = {};
F.User = Factory(M.User, {
  defaults: {
    first_name: 'John',
    last_name: 'Smith',
    email: 'local@host.com'
  }
});