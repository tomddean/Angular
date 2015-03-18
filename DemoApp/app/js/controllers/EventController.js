'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $routeParams) {
    $scope.sortorder = 'name';
    eventData.getEvent($routeParams.eventId)
        .$promise.then(
        function (event) {
            $scope.event = event;
            console.log(event);
        },
        function (statusCode) {
            console.log(statusCode);
        }
    );

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };

    $scope.getGravatarImage = function (email) {
        if (email !== undefined) {
            return 'https://gravatar.com/avatar/' + md5(email) + '.jpg?s=200&r=g';
        }
    }
});