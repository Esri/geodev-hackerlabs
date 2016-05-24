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

4. Add a reference to a Dojo CSS Theme (`claro`), and configure the `body` tag to use it:

    ```HTML
    <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.16/esri/css/esri.css">

    <!-- ADD a link to the Claro Dojo theme's CSS -->
    <link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.16/dijit/themes/claro/claro.css">

    ...

    <!-- ADD "claro" as the class of the body tag -->
    <body class="claro">
    ```

5. Update the `require` statement and function definition:

    ```javascript
    require(["esri/map",
             // ADD modules
             "esri/layers/GraphicsLayer",
             "esri/layers/FeatureLayer",
             "esri/geometry/geometryEngineAsync",
             "esri/graphic",
             "esri/graphicsUtils",
             "esri/symbols/SimpleFillSymbol",
             "esri/symbols/SimpleLineSymbol",
             "esri/Color",
             "dijit/form/HorizontalSlider",
             "dojo/dom",
            "dojo/domReady!"],
      // ADD aliases
      function(Map,GraphicsLayer,FeatureLayer,geometryEngineAsync,Graphic,graphicsUtils,
               SimpleFillSymbol,SimpleLineSymbol,Color,
               HorizontalSlider,dom) {
        ...
    ```

6. Add a `FeatureLayer` for the Rail Stops and a `GraphicsLayer` to display the calculated buffers. Optionally modify the map to initialize at zoom level `12`:

    ```javascript
    function(Map,GraphicsLayer,FeatureLayer,geometryEngineAsync,Graphic,
             SimpleFillSymbol, SimpleLineSymbol, Color,
             HorizontalSlider,dom,array) {
      map = new Map("mapDiv", {
        center: [-122.68, 45.52],
        // OPTIONAL Change the initial zoom to 12
        zoom: 12,
        basemap: "dark-gray"
      });

      // ADD Create layers and add them to the map
      var bufferLayer = new GraphicsLayer(),
          stopsLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0", {
            mode: FeatureLayer.MODE_SNAPSHOT
          });

      map.addLayers([bufferLayer, stopsLayer]);
    ```

7. Create functions to update the UI and generate a buffer:

    ```javascript
    // ADD Create a symbol to display the buffers
    var bufferDistance = 0.5,
        bufferSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                         new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([110,110,110]), 1),
                       new Color([0,100,255,0.4]));

    // ADD A function to buffer the Rail Stops
    function bufferStops(miles) {
      var stopGeoms = graphicsUtils.getGeometries(stopsLayer.graphics);
      geometryEngineAsync.union(stopGeoms).then(function (stops) {
        geometryEngineAsync.geodesicBuffer(stops, miles, 9035).then(function (totalBuffer) {
          bufferLayer.clear();
          bufferLayer.add(new Graphic(totalBuffer, bufferSymbol));
        });
      });
    }

    // ADD A function to update the UI text
    function setBufferDisplay(newValue) {
      var roundedValue = parseFloat(newValue).toFixed(2),
          unit = roundedValue == 1.0?"mile":"miles";
      dom.byId("bufferDistance").innerText = roundedValue + " " + unit;
      bufferDistance = roundedValue;
    }
    ```

8. Create the Horizontal Slider and initialize the UI:

    ```javascript
    // ADD Create a variable to track the current buffer size, and a Dojo HorizontalSlider to control this. Set the slider to update the current buffer range display and also to generate a new buffer when the mouse is released.
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

9. In JSBin, run the app > Drag or click on the slider at the top-right to pick a buffer size in Miles. When dragging, buffer will not be calculated until you finish dragging.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/buffer_with_geometry_engine/index.html)

###Bonus
* Explore the functions available in the [Geometry Engine](https://developers.arcgis.com/javascript/jsapi/esri.geometry.geometryengine-amd.html).
* Look at the [FeatureLayer documentation](https://developers.arcgis.com/javascript/jsapi/featurelayer-amd.html) to explore what the `FeatureLayer.MODE_SNAPSHOT` setting means. Notice how it's used with the `update-end` event to calculate the initial buffer.
* Change the order the layers are added to the map.
* Change the symbol used for the buffer display.
* In the code above, we specify that the buffer distance [unit parameter](https://developers.arcgis.com/javascript/jsapi/esri.geometry.geometryengine-amd.html#geodesicbuffer) to `geodesicBuffer` is `Miles` by using the code `9035`. Explore other codes [here](http://resources.arcgis.com/en/help/arcobjects-cpp/componenthelp/index.html#/esriSRUnitType_Constants/000w00000042000000/) and [here](http://resources.arcgis.com/en/help/arcobjects-cpp/componenthelp/index.html#/esriSRUnit2Type_Constants/000w00000041000000/).
  * Note: When the Geometry Engine exits beta, there will probably be constants defined for these units.
* This lab uses the [Async Geometry Engine](https://developers.arcgis.com/javascript/jsapi/esri.geometry.geometryengineasync-amd.html) which calculates results in the background. Try reimplementing the `bufferStops()` function with the plain [Geometry Engine](https://developers.arcgis.com/javascript/jsapi/esri.geometry.geometryengine-amd.html) and see how the UI is affected when clicking on the slider.
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
