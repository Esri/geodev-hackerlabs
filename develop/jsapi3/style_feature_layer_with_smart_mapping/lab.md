###Smart Mapping

In this lab you will use Smart Mapping components to style neighborhoods by population and see how Smart Mapping can intelligently pick appropriate styles for you.

You will add a basemap picker and legend, and configure the Neighborhood layer popup.

A continuous color ramp renderer will be used, and the color ramp will be automatically selected by Smart Mapping to best suit the underlying basemap.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the basemap picker and legend `div` elements:
 
    ```html
    <body>
      <div id="mapDiv"></div>

      <!-- ADD new div for the basemap picker and legend -->
      <div id="basemapPickerDiv" class="esriBasemapGallery"></div>
      <div id="legendContainer">
        <div id="legendDiv"></div>
      </div>
    </body>
    ``` 

3. At the top of the page, add CSS to the main `style` tag to configure the basemap picker and legend display:

    ```CSS
    <style>
      html,body,#mapDiv {
          padding:0;
          margin:0;
          height:100%;
      }

      /* ADD UI styling */
      .esriBasemapGallery {
        background: #fafafa;
        position: absolute;
        top: 10px;
        right: 10px;
        height: 100px;
        overflow-x: auto;
        overflow-y: hidden;
      }

      #legendContainer {
        background-color: #fafafa;
        position: absolute;
        right: 10px;
        top: 140px;
        padding: 8px;
      }

      .esriBasemapGalleryLabelContainer, #legendContainer {
        font-family: sans-serif;
        font-size: 0.75em;
      }
    </style>
    ```

4. Update the `require` statement and function definition:

    ```javascript
    require(["esri/map",
             // ADD modules
             "esri/layers/FeatureLayer",
             "esri/renderers/smartMapping",
             "esri/basemaps",
             "esri/dijit/Basemap",
             "esri/dijit/BasemapGallery",
             "esri/dijit/Legend",
             "esri/InfoTemplate",
            "dojo/domReady!"],
      // ADD aliases
      function(Map,FeatureLayer,smartMapping,
        esriBasemaps,Basemap,BasemapGallery,
        Legend,InfoTemplate) {
        ... 
    ```

5. Add a list of basemaps to choose from. Update the map creation to make use of this. We'll also change the default zoom of the map to `12`:

    ```javascript
    function(Map,FeatureLayer,smartMapping,esriBasemaps,Basemap,BasemapGallery,Legend,InfoTemplate) {

      // ADD a list of basemaps, and track the current one
      var basemapList = ["topo","streets","osm","gray","dark-gray"],
          currentBasemap = basemapList[0];
    
      map = new Map("mapDiv", {
        center: [-122.68, 45.52],
        // UPDATE the zoom level and starting basemap
        zoom: 12,
        basemap: currentBasemap
      });
    ```

6. Add a `FeatureLayer` pointing to the Neighborhoods layer. We'll also configure the `InfoTemplate` which defines how the popup will look when you click on the layer in the map. You can see that we're explicitly asking the feature layer for `NAME` and `TOTPOP_CY` attributes for use in the popup:

    ```javascript
      // ADD a neighborhoods layer
      var neighborhoodsLayer = new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0", {outFields: ["NAME","TOTPOP_CY"]});

      map.addLayer(neighborhoodsLayer);

      neighborhoodsLayer.setInfoTemplate(new InfoTemplate("${NAME}","Population: ${TOTPOP_CY}"));
    ```

7. Create a `Legend` item:

    ```javascript
    // ADD a legend widget to the UI
    var legend = new Legend({
      map: map,
      layerInfos: [
        {
          layer: neighborhoodsLayer,
          title: "Population"
        }
      ]
    }, "legendDiv");

    legend.startup();
    ```

8. Create a basemap gallery:

    ```javascript
    // ADD a basemap gallery of just our list of basemaps
    var basemapGallery = new BasemapGallery({
      showArcGISBasemaps: false,
      map: map
    }, "basemapPickerDiv");

    for (var i = 0; i < basemapList.length ; i++) {
      var esriBasemap = esriBasemaps[basemapList[i]];
      basemapGallery.add(new Basemap({
        id: basemapList[i],
        layers: esriBasemap.baseMapLayers,
        thumbnailUrl: esriBasemap.thumbnailUrl,
        title: esriBasemap.title
      }));
    }

    basemapGallery.startup();
    ```

9. Add code to update the SmartMapping renderer and the legend when the map loads and whenever the basemap changes:

    ```javascript
    // ADD a function to update the renderer colors and legend
    function SetRenderer() {
      smartMapping.createColorRenderer({
        layer: neighborhoodsLayer,
        field: "TOTPOP_CY",
        basemap: currentBasemap,
        theme: "high-to-low",
        showOthers: false
      }).then(function (colorRenderer) {
        neighborhoodsLayer.setRenderer(colorRenderer.renderer);
        neighborhoodsLayer.redraw();
        legend.refresh();
      });
    };

    // ADD code to configure the renderer when the layer first loads
    neighborhoodsLayer.on("load", function() {
      SetRenderer();
    });

    // ADD code to configure the renderer when a basemap is selected
    basemapGallery.on("selection-change", function (event){
      currentBasemap = event.target.getSelected().id;
      if (neighborhoodsLayer.loaded) {
        SetRenderer();
      }
    });
    ```
       
10. In JSBin, run the app > Select a basemap in the gallery to see how Smart Mapping changes the styling of the neighborhood layer appropriately for each basemap.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/style_feature_layer_with_smart_mapping/index.html)

###Bonus
* When the Neighborhood layer first loads, you can see the default symbology inherited from the layer before Smart Mapping kicks in and updates the symbology appropriately. Try using the `visible` parameter when creating the `FeatureLayer` to initially hide the layer, and the `show()` method to display it only once the renderer has been created.
* Try extending the list of basemaps to include other basemaps. See the `Map` [constructor](https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1) for valid values.
* Try using different `themes` when calling `smartMapping.createColorRenderer()` and see how it affects the symbology that's chosen. See the `createColorRenderer()` [documentation](https://developers.arcgis.com/javascript/jsapi/esri.renderers.smartmapping-amd.html#createcolorrenderer) for more info.
* The legend and basemap gallery don't really pop out from the map for all basemaps. Try adding a CSS `box-shadow` to help distinguish them in the UI:

    ```css
    #legendContainer, .esriBasemapGallery {
      box-shadow: 0px 0px 10px;
    }
    ```
