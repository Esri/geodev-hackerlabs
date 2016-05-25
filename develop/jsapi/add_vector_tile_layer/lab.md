###Add a vector tile layer

In this lab you will add a vector tile layer to an ArcGIS API for JavaScript application. 

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/VectorTileLayer", // ADD module
    "dojo/domReady!"
  ], function(Map, MapView, VectorTileLayer) { // ADD VectorTileLayer reference
    ...
  ```

3. Now add a new `VectorTileLayer` to the map:

  ```javascript
  ], function(Map, MapView, VectorTileLayer) {

    var map = new Map();

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 10
    });

    // ADD Create a Vector Tile Layer and add it to the Map.
    // The URL referenced in the constructor may point to a style JSON object in ArcGIS Online or directly to a vector tile service.
    var tileLyr = new VectorTileLayer({
      url: "https://www.arcgis.com/sharing/rest/content/items/51acb8875f86482e82cb2ae24155b362/resources/styles/root.json"
    });

    map.add(tileLyr);
 ```

4. Confirm that the JSBin `Output` panel shows the vector tiles.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/add_vector_tile_layer/index.html)

###Bonus
* The 4.0 JS API works closely with ArcGIS Portals. Instead of the style JSON, you can [create a Layer directly from the Portal Item](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#.fromPortalItem). Use the same GUID as embededd in the code added in Step 3 above. You'll have to change the require module too.

  ``` javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/Layer", // Reference the Layer module
    "dojo/domReady!"
  ], function(Map, MapView, Layer) { // Provide a handle to "Layer"
  ```

  and

  ``` javascript
  Layer.fromPortalItem({
    portalItem: {
      id: "51acb8875f86482e82cb2ae24155b362"   
    }
  }).then(function(lyr){
    map.add(lyr); // Adds layer to the map
  });
  ```

  **Promise Pattern:** You just used a _Promise_ to do something asynchronously. The JS API asked ArcGIS Online for details about the item with ID `51acb8875f86482e82cb2ae24155b362`. That took a round trip request to the ArcGIS.com servers. When the response came back, the JS API created the right type of layer as `lyr` and we added it to the map. Neat!
