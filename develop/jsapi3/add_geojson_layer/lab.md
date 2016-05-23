###Create a map from GeoJSON

In this lab you'll learn an easy way to load GeoJSON directly into your ArcGIS map.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, load the [Esri Terraformer](https://github.com/Esri/Terraformer) libraries within in the `<head>` tag, anywhere before the main `<script>` tag.

    ```html
    <!-- ADD Terraformer references -->
    <script src="//cdn-geoweb.s3.amazonaws.com/terraformer/1.0.4/terraformer.min.js"></script>
    <script src="//cdn-geoweb.s3.amazonaws.com/terraformer-arcgis-parser/1.0.4/terraformer-arcgis-parser.min.js"></script>

    <script>
      var map;
      require(["esri/map",
        ...
    ```

3. In the `require` statement, add the [GeoJsonLayer](https://github.com/Esri/geojson-layer-js) module and reference.

    ```javascript
    require(["esri/map",
            // ADD module
            "//esri.github.io/geojson-layer-js/src/geojsonlayer.js",
            "dojo/domReady!"],
      // ADD GeoJsonLayer reference
      function(Map, GeoJsonLayer) {
        ...
    ```

4. Add a `load` event handler to the map to create a new `GeoJsonLayer`.

    ```javascript
    function(Map, GeoJsonLayer) {
      map = new Map("mapDiv", {
        center: [-122.68, 45.52],
        zoom: 10,
        basemap: "dark-gray"
      });

      // ADD load event handler
      map.on("load", function () {
        var geoJsonLayer = new GeoJsonLayer({
          url: "https://cdn.rawgit.com/Esri/geodev-hackerlabs/gh-pages/resources/pdx_data/PDX_Rail_Lines.geojson"
        });

        map.addLayer(geoJsonLayer);
      });
      ...
    ```

5. Confirm that the JSBin `Output` panel shows a map with rail lines.

Your app should look something like this:
* [Code](inedx.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/add_geojson_layer/index.html)

