###Client-side Buffer by Fixed Amount

In this lab you will use the GeometryEngine to buffer around Rail Stops in the browser by a fixed amount.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require(["esri/Map",
           "esri/views/MapView",
           // ADD modules
           "esri/layers/GraphicsLayer",
           "esri/layers/FeatureLayer",
           "esri/Graphic",
           "esri/symbols/SimpleFillSymbol",
           "esri/geometry/geometryEngineAsync",
           "dojo/domReady!"
    // ADD module references
    ], function(Map, MapView, 
                GraphicsLayer, FeatureLayer, Graphic, SimpleFillSymbol, geometryEngineAsync) {
    ...
  ```

3. Add a `FeatureLayer` for the Rail Stops and a `GraphicsLayer` to display the calculated buffers. Optionally modify the map to initialize at zoom level `12` to see the half-mile buffers more easily:

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 12
    });

    // ADD Layer to show the calculated buffer, and a layer for the buffer source data
    var bufferLayer = new GraphicsLayer();
    var stopsLayer = new FeatureLayer({
      url : "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0"
    });

    map.addMany([bufferLayer, stopsLayer]);
  ```

4. Create a buffer symbol and a function to calculate and display a buffer:

  ```javascript
  // ADD Create a symbol to display the buffers
  var bufferSymbol = new SimpleFillSymbol({
    color: [0,100,255,0.4],
    style: "solid",
    outline: {
      color: [110,110,110],
      width: 1
    }
  });

  // ADD A function to buffer the Rail Stops
  view.whenLayerView(stopsLayer).then(function(stopsLayerView) {
    stopsLayerView.watch("updating", function(isUpdating) {
      if (!isUpdating) {
        stopsLayerView.queryFeatures().then(function(stopGraphics) {
          // We need geometries, not graphics for the buffer operation
          var stops = stopGraphics.map(function(stopGraphic) {
            return stopGraphic.geometry;
          });
          // Buffer and union all the points in the layer view
          geometryEngineAsync.geodesicBuffer(stops, 0.5, "miles", true).then(function(totalBuffer) {
            // Display the buffer on the map.
            bufferLayer.removeAll();
            bufferLayer.add(new Graphic({
              geometry: totalBuffer[0],
              symbol: bufferSymbol
            }));
          });
        });
      }
    });
  });
  ```

5. In JSBin, run the app > When the stops have loaded, a 0.5 mile buffer will be calculated around them and added to the map.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/buffer_with_geometry_engine/index.html)

###Bonus
* Make the buffer amount a top-level JavaScript variable and use the browser's interactive console to modify it between clicks.
* See the [Interactive Buffer Lab](../buffer_with_geometry_engine_and_slider/lab.md) for more bonus items.
