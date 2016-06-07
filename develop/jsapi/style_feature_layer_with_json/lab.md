###Style Feature Layers with JSON

In this lab you will apply custom styling to a feature layer using the JSON Drawing Info stored with the feature service.

1. Click [this layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0) and copy the content of the Drawing Info JSON's `renderer` property. You will use this to style your layer below.

2. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

3. In `JSBin` > `HTML`, update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/FeatureLayer",
    "esri/renderers/support/jsonUtils",
    "dojo/domReady!"
  ], function(Map, MapView, FeatureLayer, rendererJsonUtils) {
  ```

4. Now create a new renderer and use it with a `FeatureLayer`.

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52],
      zoom: 10
    });

    /*** ADD ***/
    var renderer = rendererJsonUtils.fromJSON({"type":"uniqueValue","field1":"COALIT","defaultSymbol":{"color":[170,170,170,134],"outline":{"color":[153,153,153,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"defaultLabel":"Others","uniqueValueInfos":[{"value":"SEUL","symbol":{"color":[253,127,111,134],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"SEUL"},{"value":"SWNI","symbol":{"color":[126,176,213,134],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"SWNI"},{"value":"EPNO","symbol":{"color":[178,224,97,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"EPNO"},{"value":"NWNW","symbol":{"color":[189,126,190,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"NWNW"},{"value":"NECN","symbol":{"color":[255,181,90,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"NECN"},{"value":"NPNS","symbol":{"color":[255,238,101,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"NPNS"},{"value":"CNN","symbol":{"color":[190,185,219,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"CNN"},{"value":"unclaimed","symbol":{"color":[253,204,229,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"unclaimed"},{"value":"NWNW/SWNI","symbol":{"color":[139,211,199,131],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"NWNW/SWNI"},{"value":"NECN/CNN","symbol":{"color":[203,236,196,134],"outline":{"color":[51,51,51,255],"width":0.75,"type":"esriSLS","style":"esriSLSSolid"},"type":"esriSFS","style":"esriSFSSolid"},"label":"NECN/CNN"}]});

    var featureLayer = new FeatureLayer({
      url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Enriched/FeatureServer/0",
      renderer: renderer 
    });

    map.add(featureLayer);
  ```

4. Confirm that the JSBin `Output` panel shows styled neighborhoods.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/style_feature_layer_with_json/index.html)
