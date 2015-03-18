eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {

        getEvent: function (eventId) {
            return resource.get({id: eventId});
        },

        getAllEvents: function() {
            return resource.query();
        },

        save: function(event) {
            event.id = 999;
            return resource.save(event);
        }
    };
});

