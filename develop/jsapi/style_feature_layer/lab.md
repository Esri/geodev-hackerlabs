###Style Feature Layers

In this lab you will apply custom styling to a feature layer.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and `function` definition.

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleLineSymbol",
    "esri/renderers/UniqueValueRenderer",
    "dojo/domReady!"
  ], function(Map, MapView, FeatureLayer, SimpleLineSymbol, UniqueValueRenderer) {
  ```

3. Now set up a `UniqueValueRenderer` based off the `TYPE` field.

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 10
    });

    /*** ADD ***/
    var renderer = new UniqueValueRenderer({
      field: "TYPE",
      defaultSymbol: new SimpleLineSymbol()
    });
  ```

4. Next we tell the renderer how to show each `TYPE` value (the values are `MAX`, `SC`, `MAX/SC` and `CR`). We want to highlight `CR`, so we make the line wider and darker by setting the width to `4` and the `color` opacity to `1`.

  ```javascript
    // Green for Type MAX
    renderer.addUniqueValueInfo("MAX",
      new SimpleLineSymbol({
        color: [96, 219, 34, 0.8]
      })
    );

    // Yellow for Type SC
    renderer.addUniqueValueInfo("SC",
      new SimpleLineSymbol({
        color: [255, 255, 34, 0.8]
      })
    );

    // Red for Type MAX/SC
    renderer.addUniqueValueInfo("MAX/SC",
      new SimpleLineSymbol({
        color: [238, 71, 71, 0.8]
      })
    );

    // Light blue for Type CR
    renderer.addUniqueValueInfo("CR",
      new SimpleLineSymbol({
        color: [8, 197, 249, 1],
        width: 4
      })
    );
  ```

5. Lastly, we create the `FeatureLayer`, attach the `UniqueValueRenderer`, and add it to the map.

  ```javascript
    /*** ADD ***/
    var featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines/FeatureServer/0",
      renderer: renderer 
    });

    map.add(featureLayer);
  ```

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/style_feature_layer/index.html)

###Bonus
 * Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/ArcGIS/rest/services/PDX_Rail_Stops/FeatureServer/0) to the map and then apply custom styles to it.
