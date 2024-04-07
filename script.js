
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});



{
    status: 'connected',
    authResponse: {
        accessToken: '{access-token}',
        expiresIn:'{unix-timestamp}',
        reauthorize_required_in:'{seconds-until-token-expires}',
        signedRequest:'{signed-parameter}',
        userID:'{user-id}'
    }
}

FB.login(function(response){
  // handle the response 
});

FB.login(function(response) {
  // handle the response
}, {scope: 'public_profile,email'});

FB.login(function(response) {
  if (response.status === 'connected') {
    // Logged into your webpage and Facebook.
  } else {
    // The person is not logged into your webpage or we are unable to tell. 
  }
});

FB.logout(function(response) {
   // Person is now logged out
});
