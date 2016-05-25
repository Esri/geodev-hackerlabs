###Client-side Buffer

In this lab you will use the GeometryEngine to buffer around Rail Stops in the browser.

You will add an interactive slider and a feedback label to the UI that will be used when changing the size of the buffer.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the buffer UI `div` element and its contents:

  ```html
  <body>
    <!-- ADD new div for the buffer range UI -->
    <div id="bufferUI">
      <div id="bufferSlider"></div>
      <div id="bufferDistance">1</div>
    </div>

    <div id="mapDiv"></div>
  </body>
  ```

3. At the top of the page, add CSS to the main `style` tag to display the buffer range UI:

  ```CSS
  <style>
    html,body,#mapDiv {
        padding:0;
        margin:0;
        height:100%;
    }

    /* ADD buffer slider styling */
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

4. Update the `require` statement and function definition:

  ```javascript
  require(["esri/Map",
           "esri/views/MapView",
           // ADD modules
           "esri/layers/GraphicsLayer",
           "esri/layers/FeatureLayer",
           "esri/Graphic",
           "esri/symbols/SimpleFillSymbol",
           "esri/geometry/geometryEngineAsync",
           "dijit/form/HorizontalSlider",
           "dojo/dom",
           "dojo/domReady!"
    // ADD module references
    ], function(Map, MapView, 
                GraphicsLayer, FeatureLayer, Graphic, SimpleFillSymbol, geometryEngineAsync,
                HorizontalSlider, dom) {
    ...
  ```

5. Add a `FeatureLayer` for the Rail Stops and a `GraphicsLayer` to display the calculated buffers. Optionally modify the map to initialize at zoom level `12`:

  ```javascript
  function(Map, MapView, GraphicsLayer, FeatureLayer, Graphic,
           SimpleFillSymbol, SimpleLineSymbol,
           geometryEngineAsync,
           HorizontalSlider, dom) {

    var map = new Map({
      basemap: "dark-gray"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 11
    });

    // ADD Create layers and add them to the map
    var bufferLayer = new GraphicsLayer();
    var stopsLayer = new FeatureLayer({
      url : "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0"
    });

    map.addMany([bufferLayer, stopsLayer]);
  ```

6. Create a buffer symbol and a variable to track the buffer size.

  ```javascript
    // ADD Create a symbol to display the buffers
    var bufferDistance = 0.5;
    var bufferSymbol = new SimpleFillSymbol({
      color: [0,100,255,0.4],
      style: "solid",
      outline: {
        color: [110,110,110],
        width: 1
      }
    });
  ```


7. Create a function to generate a buffer and update the map.

  ```javascript
  // ADD A function to buffer the Rail Stops
  function bufferStops(miles) {
    view.whenLayerView(stopsLayer).then(function(stopsLayerView) {

        stopsLayerView.queryFeatures().then(function(stopGraphics) {

          var stops = stopGraphics.map(function(stopGraphic) {
            return stopGraphic.geometry;
          });

          geometryEngineAsync.geodesicBuffer(stops, miles, "miles", true).then(function(totalBuffer) {
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

8. Be sure to update the buffer whenever the layer view's data changes

  ```javascript
    // Recalculate the buffers when the view's contents changes
    view.whenLayerView(stopsLayer).then(function(stopsLayerView) {
      stopsLayerView.watch("updating", function(isUpdating) {
        if (!isUpdating) {
          bufferStops(bufferDistance);
        }
      });
    });
  ```

9. Create the Horizontal Slider and initialize the UI:

  ```javascript
  // ADD A function to update the UI text
  function setBufferDisplay(newValue) {
    var roundedValue = parseFloat(newValue).toFixed(2),
        unit = roundedValue == 1.0?"mile":"miles";
    dom.byId("bufferDistance").innerText = roundedValue + " " + unit;
    bufferDistance = roundedValue;
  }


  // ADD Create a Dojo HorizontalSlider to control the buffer size. Set the slider to update the current buffer range display and also to generate a new buffer when the mouse is released.
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


  // ADD Initialize the buffer UI and ensure that when the Rail Stops layer has initially loaded data, that a buffer is generated.
  setBufferDisplay(bufferDistance);
  stopsLayer.on('update-end', function() {
    bufferStops(bufferDistance);
  });
  ```

  Also include a CSS file to style the Dojo Slider Widget, and update the `<body>` tag to make use of it:

  ```HTML
  <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.16/esri/css/esri.css">

  <!-- ADD a link to the Tundra Dojo theme's CSS -->
  <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/dojo/1.10.4/dijit/themes/tundra/tundra.css">

  ...

  <!-- ADD "claro" as the class of the body tag -->
  <body class="tundra">
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
