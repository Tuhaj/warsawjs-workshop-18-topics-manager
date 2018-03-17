'use strict'
require('bulma')
const hello = require('hellojs')

hello.init({
  github: '8fa50de40d90f1f92c96'
})

const github = hello('github');

const githubLogin = document.querySelector('#GitHub-login')

githubLogin.addEventListener('click', () => {
  github.login().then(function () {
    console.log('You are signed in to GitHub')
  }, function (e) {
    console.log('Signin error: ' + e.error.message)
  })
})
