angular.module('MyApp.controllers', [])

.controller('LinkedinCtrl', function($scope, $http, $location) {

  $scope.login = function() {

    // Ideally these should be stored as environment variables for security reasons
    var clientId = 'dniby53njwcere';                                  // LinkedIn application client ID
    var clientSecret = 'OeKTBZDDcGVuPY9o';                            // LinkedIn application client secret
    var redirectUri = 'http://localhost:3000';                        // Authorised application URL
    var state = 'kBTXHWAprV';                                         // Any random string
    var profileData = 'r_fullprofile%20r_emailaddress%20w_share';     // The profile data you want to be available
    var redirectPath = '/app/posts';                                  // Path to redirect to after login

    var req = {
      method: 'post',
      url: 'https://www.linkedin.com/uas/oauth2/accessToken',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: 'authorization_code':
        code: requestToken,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
      }
    };

    var ref = window.open('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=' + clientId + '&redirect_uri=' + redirectUrl + '&state=' + state + '&scope=' + profileData, '_blank', 'location=no');
    ref.addEventListener('loadstart', function(event) {
      if ((event.url).startsWith(redirectUri)) {
        requestToken = (event.url).split('code=')[1];
        $http(req)
        .success(function(data) {
          accessToken = data.access_token;
          expiresIn = data.expires_in;
          $location.path(redirectPath);
        })
        .error(function(data, status) {
          alert('Error: ' + JSON.stringify(data));
        })
        .finally(function() {
          ref.close();
        });
      }
    });
  }

  if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str) {
      return this.indexOf(str) == 0;
    };
  }
})

$scope.getData = function(fields) {

  fieldsUrl = fields.join(',');

  var req = {
    method: 'get',
    url: 'https://api.linkedin.com/v1/people/~:' + fieldsUrl +'?format=json',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  };

  $http(req)
  .success(function(data) {
    $scope.data = data;
  })
  .error(function(data, status) {
    alert('Error: ' + JSON.stringify(data));
  });
};
