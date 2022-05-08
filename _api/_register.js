var jsonfile = require('jsonfile')
var file = 'users.json'

// Register Information (Required)
var username = document.getElementById('Username');
var email  = document.getElementById('Email');
var password  = document.getElementById('Password');

// JsonFile Translate
var UsernameApply = { username: `${username}` }
var EmailApply = { email: `${email}` }
var PasswordApply = { password: `${password}` }

jsonfile.writeFile(file, UsernameApply, EmailApply, PasswordApply)
