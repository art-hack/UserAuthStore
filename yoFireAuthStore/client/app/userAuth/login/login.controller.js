'use strict';

angular.module('yoFireAuthStoreApp')

    // Define the Login Controller
    .controller('LoginCtrl', function ($scope, FURL, Auth, $state, toaster) {

        // Don't allow login if you are logged in
        if (Auth.signedIn()) {
            toaster.pop('error', "Please logout before attempting to login");
            // If logged in, redirect to the home page
            $state.go('main');
        }

        $scope.loginFb = function () {
            Auth.loginFacebook();
        };

        $scope.loginGl = function () {
            Auth.loginGoogle();
        };

        $scope.loginTw = function () {
            Auth.loginTwitter();
        };

        $scope.loginGb = function () {
            Auth.loginGithub();
        };

        $scope.login = function (user) {
            Auth.login(user);
        };

    }
);
