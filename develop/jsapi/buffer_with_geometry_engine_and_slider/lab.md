###Interactive Client-side Buffer

In this lab you will use the GeometryEngine to buffer around Rail Stops in the browser.

You will add an interactive slider and a feedback label to the UI that will be used when changing the size of the buffer.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Add some HTML to the `<body>` tag to display a Buffer Radius range slider and value:

  ```html
  <body>
    <!-- ADD -->
    <div id="bufferUI">
      <div id="bufferSlider"></div>
      <div id="bufferDistance">1</div>
    </div>

    <div id="mapDiv"></div>
  </body>
  ```

3. At the top of the page, we'll set up some styling. Add some CSS to the existing `<style>` tag to display the buffer range UI.

  ```CSS
  <style>
    html,body,#mapDiv {
        padding:0;
        margin:0;
        height:100%;
    }

    /*** ADD ***/

    #bufferUI {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 200px;
      z-index: 1000;
      padding: 10px;
      background-color: rgba(0,0,0,0.2);
    }

    #bufferDistance {
      color: white;
      font-family: sans-serif;
      height: 1.5em;
      padding-top: 0.4em;
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
      text-align: center;
    }
  </style>
  ```

  Also link to a standard Dojo Theme CSS file to style the Dojo Slider Widget, and update the `<body>` tag to make use of this theme. If you skip this the slider will function, but will look odd.

  ```HTML
  ...

  <!-- ADD -->
  <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/dojo/1.10.4/dijit/themes/tundra/tundra.css">

  ...

  <!-- ADD -->
  <body class="tundra">
  ```

4. Now we'll jump into the JavaScript. Update the `require` statement and `function` definition:

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
    "dijit/form/HorizontalSlider",
    "dojo/dom",
    "dojo/domReady!"
  ], function(Map, MapView, 
              GraphicsLayer, FeatureLayer, Graphic, SimpleFillSymbol, geometryEngineAsync,
              HorizontalSlider, dom) {
  ```

5. Add a the Styled Rail Stops to the map. Also add a layer to display the calculated buffers (for this we'll use a `GraphicsLayer`).

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 11
    });

    /*** ADD ***/

    // Add a layer to show the calculated buffer, and a layer for the buffer source data.
    var bufferLayer = new GraphicsLayer();
    var stopsLayer = new FeatureLayer({
      url : "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0"
    });

    map.addMany([bufferLayer, stopsLayer]);
  ```

6. Next, we'll define a variable to track the selected buffer range, and a symbol to define how buffers are drawn in the map.

  ```javascript
    /*** ADD ***/

    // Configure the output buffer.
    var bufferDistance = 0.5;
    // Define a symbol for displaying the buffer.
    var bufferSymbol = new SimpleFillSymbol({
      color: [0,100,255,0.4],
      style: "solid",
      outline: {
        color: [110,110,110],
        width: 1
      }
    });
  ```

7. Create a function to generate a buffer for a specific range. Also make sure that function updates the map once the buffer has been generated. We'll call this function when the buffer range slider is moved.

  ```javascript
    /*** ADD ***/

    // Buffer the view's contents by a number of miles.
    function bufferStops(miles) {
      // Get the Layer View for the Stops Layer. This is how the layer is displayed
      // in the Map View.
      view.whenLayerView(stopsLayer).then(function(stopsLayerView) {
        // Now get all the features already loaded to the browser
        stopsLayerView.queryFeatures().then(function(stopFeatures) {
          // A Feature is also a Graphic. But we need geometries for the buffer operation.
          var stopGeometries = stopFeatures.map(function(stopGraphic) {
            return stopGraphic.geometry;
          });
          // Buffer and union all the points in the layer view.
          geometryEngineAsync.geodesicBuffer(stopGeometries, miles, "miles", true).then(function(totalBuffer) {
            // Display the unioned buffer on the map.
            bufferLayer.removeAll();
            bufferLayer.add(new Graphic({
              geometry: totalBuffer[0],
              symbol: bufferSymbol
            }));
          });
        });
      });
    }
  ```

8. Now hook into the layer view to ensure that if the displayed data ever changes that the buffer is udpated.

  ```javascript
    /*** ADD ***/

    // Recalculate the buffers whenever the view's contents changes.
    view.whenLayerView(stopsLayer).then(function(stopsLayerView) {
      stopsLayerView.watch("updating", function(isUpdating) {
        if (!isUpdating) {
          bufferStops(bufferDistance);
        }
      });
    });
  ```

9. Lastly we'll hook up and configure the Dojo slider used to specify the buffer range.

  ```javascript
    /*** ADD ***/

    // A function to update range display text.
    function setBufferDisplay(newValue) {
      var roundedValue = parseFloat(newValue).toFixed(2),
          unit = roundedValue == 1.0?"mile":"miles";
      dom.byId("bufferDistance").innerText = roundedValue + " " + unit;
      bufferDistance = roundedValue;
    }

    // Create the Buffer Range slider.
    var slider = new HorizontalSlider({
      value: bufferDistance,
      minimum: 0.25,
      maximum: 5,
      intermediateChanges: true,
      showButtons: false,
      onChange: function(value) {
        setBufferDisplay(value);
      },
      onMouseUp: function () {
        bufferStops(bufferDistance);
      }
    }, "bufferSlider").startup();

    // Initialize the range display text.
    setBufferDisplay(bufferDistance);
  ```

10. In JSBin, run the app. Drag or click on the slider at the top-right to pick a buffer size in Miles. When dragging, buffer will not be calculated until you finish dragging.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/buffer_with_geometry_engine_and_slider/index.html)

###Bonus
* Explore the functions available in the [Geometry Engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngineAsync.html).
* Change the order the layers are added to the map.
* Change the symbol used for the buffer display.
* This lab uses the [Async Geometry Engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngineAsync.html) which calculates results in the background. Try reimplementing the `bufferStops()` function with the plain [Geometry Engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html) and see how the UI is affected when clicking on the slider.
* Give the Buffer UI rounded corners (does this work in IE? Own up: Who's using IE?):

  ```CSS
    #bufferUI {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 200px;
      z-index: 1000;
      padding: 10px;
      background-color: rgba(0,0,0,0.2);
      /* ADD the rounded corners */
      -moz-border-radius: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
  ```
