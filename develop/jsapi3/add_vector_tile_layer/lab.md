###Add a vector tile layer

In this lab you will add a vector tile layer to an ArcGIS API for JavaScript application. 

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require(["esri/map",
           // ADD module
           "esri/layers/VectorTileLayer", 
           "dojo/domReady!"],
    // ADD VectorTileLayer reference
    function(Map, VectorTileLayer) {
      ...
  ```

3. Now add a new `VectorTileLayer` to the map:

  ```javascript
  function(Map, VectorTileLayer) {
    map = new Map("mapDiv", {
      center: [-122.68, 45.52],
      zoom: 11
      //basemap: "dark-gray" Do not add basemap!
    });

    //The URL referenced in the constructor may point to a style JSON object in ArcGIS Online or directly to a vector tile service.
    var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/51acb8875f86482e82cb2ae24155b362/resources/styles/root.json");

    map.addLayer(vtlayer);
 ```

4. Confirm that the JSBin `Output` panel shows the vector tiles.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/add_vector_tile_layer/index.html)
