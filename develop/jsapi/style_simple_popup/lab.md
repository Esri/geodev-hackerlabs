###Style a Layer Popup

In this lab you will use code to style a popup.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/FeatureLayer",
    "esri/PopupTemplate",
    "dojo/domReady!"
  ], function(Map, MapView, FeatureLayer, PopupTemplate) {
  ```

4. Now add create a new PopupTemple with the popup template style desired:

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 10
    });

    /*** ADD ***/

    var popupTemplate = new PopupTemplate({
      title: "Neighborhoods",
      // Fields
      content: [{
        type: "fields",
        fieldInfos: [
          { fieldName: "TOTPOP_CY", label: "Total Population", visible: true, format: { places: 0 } },
          { fieldName: "AVGHINC_CY", label: "Average Income", visible: true, format: { places: 0 } },
          { fieldName: "MEDAGE_CY", label: "Median Age", visible: true, format: { places: 0 } },
          { fieldName: "AREA", visible: true, format: { places: 2 } }
        ]
      },
      {
        type: "media",
        mediaInfos: [{
          title: "Demographics",
          type: "pie-chart",
          value: { 
            fields: [ 
              "TOTPOP_CY", 
              "AVGHINC_CY", 
            ]
          }
        }]
      }] 
    });
  ```
5. Now add the template to the feature layer and add the featurelayer to the map.

  ```javascript
    var featureLayer = new FeatureLayer({
      url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched/FeatureServer/0",
      outFields: ["*"],
      popupTemplate: popupTemplate
    });

    map.add(featureLayer);
  ```

6. Confirm that the JSBin `Output` panel shows styled popups when you click on the neighborhoods.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/style_simple_popup/index.html)

Bonus
* Combine the principles from the [Style Feature Layer With JSON](../style_feature_layer_with_json/lab.md) lab so the features are styled along with the popup. Use a `ClassBreaksRenderer`.

  ``` javascript
    var renderer = ClassBreaksRenderer.fromJSON({"visualVariables":[{"type":"colorInfo","field":"TOTPOP_CY","normalizationField":"AREA","stops":[{"value":1280,"color":[116,77,48,255],"label":"< 1,280"},{"value":3212,"color":[175,107,47,255],"label":null},{"value":5144,"color":[214,146,83,255],"label":"5,144"},{"value":7076,"color":[235,195,154,255],"label":null},{"value":9008,"color":[255,245,230,255],"label":"> 9,008"}]},{"type":"sizeInfo","target":"outline","expression":"view.scale","stops":[{"size":2,"value":42474},{"size":1,"value":132730},{"size":0.5,"value":530919},{"size":0,"value":1061838}]}],"authoringInfo":{"visualVariables":[{"type":"colorInfo","minSliderValue":0,"maxSliderValue":17654.51572245626,"theme":"high-to-low"}]},"type":"classBreaks","field":"TOTPOP_CY","minValue":-9007199254740991,"classBreakInfos":[{"symbol":{"color":[170,170,170,255],"outline":{"color":[153,153,153,128],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"classMaxValue":9007199254740991}],"normalizationType":"esriNormalizeByField","normalizationField":"AREA"});
  ```
