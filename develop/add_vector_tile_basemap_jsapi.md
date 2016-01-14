###Add a vector tile layer basemap

In this lab you will add a vector tile layer to an ArcGIS API for JavaScript application. 

1. Click [starter_map_jsapi.html](src/starter_map_jsapi.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require(["esri/map",
           // ADD module
           "esri/layers/VectorTileLayer", 
           "dojo/domReady!"],
    // ADD FeatureLayer reference
    function(Map, VectorTileLayer) {
      ...
  ```

3. Now add a new `VectorTileLayer` to the map:

  ```javascript
  function(Map, FeatureLayer) {
    map = new Map("mapDiv", {
      center: [-122.68, 45.52],
      zoom: 10
      //basemap: "dark-gray" Do not add basemap!
    });

    // You can reference vector tiles by root.json url or service url. 
    // See all vector tile items here: http://www.arcgis.com/home/search.html?q=owner:esri_vector
    
    var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json");

    map.addLayer(vtlayer);
 ```

4. Confirm that the JSBin `Output` panel shows the vectoor tiles.

Your app should look something like this:
* [Code](src/add_vector_tile_basemap_jsapi.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/add_vector_tile_basemap_jsapi.html)