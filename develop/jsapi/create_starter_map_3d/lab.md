###Build a starter 3D map

This lab covers the basics for creating a basic starter 3D mapping application.
The starter map simply loads a default base map and centers it.
If you are new to ArcGIS and need a full set of instructions on building a basic 3D mapping application
visit the [Get started with SceneView](https://developers.arcgis.com/javascript/latest/sample-code/get-started-sceneview/index.html) tutorial.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ```html 
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <title>JS API 3D Starter App</title>

    <link rel="stylesheet" href="https://js.arcgis.com/4.0/esri/css/main.css">

    <style>
      html, body, #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
      }
    </style>

    <script src="https://js.arcgis.com/4.0/"></script>

    <script>
      require([
        "esri/Map",
        "esri/views/SceneView",
        "dojo/domReady!"
      ], function(Map, SceneView) {

        var map = new Map({
          basemap: "dark-gray"
        });
        
        var view = new SceneView({
          container: "viewDiv",
          map: map,
          center: [-101.17, 21,78],
          scale: 50000000
        });

      });
    </script>
  </head>
  <body>
    <div id="viewDiv"></div>
  </body>
  </html>
  ```

2. The JSBin `Output` panel should show a 3D view of earth that you can rotate around.

Your app should look something like this:

 * [Code](index.html)
 * [Live App](https://esri.github.io/geodev-hackerlabs/develop/jsapi/create_starter_map_3d/index.html)

###Bonus

* Experiment with different basemaps such as `topo` or `gray`.
* Take a look at the bonus section for the [2D Starter Map](../create_starter_map/lab.md#bonus) and try the same only with the `SceneView` instead of the `MapView`.
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.
