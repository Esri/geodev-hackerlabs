###Feature Layer Search

In this lab you will add a search widget search against a feature layer. The widget performs context-sensitve search as you type and then it will zoom to and highlight the feature selected. You can also format the data in the popup that appears. 

In this lab it will search against the neighborhood polygon layer.

1. Click [starter_map/index.html](../starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

    ```javascript
    require(["esri/map",
            // Add Search, FeatureLayer and InfoTemplate modules
            "esri/dijit/Search",
            "esri/layers/FeatureLayer",
            "esri/InfoTemplate",
            "dojo/domReady!"],
      // Add Search alias
      function(Map,Search,FeatureLayer,InfoTemplate) {
        ... 
    ```

3. Add the search widget's div:
 
    ```html
    <body>
       <!-- ADD new div for the search widget -->
       <div id="searchDiv"></div>
       
       <div id="mapDiv"></div>
    </body>
    ``` 

4. At the top of the page, add the CSS to position `searchDiv`:

    ```CSS
    <style>
        html,body,#mapDiv {
            padding:0;
            margin:0;
            height:100%;
        }

      /* ADD search widget styling */ 
      #searchDiv {
         display: block;
         position: absolute;
         z-index: 2;
         top: 20px;
         left: 74px;
      }
    </style>
    ```

5. Create the Search widget and add code to select features from the neighborhoods layer.


    ```javascript
    function(Map,Search) {
      map = new Map("mapDiv", {
        center: [-122.68, 45.52],
        zoom: 10,
        basemap: "dark-gray"
      });

      // ADD the search widget 
      var search = new Search({
        map: map
      }, "searchDiv");
 
      // ADD this to retrieve the array of sources used by the Search widget and create a new source that searches against the neighborhood feature layer. "Sources" determines what is searchable within the search box. 
      var sources = search.get("sources");
      sources.push({
          featureLayer: new FeatureLayer("http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0"),
          name: "Neighborhood Search",
          searchFields: ["NAME"],
          displayField: "NAME",
          exactMatch: false,
          outFields: ["NAME","AVGHINC_CY","MEDAGE_CY"],
          placeholder: "St. Johns",
          enableSuggestions: true,
          // Create an InfoTemplate for the popup
          infoTemplate: new InfoTemplate("Neighborhood","Name: ${NAME}</br>Avg. Household Income $ ${AVGHINC_CY}</br>Median Age: ${MEDAGE_CY}")
      });

      // ADD this to set `sources` to use the new array and then startup the Search widget.
      search.set("sources",sources);
      search.startup();
    });
    ```
       
6. In JSBin, run the app > select the pulldown on the left-hand side of the search box > select `Neighborhood Search` from the pull down list > enter "St. John's".
The app should highlight and zoom into the neighborhood polygon, and a popup should also be displayed.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/feature_layer_search/index.html)

###Bonus
* Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0) to the Search widget.
* Customize the popup's CSS. Hint: see the [Search with customization](https://developers.arcgis.com/javascript/jssamples/search_customized.html) sample.
