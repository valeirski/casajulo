$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7866248133',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7866248133.85f8b36.afb23b2534e041d18279f8519ddefb4f',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});