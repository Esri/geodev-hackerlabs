###Style Feature Layers

In this lab you will apply custom styling to a feature layer.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition.

  ```javascript
  require(["esri/map",
           // ADD modules 
           "esri/layers/FeatureLayer",
           "esri/symbols/SimpleLineSymbol",
           "esri/renderers/UniqueValueRenderer",
           "esri/Color",
           "dojo/domReady!"],
    // ADD FeatureLayer,SimpleLineSymbol,UniqueValueRenderer,Color references
    function(Map,FeatureLayer,SimpleLineSymbol,UniqueValueRenderer,Color) {
      ...
  ```

3. Now set up a `UniqueValueRenderer` based off the `TYPE` field.

  ```javascript
  function(Map,FeatureLayer,SimpleLineSymbol,UniqueValueRenderer,Color) {
    map = new Map("mapDiv", {
      center: [-122.68, 45.52],
      zoom: 10,
      basemap: "dark-gray"
    });

    // ADD a Unique Value Renderer with no default symbol
    var renderer = new UniqueValueRenderer(null, "TYPE");
  ```

4. Next we tell the renderer how to show each `TYPE` value (the values are `MAX`, `SC`, `MAX/SC` and `CR`). We want to highlight `CR`, so we make the line wider and darker by setting the width to `4` and the `Color` opacity to `1`.

  ```javascript
  // Green for Type MAX
  renderer.addValue("MAX", new SimpleLineSymbol().setColor(new Color([96, 219, 34, 0.8])));

  // Yellow for Type SC
  renderer.addValue("SC", new SimpleLineSymbol().setColor(new Color([255, 255, 34, 0.8])));

  // Red for Type MAX/SC
  renderer.addValue("MAX/SC", new SimpleLineSymbol().setColor(new Color([238, 71, 71, 0.8])));

  // Light blue for Type CR
  renderer.addValue("CR", new SimpleLineSymbol().setColor(new Color([8, 197, 249, 1])).setWidth(4));
  ```

5. Lastly, we create the `FeatureLayer`, attach the `UniqueValueRenderer`, and add it to the map. Because the renderer relies on the `TYPE` field, we tell the `FeatureLayer` to retrieve it by specifying the `outFields` parameter.

  ```javascript
  var featureLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines/FeatureServer/0", {
    mode: FeatureLayer.MODE_ONDEMAND,
    outFields: ["TYPE"]
  });

  featureLayer.setRenderer(renderer);

  map.addLayer(featureLayer);
  ```

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/style_feature_layer/index.html)

###Bonus
 * Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/ArcGIS/rest/services/PDX_Rail_Stops/FeatureServer/0) to the map and then apply custom styles to it.
