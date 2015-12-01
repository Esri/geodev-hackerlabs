###Build a starter 3D map

This lab covers the basics for creating a basic starter 3D mapping application.
The starter map simply loads a default base map and centers it.
If you are new to ArcGIS and need a full set of instructions on building a basic 3D mapping application
visit the [Get started with SceneView](https://developers.arcgis.com/javascript/beta/sample-code/get-started-sceneview/index.html) tutorial.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ```html 
 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Basic 3D map - 4.0 beta 2</title></p>
    <style>
        html, body {
            padding: 0;
            margin: 0;
        }
    </style>
    <link rel="stylesheet" href="https://js.arcgis.com/4.0beta2/esri/css/main.css">
    <script src="https://js.arcgis.com/4.0beta2/"></script>
    <script>
        require([
            "esri/Map",
            "esri/views/SceneView",
            "dojo/domReady!"
        ], function(Map, SceneView){
            var map = new Map({
                basemap: "streets"
            });
            var view = new SceneView({
                container: "viewDiv",  //reference to the scene div created in step 5
                map: map,  //reference to the map object created before the scene
                scale: 50000000,  //sets the initial scale to 1:50,000,000
                center: [-101.17, 21,78]  //sets the center point of view with lon/lat
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

###Extras

* Experiment with different basemaps such as `topo` or `gray`.
* Run the code locally on your machine. Eventually if your app gets larger you'll want to migrate it from JSBin to your desktop.