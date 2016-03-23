###Style a Layer Popup

In this lab you will use code to style a popup.

1. Click [starter_map_jsapi.html](src/starter_map_jsapi.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  ```javascript
  require(["esri/map",
          "esri/layers/FeatureLayer",
          "esri/dijit/PopupTemplate",
          "dojo/domReady!"],
      function(Map, FeatureLayer, PopupTemplate) {
      ...
  ```

4. Now add create a new PopupTemple with the popup template style desired:

  ```javascript
  function(Map, FeatureLayer, PopupTemplate) {
    map = new Map("mapDiv", {
      center: [-122.68, 45.52],
      zoom: 10,
      basemap: "dark-gray"
    });

    var popupTemplate = new PopupTemplate({
      title: "Neighborhoods",
      // Fields
      fieldInfos: [
        { fieldName: "TOTPOP_CY", visible: true, format: { places: 0 } },
        { fieldName: "AVGHINC_CY", visible: true, format: { places: 0 } },
        { fieldName: "MEDAGE_CY", visible: true, format: { places: 0 } },
        { fieldName: "AREA", visible: true, format: { places: 2 } }
      ],
      // Charts
      mediaInfos: [
        {
          title: "Demographics",
          type: "piechart",
          value: { 
            fields: [ 
              "TOTPOP_CY", 
              "AVGHINC_CY", 
            ] 
          }
        }
      ]
    });
  ```
5. Now add the template to the feature layer and add the featurelayer to the map.

  ```javascript
    var featureLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched/FeatureServer/0", 
      {
        outFields: ["*"],
        infoTemplate: popupTemplate
      }
    );
    
    map.addLayer(featureLayer);
  ```

6. Confirm that the JSBin `Output` panel shows styled popups when you click on the neighborhoods.

Your app should look something like this:
* [Code](src/style_simple_popup_jsapi.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/style_simple_popup_jsapi.html)

Bonus
* Combine the code from the last lab with this one so the features are styled along with the popup.