'use strict'

require('bulma')
const hello = require('hellojs')
const config = require('./config.js')

let userId = null
let userAvatar = null
console.log("config.github", config.github);
hello.init({
  github: config.github,
}, {
  redirect_uri: config.redirect_uri
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
    userAvatar = user.avatar
    userId = user.id
  }, function (e) {
    console.log('Signin error: ' + e.error.message)
  })
})
