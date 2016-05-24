###Build a starter map

This lab covers the basics for creating a basic starter mapping application.
The starter map simply loads a default base map, and centers and zooms it in in a [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html).
If you are new to ArcGIS and need a full set of instructions on building a basic mapping application
visit the [Getting Started with MapView](https://developers.arcgis.com/javascript/latest/sample-code/get-started-mapview/index.html) tutorial.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>JS API Starter App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="https://js.arcgis.com/4.0/esri/css/main.css">
    <style>
      html, body, #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }
    </style>

    <script src="https://js.arcgis.com/4.0/"></script>

    <script>
      var map, view;
      require(["esri/Map",
               "esri/views/MapView",
               "dojo/domReady!"], 
        function(Map, MapView) {
          map = new Map({
            basemap: "dark-gray"
          });

          view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-122.68, 45.52],
            zoom: 10
          });
        }
      );
    </script>
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
  </html>
  ```

2. The JSBin `Output` panel should show a dark-grey map centered on Portland, Oregon.

Your app should look something like this:

 * [Code](index.html)
 * [Live App](https://esri.github.io/geodev-hackerlabs/develop/jsapi/create_starter_map/index.html)

###Bonus

* Experiment with different basemaps such as `topo` or `gray`.
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.
