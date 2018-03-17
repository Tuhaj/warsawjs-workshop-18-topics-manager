'use strict';
require('bulma');
const hello = require('hellojs');

hello.init({
  'github': '8fa50de40d90f1f92c96'
});


const githubLogin = document.querySelector('#GitHub-login');

githubLogin.addEventListener('click', () => {
  hello('github').login().then(function() {
    alert('You are signed in to GitHub');
  }, function(e) {
    alert('Signin error: ' + e.error.message);
  });
})
