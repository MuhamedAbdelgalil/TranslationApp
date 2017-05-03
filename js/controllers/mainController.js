/*global console,app*/
(function (app) {
    // main controller
    "use strict";
    app.controller("mainController", ["$scope", "$http", "$log", function ($scope, $http, $log) {
        $scope.textOriginal = "";
        //flag to detect loading image visibility
        $scope.loadingIconFlag = false;

        //function that will invoke when click on translate button
        $scope.Translate = function () {
            $scope.loadingIconFlag = true;
            $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170422T154041Z.a341608d755dcd53.303bd4cec390ea88c18096084d13171049ae6e44&text=" + $scope.textOriginal + "&lang=ar&[callback=$scope.afterTransalte]")
                //if success
                .then(function (response) {
                    
                    $scope.loadingIconFlag = false;
                    $scope.textTranslated = response.data.text[0];
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                   console.log(response);
                   alert("Error ocured please try again later!");
                   $scope.loadingIconFlag = false;
                    
            });
        }

    }]); // end controller

} (app));