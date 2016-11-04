// Initialize Firebase
var config = {
    apiKey: "AIzaSyDFdy1x8iytVtudAy1Ki3mBZm7zuvggBhE",
    authDomain: "web-quickstart-ab17d.firebaseapp.com",
    databaseURL: "https://web-quickstart-ab17d.firebaseio.com",
    storageBucket: "web-quickstart-ab17d.appspot.com",
    messagingSenderId: "110651498358"
};

firebase.initializeApp(config);

// initialise firebase auth;
var provider = new firebase.auth.GoogleAuthProvider();

// get objects
var username = document.getElementById('user'),
    password = document.getElementById('pass'),
    btnLogin = document.getElementById('loginGoogle'),
    btnSignup = document.getElementById('loginFacebook'),
    btnSignOut = document.getElementById('signOut');

var loginBlock = document.getElementById('login'),
    userBlock = document.getElementById('user');

btnLogin.addEventListener('click', function(){
    firebase.auth().signInWithPopup(provider)
    .then(function(res){
        /*loginBlock.addClass('hide');
        userBlock.removeClass('hide');*/
        console.info('logged in', res);
    })
    .catch(function(err){
        console.error(err.message);
    });
});

btnSignOut.addEventListener('click', function(){
    firebase.auth().signOut()
    .then(function(res){
        console.info('Signed out succesfully');
        console.info(res);
    }).catch(function(err){
        console.error('Unable to signout');
        console.error(err);
    });
});