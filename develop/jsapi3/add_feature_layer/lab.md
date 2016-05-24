###Add a feature layer to a map

In this lab you will add a feature layer to an ArcGIS API for JavaScript application. 

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

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
    var featureLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines_Styled/FeatureServer/0");

    map.addLayer(featureLayer);
  ```

4. Confirm that the JSBin `Output` panel shows a map with rail lines.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/add_feature_layer/index.html)

###Bonus
* Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0) to the map,
 and then add a [Neighborhoods feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0).
* Ensure the layers are ordered with polygons on the bottom, lines and then points on top.
