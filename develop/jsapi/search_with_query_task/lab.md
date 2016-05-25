###Search with a Query Task

In this lab you will use a QueryTask to query data from a feature layer. A query task allows you to make a SQL or spatial query to retrieve subsets of records from a layer or service. With query tasks, you are responsible for adding the resulting features to the map as graphics. You are also responsible for adding a symbol and the defining the popup template used for the data.

1. Click [create_starter_map/index.html](../create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the query select menu `div` element and the sql query options:

  ```html
    <body>
      <div id="viewDiv"></div>
      <!-- ADD -->
      <select id="queryDiv">
        <option selected>TYPE = 'MAX'</option>
        <option>TYPE = 'CR'</option>
        <option>TYPE = 'SC'</option>
      </select>
    </body>
  ```

3. Update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/MapView",
    /*** ADD ***/
    "esri/layers/FeatureLayer",
    "esri/tasks/QueryTask",
    "esri/tasks/support/Query",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/core/watchUtils",
    "dojo/on",
    "dojo/dom",
    "dojo/domReady!"
  ], function(Map, MapView, FeatureLayer, QueryTask, Query, SimpleMarkerSymbol, watchUtils, on, dom) { /*** ADD ***/
  ```

4. Now add the `QueryTask` and `Query` to select features from the PDX_Rail_Stops_Styled layer. Only return three fields from the layer.

  ```javascript
    ...

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-122.68, 45.52], // lon, lat
      zoom: 10
    });

    /*** ADD ***/

    // Create query task to reference the PDX_Rail_Stops_Styled feature layer      
    var queryTask = new QueryTask({
      url: "http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0"
    });

    // Only return three fields
    var query = new Query({
      returnGeometry: true,
      outFields: ["STATION", "LINE", "TYPE"],
      where: ""
    });
  ```

5. Next, add functions to execute the query task, get features, and then add them to the default graphics layer of the view. Notice that features will not be added until the view promise is ready.

  ```javascript
    /*** ADD ***/

    // Perform query when page loads
    getFeatures("TYPE = 'MAX'");

    // Get features with sql clause
    function getFeatures(sql) {
      query.where = sql;
      queryTask.execute(query).then(function(results) {
        if (!view.ready) {
          watchUtils.whenTrueOnce(view, "ready", function() {
            addFeatures(results.features);
          })
        } else {
          addFeatures(results.features);
        }
      });
    }

    // Add features as graphics
    function addFeatures(features) {
      var color,
        symbol;
      // Color
      switch (features[0].attributes.TYPE) {
        case "MAX":
          color = [237, 81, 81]
          break;
        case "CR":
          color = [167, 198, 54]
          break;
        case "SC":
          color = [20, 158, 206]
          break;
      }
      symbol = new SimpleMarkerSymbol({
        color: color,
        size: 8,
        outline: {
          color: [ 255, 255, 255 ],
          width: 1
        }
      });
      // Set symbol and popup template
      for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        feature.symbol = symbol;
        feature.popupTemplate = {
          title: "{STATION}",
          content: "This is a {TYPE} rail stop for the {LINE} line."
        }
        view.graphics.add(feature);
      }
      // Add graphics
      view.graphics.removeAll();
      view.graphics.addMany(features);
      view.goTo(features);
      view.popup.visible = false;
    }
  ```

6. Finally, add the select HTML element and an event handler so we can change the SQL string for the query.

  ```javascript
    /*** ADD ***/

    // Add select element to UI
    view.ui.add(dom.byId("queryDiv"), {
      position: "top-right"
    });

    // Select a sql query
    on(dom.byId("queryDiv"), "change", function(e) {
      var sql = e.target.value;
      getFeatures(sql);
    })

  ```

7. In JSBin, run the app > Select a category to query the feature layer. Click on any point to display the attribute data in a popup.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/search_with_query_task/index.html)
