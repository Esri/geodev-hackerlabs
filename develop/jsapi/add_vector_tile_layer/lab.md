###Add a vector tile layer

In this lab you will add a vector tile layer to an ArcGIS API for JavaScript application. 

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/VectorTileLayer",
    "dojo/domReady!"
  ], function(Map, MapView, VectorTileLayer) {
  ```

3. Now we'll add a vector tiled layer. To do that, we modify the code that creates the Map to just create an empty map and we'll add the tiled layer later.

  ```javascript
    ...

    /*** REPLACE ***/

    // Create an empty map with no basemap
    var map = new Map();

    ...

    /*** ADD ***/

    // Create a new Vector Layer pointing at the style JSON.
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

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    // Reference the Layer module
    "esri/layers/Layer",
    "dojo/domReady!"
    // Provide a handle to "Layer"
  ], function(Map, MapView, Layer) {
  ```

  and

  ```javascript
    Layer.fromPortalItem({
      portalItem: {
        id: "51acb8875f86482e82cb2ae24155b362"   
      }
    }).then(function(lyr){
      map.add(lyr);
    });
  ```

  **Promise Pattern:** You just used a _Promise_ to do something asynchronously. The JS API asked ArcGIS Online for details about the item with ID `51acb8875f86482e82cb2ae24155b362`. That took a round trip request to the ArcGIS.com servers. When the response came back, the JS API created the right type of layer as `lyr` and we added it to the map. Neat!

* The map in this lab doesn't have a basemap layer. Rather the `VectorTileLayer` is added as an operational layer. And that's OK, but might not be what you want.

  The 4.0 JS API has a powerful model of what a basemap is. Try using the custom `VectorTileLayer` as the basemap instead of calling `map.add()`. Look at the constructor for [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#constructors) and the documentation for [Basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html) to see how to pass in a custom `Basemap`.

  With auto-casting, the JS API can make this quite convenient with something like this (where we auto-cast a `Basemap` object):

  ```javascript
    var map = new Map({
      basemap: { // Auto-casting a Basemap
        baseLayers: [new VectorTileLayer({
          url: "https://www.arcgis.com/sharing/rest/content/items/51acb8875f86482e82cb2ae24155b362/resources/styles/root.json"
        })]  
      }
    });
  ```

  Or even (where we auto-cast a `PortalItem` and then a `Basemap` object):

  ```javascript
    var map = new Map({
      basemap: { // Auto-casting a Basemap
        baseLayers: [new VectorTileLayer({
          portalItem: { // Auto-casting a PortalItem
            id: "51acb8875f86482e82cb2ae24155b362"   
          }
        })]  
      }
    });
  ```

  **Auto-Casting:** You just saw a couple examples of auto-casting at work ([Basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html) and [PortalItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-PortalItem.html)). As you look at samples, you'll probably see more. Simple JSON objects get turned into rich API objects. It makes working with the JS API quick and easy (you'll notice we didn't need to `require` the `Basemap` or `PortalItem` module for this to work.
