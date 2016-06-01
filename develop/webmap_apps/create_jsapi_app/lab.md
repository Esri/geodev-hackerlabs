###Create an App from a Web Map

You can use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) to easily load web maps built with the Map Viewer. The advantage to using this approach is that the map will contain all of the pre-defined settings you configured in the Map Viewer. e.g. Layer Styles, Popups, Refresh Rate.

In this lab, you will use the ArcGIS JS API to load a WebMap by its ID in a custom JavaScript app. 

1. Click [JS API starter map HTML](../../jsapi/create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and `function` definition (notice to remove the `Map` reference).

	```javascript
  require([
    "esri/views/MapView",
    /*** ADD ***/
    "esri/WebMap",
    "dojo/domReady!"
  ], function(MapView, WebMap) {
	```

3. Open a WebMap into the MapView using the WebMapID. Note that the code is really similar to the starter map, but in place of a Map we're using a WebMap. To use the saved initial view of the WebMap, remove the `center` and `zoom` attributes from the `MapView` options.
	
  NOTE: Feel free to use your own WebMap ID below!

	```javascript
  require([
    "esri/views/MapView",
    "esri/WebMap",
    "dojo/domReady!"
  ], function(MapView, WebMap) {

    /*** REPLACE ***/

    var map = new WebMap({
      portalItem: { // autocasts as new PortalItem
        id: "7186a92406194797aa518c06c189a71f"
      }
    });

    var view = new MapView({
      map: map,
      container: "viewDiv"
    });
	```

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/webmap_apps/create_jsapi_app/index.html)

###Bonus
* Use the esri/dijit/Legend to add a legend to the upper right of the app. Use the [View UI](https://developers.arcgis.com/javascript/latest/guide/view-ui/index.html) calls to place the legend at the top-right of the display.

  ```javascript
  require([
    "esri/views/MapView",
    "esri/WebMap",
    /*** ADD ***/
    "esri/widgets/Legend",
    "dojo/domReady!"
  ], function(MapView, WebMap, Legend) {
    ...

    /*** ADD ***/
    var legend = new Legend({
      view: view
    });

    view.ui.add(legend, "top-right");
  ```
