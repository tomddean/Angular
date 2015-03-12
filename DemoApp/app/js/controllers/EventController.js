'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {
    $scope.sortorder = 'name';
    $scope.event = eventData.event;

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    }

    $scope.getGravatarImage = function (email) {
        if (email !== undefined) {
            return 'https://gravatar.com/avatar/' + md5(email) + '.jpg?s=200&r=g';
        }
    }
});