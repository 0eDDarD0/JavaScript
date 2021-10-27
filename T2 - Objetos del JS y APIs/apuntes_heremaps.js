var platform = new H.service.Platform({
    'apikey': 'EjljIaXpynhpqGygp7hN4v5yKqc4dCRXesy-ekdR0EA'
});

//FUNCION DE CREACION DE MAPA
var map;
function success(pos){
    var crd = pos.coords; //pos.coords es un objeto que tiene longitud, latitud y altitud(numeros) accuaracy y altitudeAccuracy(numeros) speed y heading?

    //CREA MAPA Y SU UI
    if(map == undefined){
        var defaultLayers = platform.createDefaultLayers(); 
        map = new H.Map(document.getElementById('mapContainer'),defaultLayers.vector.normal.map,
        {
            zoom: 10,
            center: {lat: crd.latitude, lng: crd.longitude}
        });
        var ui = H.ui.UI.createDefault(map, defaultLayers); //INICIALIZA LA UI EN EL MAPA

        var mapEvents = new H.mapevents.MapEvents(map); //INICIALIZA LOS EVENTOS EN EL MAPA
        var behavior = new H.mapevents.Behavior(mapEvents); //Añade comportamientos de mapa normales
        // EVENT LISTENER (trigger)
        // map.addEventListener('tap', function(evt) {
        //     console.log(evt.type, evt.currentPointer.type); //evt.type es tap(un click) y evt.currentPointer.type es mouse
        // });
        
    }


    //BUSQUEDA DE UBICACION POR CONSULTA
    // var service = platform.getSearchService();
    // var consulta = window.prompt("Busqueda");
    // // PARA QUE FUNCIONE LA UI TIENE QUE ESTAR INSTANCIADA
    // service.autosuggest({ 
    //     // CONSULTA
    //     q: consulta,
    //     // PUNTO DESDE EL QUE SE REALIZA LA CONSULTA PARA TENER CONTEXTO
    //     at: crd.latitude + ',' + crd.longitude
    // }, (result) => {
    //     let {position, title} = result.items[0];
    //     ui.addBubble(new H.ui.InfoBubble(position, {content: title})); //Crea la infobubble
    // }, alert);


    //GEOINVERSO
    // var service = platform.getSearchService();
    // service.reverseGeocode({at: crd.latitude + ',' + crd.longitude + ',150'}, (result) => {result.items.forEach((item) => {
    //     // PARA QUE FUNCIONE EL GEO INVERSO LA UI TIENE QUE ESTAR INSTANCIADA
    //     //Se llama a la funcion y el resultado se pasa por un foreach que cada uno crea una infobubble con los datos
    //     ui.addBubble(new H.ui.InfoBubble(item.position, {content: item.address.label}));
    //     });
    // }, alert);


    //RUTEO
    // var routingParameters = {
    //     // The routing mode:
    //     'mode': 'fastest;car',
    //     // The start point of the route:
    //     'waypoint0': 'geo!' + crd.latitude + ',' + crd.longitude,
    //     // The end point of the route:
    //     'waypoint1': 'geo!37.190983507720766,-3.6081663933113437',
    //     // representation mode 'display'
    //     'representation': 'display'
    // };
    
    // var onResult = function(result) {
    //     var route, routeShape, startPoint, endPoint, linestring;
    //     if(result.response.route) {
    //         // Pick the first route from the response:
    //         route = result.response.route[0];
    //         // Pick the route's shape:
    //         routeShape = route.shape;
    //         // Create a linestring to use as a point source for the route line
    //         linestring = new H.geo.LineString();
    //         // Push all the points in the shape into the linestring:
    //         routeShape.forEach(function(point){var parts = point.split(','); linestring.pushLatLngAlt(parts[0], parts[1]);});
    //         // Retrieve the mapped positions of the requested waypoints:
    //         startPoint = route.waypoint[0].mappedPosition;
    //         endPoint = route.waypoint[1].mappedPosition;
    //         // Create a polyline to display the route:
    //         var routeLine = new H.map.Polyline(linestring, {
    //         style: { strokeColor: 'red', lineWidth: 3 }
    //         });
    //         // Create a marker for the start point:
    //         var startMarker = new H.map.Marker({
    //         lat: startPoint.latitude,
    //         lng: startPoint.longitude
    //         });
    //         // Create a marker for the end point:
    //         var endMarker = new H.map.Marker({
    //         lat: endPoint.latitude,
    //         lng: endPoint.longitude
    //         });
    //         // Add the route polyline and the two markers to the map:
    //         map.addObjects([routeLine, startMarker, endMarker]);
     
    //         // Set the map's viewport to make the whole route visible:
    //         map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    //         }
    // };
    // var router = platform.getRoutingService();
    // router.calculateRoute(routingParameters, onResult, function(error) {alert(error.message);});


    //MARCADORes Y OBJETOS
    // let marker = new H.map.Marker({lat: crd.latitude, lng: crd.longitude});
    // let circle = new H.map.Circle({lat: crd.latitude, lng: crd.longitude}, parseInt(window.prompt("Radio de la circunferencia")));
    // map.addObject(marker); ó map.addObjects([marker, circle]);
}


navigator.geolocation.getCurrentPosition(success);