###Add a feature layer to a map

In this lab you will add a feature layer to an ArcGIS API for JavaScript application. 

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/FeatureLayer",
    "dojo/domReady!"
  ], function(Map, MapView, FeatureLayer) {
  ```

3. Now add the Styled Rail Lines to the map:

  ```javascript
    ...

    /*** ADD ***/

    var featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines_Styled/FeatureServer/0"
    });

    map.add(featureLayer);
  ```

4. Confirm that the JSBin `Output` panel shows a map with rail lines.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/add_feature_layer/index.html)

###Bonus
* Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0) to the map,
 and then add a [Neighborhoods feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0).
* Ensure the layers are ordered with polygons on the bottom, lines and then points on top.
* If you added additional layers using the `add()` method, try the `addMany()` method instead. Read up on the `layers` collection and see how the API gives you a few ways to [add layers to a map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#layers).
* The 4.0 JS API works closely with ArcGIS Portals. Instead of the Feature Service URL, [use the Portal Item ID](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#portalItem) to add layers. See the URLs of the Portal Items for [Stops](http://www.arcgis.com/home/item.html?id=a77a0ed75b0245dea165c31be5906edc), [Lines](http://www.arcgis.com/home/item.html?id=2ebbbd8f41bc4cc49586ef853b9f81cc) and [Neighborhoods](http://www.arcgis.com/home/item.html?id=a77a0ed75b0245dea165c31be5906edc) to get their IDs.
