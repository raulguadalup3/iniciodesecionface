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
