$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '5860909318',
        limit: 6,
        resolution: 'standard_resolution',
        accessToken: '5860909318.04f11af.950dbf64df924bf2a6e6176ba9ab422f',
        sortBy: 'most-recent',

        template: '<div class="col-lg-4 col-md-4 col-sm-2 col-xs-1 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
});