###Extrude a polygon in 3D

This lab introduces visual variables as a powerful way of extruding polygons in a 3D mapping application.

1. Copy and paste the code below into a new [jsbin.com](http://jsbin.com).

  ``` html 
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <title>Extrude polygon by visual variables - 4.0beta3</title>

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
      require(["esri/Map",
               "esri/views/SceneView",
               "esri/layers/FeatureLayer",
               "esri/Color",
               "esri/symbols/PolygonSymbol3D",
               "esri/symbols/ExtrudeSymbol3DLayer",
               "esri/renderers/SimpleRenderer",
               "dojo/domReady!"], 
        function(Map, SceneView, FeatureLayer, 
                 Color, PolygonSymbol3D, ExtrudeSymbol3DLayer, SimpleRenderer) {

          //Create map
          var map = new Map({
            basemap: "dark-gray"
          });

          //Create SceneView for 3d visualization
          var view = new SceneView({
            container: "viewDiv",
            map: map,
            camera: {
              position: [-122.617, 45.18, 30000],
              tilt: 50,
              heading: 0
            }
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
   
2. The JSBin `Output` panel should show a 3D view of earth that you can rotate around.

3. Below the `SceneView` add a feature layer. When you test run your app the layer will look like a black outline. 
Don't worry, we're going to fix this in just a minute.


  ``` js
      //Create featureLayer and add to the map
      var featureLayer = new FeatureLayer({
        url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched/FeatureServer/0"
      });
      map.add(featureLayer);
  ```
   
4. Now lets add a `SimpleRenderer` to the feature layer. Since this is 3D we are going to use a `PolygonSymbol3D` and 
then we'll apply `visualVariables` to define how to render the values by color, size and opacity.

   
  ``` js

      //Create the Renderer for the featureLayer,
      var extrudePolygonRenderer = new SimpleRenderer({
        symbol: new PolygonSymbol3D({
          symbolLayers: [new ExtrudeSymbol3DLayer()]
        }),
        // These define how to render by size, color and/or opacity
        // Each visualVariable is associated with a field
        visualVariables: [{
            type: "size",
            field: "TOTPOP_CY",
            normalizationField: "AREA",
             stops: [
              {
                value: 0,
                size: 500
              },
              {
                value: 10000,
                size: 4000
              }]
          }, {
            type: "color", 
            field: "TOTPOP_CY",
            normalizationField: "AREA",
             stops: [
              {
                value: 0,
                color: "#FFFCD4",
              },
              {
                value: 10000,
                color: [153, 83, 41],
              }]
          }]
        });

      featureLayer.renderer = extrudePolygonRenderer;

  ```
   
Your app should look something like this:

 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/extrude_polygon_3d/index.html)
 
###Bonus

* Experiment with Visual Variables. You can read mode about that [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#visualVariables).
* Experiment with opacity values. You can read more about that [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html#opacity).
