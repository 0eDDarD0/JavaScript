require(["esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/rest/locator"], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {

    esriConfig.apiKey = "AAPK6baa94ebc1af4cf5982762150119d6bfwz-e89tlYwSNwFs3EnaDxS7N-cxkMhsnxvH2BCvvDN19H0uOgISlcxqAO24eulpH";


    function succes(pos){
        var crd = pos.coords;

        const map = new Map({
            basemap: "arcgis-navigation" // Basemap layer service
        }); 

        const view = new MapView({
            map: map,
            center: [crd.longitude, crd.latitude], // Longitude, latitude
            zoom: 13, // Zoom level
            container: "viewDiv" // Div element
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        
        //Create a point and simpleMarkerSymbol that will be used to create a Graphic
        const point = { //Create a point
            type: "point", 
            longitude: crd.longitude,
            latitude: crd.latitude,
        };
        const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],  // Orange
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
        };

        const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol
        });
        graphicsLayer.add(pointGraphic);

    }

    navigator.geolocation.getCurrentPosition(succes);
}); 

