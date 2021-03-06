$(function () {
    function initMap() {
        var location = new google.maps.LatLng(-23.171095, -46.891798);
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 15,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);
});