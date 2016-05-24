###Query-Feature Layer

In this lab you will use a QueryTask to query data from a feature layer.

You will create a simple widget in the UI to change the query selection.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the query drop-down menue UI `div` element and its contents:

    ```html
    <body>      
      <div id="mapDiv"></div>

      <!-- ADD new div for the query UI -->
      <div class="query-panel">
        <h4>Query a Feature Layer</h4>
        <select id="poicode" name="poicode">
          <option value="" selected="selected">Select a Category</option>
          <option value="Restaurant">Restaurants</option>
          <option value="Hotel">Hotels</option>
          <option value="Bank">Banks</option>
        </select>
      </div>
    </body>
    ```

3. At the top of the page, add CSS to the main `style` tag to style the query drop-down menue UI:

    ```CSS
    <style>
      html, body, #mapDiv {
        margin: 0;
        padding:0;
        height: 100%;
      }
      .query-panel {
        font: 14px gadget, sans-serif;
        background-color: #fff;
        position: absolute;
        height: 7em;
        right: 10px;
        top: 10px;
        padding: 10px;
        border: 1px solid #01AAFF;
        border-radius: 5px;
        z-index: 10000;
      }
    </style>
    ```

4. Add a reference to a calcite CSS Theme (`calcite`), and configure the `body` tag to use it:

    ```HTML
    <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/themes/calcite/dijit/calcite.css">

    <!-- ADD a link to the calcite Dojo theme's CSS -->
    <link rel="stylesheet" href="https://js.arcgis.com/3.16/esri/themes/calcite/esri/esri.css">

    ...

    <!-- ADD "calcite" as the class of the body tag -->
    <body class="calcite">
    ```

5. Update the `require` statement and function definition:

    ```javascript
    require(["esri/map",
             // ADD modules
             "esri/tasks/query",
             "esri/tasks/QueryTask",
             "esri/symbols/SimpleMarkerSymbol",
             "esri/InfoTemplate",
             "esri/Color",
             "dojo/on",
             "dojo/dom",
             "dojo/domReady!"], 
      // ADD aliases
      function(Map, Query, QueryTask, SimpleMarkerSymbol, InfoTemplate, Color, on, dom) {
        ...
    ```

6. Add a `Map` and set variables for location of `FeatureLayer` and define symbology for using `SimpleMarkerSymbol`:

    ```javascript
    function(Map, Query, QueryTask, SimpleMarkerSymbol, InfoTemplate, Color, on, dom) {

      var map = new Map('mapDiv', {
        basemap: 'streets-night-vector',
        center: [-105.265, 40.014],
        zoom: 12
      });

      //ADD The service that contains the featurelayer
      var url = 'http://services.arcgis.com/RkjCp6A0cLN4ubJm/arcgis/rest/services/POIBoulder/FeatureServer/0',
                //ADD Define symbol to display the query results
                markerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 11, null, new Color([0,255,0,0.7]));
      //ADD Define InfoTemplate to display attributes in an HTML popup.
      var infoTemplate = new InfoTemplate("${NAME}", "Address : ${ADDRESS}<br/>Phone : ${PHONE}");
    ```

7. Create functions to create and update the query and report any errors:

    ```javascript
    //ADD Listen for change event on select menu 
    on(dom.byId('poicode'), 'change', function(e) {
      var poicode = e.target.value;
      if (poicode.length > 0) {
        var queryTask = new QueryTask(url);
        var query = new Query();
        //Defines where statement. Notice when to use single vs. double quotes.
        query.where = "DESCRIPTION = '" + poicode +"' AND CITY ='Boulder'";
        query.outFields=["NAME", "ADDRESS","PHONE"];
        query.returnGeometry = true;
        //Executes QueryTask using Query and passes it to function to handle results or error.
        queryTask.execute(query).then(QuerySuccess, QueryError);
      }
    });

    //ADD A function to handle the results of query.
    function QuerySuccess(featureSet) {
      map.graphics.clear();
      map.infoWindow.hide();
      var features = featureSet.features;
      for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        feature.setSymbol(markerSymbol);
        feature.setInfoTemplate(infoTemplate);
        map.graphics.add(feature);
      }
    }

    //ADD A function to handle any errors.
    function QueryError(error) {
      console.error('An error ocurred in the query: ', error);
    }
    ```

8. In JSBin, run the app > Select a category to query the feature layer. Click on any point to display the attribute data in a popup.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi3/search_with_query_task/index.html)
