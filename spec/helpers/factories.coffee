global.F = {} # Namespace for factories
F.User = $.factory M.User,
  defaults:
    first_name: 'John'
    last_name: 'Smith'
    email: 'local@host.com'