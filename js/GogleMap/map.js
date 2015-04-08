var FindMy =  {
    CURRENTPOSITION: null,
    MAP: null,
    MARKER : null,
    MARKERS :[],
    TAMINGFUNCTION :null

};

FindMy.Map = function () {
    this.init = function () {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(FindMy.CURRENTPOSITION.coords.latitude,FindMy.CURRENTPOSITION.coords.longitude );
        var mapOptions = {
            center: myLatlng,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        FindMy.MAP = new google.maps.Map(mapCanvas, mapOptions);

        FindMy.MARKER =   new MarkerWithLabel({
            position: myLatlng,
            map: FindMy.MAP,
            labelContent: "you",
            labelAnchor: new google.maps.Point(3, 30),
            labelClass: "label label-primary markers_labels", // the CSS class for the label
            labelInBackground: false
        });

    }
    this.setUsersMarkers = function(users){

        for (var i = 0; i < users.length; i++) {
            var userLatlng = new google.maps.LatLng(users[i].latitude, users[i].longitude);

           var marker =   new MarkerWithLabel({
                position: userLatlng,
                map: FindMy.MAP,
                labelContent: users[i].UserName,
                labelAnchor: new google.maps.Point(3, 30),
                labelClass: "label label-primary markers_labels", // the CSS class for the label
                labelInBackground: false
            });
            FindMy.MARKERS[i]=marker;
        }
    };
    this.setDeviceLocationsMarker = function(position){
        var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude );

        FindMy.MARKER =   new MarkerWithLabel({
            position: myLatlng,
            map: FindMy.MAP,
            labelContent: "you",
            labelAnchor: new google.maps.Point(3, 30),
            labelClass: "label label-primary markers_labels", // the CSS class for the label
            labelInBackground: false
        });
    }
    this.getDeviceLocations = function(secses,error){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(secses,error);
        } else {
            alert("Your device is not support locations");
        }
    }
    this.clearOverlays = function () {
        for (var i = 0; i < FindMy.MARKERS.length; i++ ) {
            FindMy.MARKERS[i].setMap(null);

        }
        FindMy.MARKER.setMap(null);
        FindMy.MARKERS.length = 0;
    }
}