###Add a feature layer to a map

In this lab you will add a feature layer to an ArcGIS API for JavaScript application. 

1. Click [starter_map_jsapi.html](src/starter_map_jsapi.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require(["esri/map",
           // ADD module
           "esri/layers/FeatureLayer", 
           "dojo/domReady!"],
    // ADD FeatureLayer reference
    function(Map, FeatureLayer) {
      ...
  ```

3. Now add a new `FeatureLayer` to the map:

  ```javascript
  function(Map, FeatureLayer) {
    map = new Map("mapDiv", {
      center: [-122.68, 45.52],
      zoom: 10,
      basemap: "dark-gray"
    });

    // ADD a feature layer
    var featureLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods/FeatureServer/0");

    map.addLayer(featureLayer);
  ```

4. Confirm that the JSBin `Output` panel shows a map with rail lines.

Your app should look something like this:
* [Code](src/add_feature_layer_jsapi.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/add_feature_layer_jsapi.html)

###Bonus
* Try swapping ```PDX_Neighborhoods``` with ```PDX_Neighborhoods_Styled``` or any of your services that have been styled earlier!  

e.g. var featureLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods/FeatureServer/0");
