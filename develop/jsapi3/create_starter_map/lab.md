###Build a starter map (3.x JS API)

This lab covers the basics for creating a basic starter mapping application with the 3.x JS API.
The starter map simply loads a default base map, centers and zooms it in.
If you are new to ArcGIS and need a full set of instructions on building a basic mapping application
visit the [Build your first mapping application](https://developers.arcgis.com/javascript/jshelp/intro_firstmap_amd.html) tutorial.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>JS API Starter App</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.15/esri/css/esri.css">
    <style>
      html,body,#mapDiv {
        padding:0;
        margin:0;
        height:100%;
      }
    </style>

    <script src="http://js.arcgis.com/3.15compact/"></script>

    <script>
      var map;
      require(["esri/map",
               "dojo/domReady!"],
        function(Map) {
          map = new Map("mapDiv", {
            center: [-122.68, 45.52],
            zoom: 10,
            basemap: "dark-gray"
          });
        }
      );
    </script>
  </head>

  <body>
    <div id="mapDiv"></div>
  </body>
  </html>
  ```

2. The JSBin `Output` panel should show a dark-grey map centered on Portland, Oregon.

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/create_starter_map/index.html)

###Bonus

* Experiment with different basemaps such as `topo` or `gray`.
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.