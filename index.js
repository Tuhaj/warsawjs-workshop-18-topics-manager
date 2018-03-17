'use strict'
require('bulma')
const hello = require('hellojs')

hello.init({
  github: '8fa50de40d90f1f92c96',
}, {
  redirect_uri: 'http://localhost:1234'
})

const github = hello('github');

const githubLogin = document.querySelector('#GitHub-login')
const userName = document.querySelector('#user-panel')
githubLogin.addEventListener('click', (e) => {
  e.preventDefault()
  github.login().then(function () {
    return github.api('/me');
  })
  .then(function(user) {
    userName.textContent = `Hello ${user.login}`
  }, function (e) {
    console.log('Signin error: ' + e.error.message)
  })
})
