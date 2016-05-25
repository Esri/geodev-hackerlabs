###Client-side Buffer

In this lab you will use the GeometryEngine to buffer around Rail Stops in the browser by a fixed amount.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/symbols/SimpleFillSymbol",
    "esri/geometry/geometryEngineAsync",
    "dojo/domReady!"
  ], function(Map, MapView, 
              GraphicsLayer, FeatureLayer, Graphic, SimpleFillSymbol, geometryEngineAsync) {
  ```

3. Add the Styled Rail Stops and a Graphics Layer to display the calculated buffers. Optionally modify the map to initialize at zoom level `12` to see the half-mile buffers more easily:

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 12
    });

    /*** ADD ***/

    // Create a GraphicsLayer to show the calculated buffer, and a FeatureLayer for the buffer source data
    // (Rail Stops).
    var bufferLayer = new GraphicsLayer();
    var stopsLayer = new FeatureLayer({
      url : "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0"
    });

    // Add these layers to the map with the buffer layer below the stops layer.
    map.addMany([bufferLayer, stopsLayer]);
  ```

4. Next create a buffer symbol to be used to display the buffers on the map.

  ```javascript
    /*** ADD ***/

    // Configure the output buffer
    var bufferSymbol = new SimpleFillSymbol({
      color: [0,100,255,0.4],
      style: "solid",
      outline: {
        color: [110,110,110],
        width: 1
      }
    });
  ```

5. Lastly we'll wait for the Rail Stops data to load and then calculate and display a buffer.

  ```javascript
    /*** ADD ***/

    // Buffer the view's contents
    view.whenLayerView(stopsLayer).then(function(stopsLayerView) {
      stopsLayerView.watch("updating", function(isUpdating) {
        if (!isUpdating) {
          // The Layer View *was* updating and now isn't. Let's buffer the data.
          stopsLayerView.queryFeatures().then(function(stopGraphics) {
            // We need geometries, not graphics for the buffer operation
            var stops = stopGraphics.map(function(stopGraphic) {
              return stopGraphic.geometry;
            });
            // Buffer and union all the points in the layer view
            geometryEngineAsync.geodesicBuffer(stops, 0.5, "miles", true).then(function(totalBuffer) {
              // Display the single unioned buffer on the map.
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

6. In JSBin, run the app > When the stops have loaded, a 0.5 mile buffer will be calculated around them and added to the map.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/buffer_with_geometry_engine/index.html)

###Bonus
* See the [Interactive Buffer Lab](../buffer_with_geometry_engine_and_slider/lab.md) for interactive buffering and more bonus items.
