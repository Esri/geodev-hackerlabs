###Search with Widget 3D

In this lab you will add a search widget. The widget performs context-sensitve search as you type and then it will zoom to and highlight the feature selected. You can also format the data in the popup that appears. 

1. Click [create_starter_map_3d/index.html](../create_starter_map_3d/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and `function` definition:

  ```javascript
  require([
    "esri/Map",
    "esri/views/SceneView",
    /*** ADD ***/
    "esri/widgets/Search",
    "dojo/domReady!"
  ], function(Map, SceneView, Search) { /*** ADD ***/ 
  ```

3. Change the Map's `basemap` and `ground` properties.

   ```javascript
   
         var map = new Map({
           basemap: "satellite", 
           ground: "world-elevation"
         });
   
   ```

4. Create the Search widget and add its code below `SceneView`. Position the widget to the `top-left` of the UI.

  ```javascript
    ...      

      var searchWidget = new Search({
        view: view
      });
      searchWidget.startup();

      // Add the search widget to the top left corner of the view
      view.ui.add(searchWidget, {
        position: "top-left",
        index: 0
      }); 
  ```

5. At this point, the map will allow you to search against the default ArcGIS Online Geocoding Service. Give it a go. In JSBin, run the app and type in `portland` and select Portland, Oregon from the pulldown list. The app should highlight and zoom into the appropriate area, and a popup should also be displayed with related data.

Your app should look something like this:
* [Code](index.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/jsapi/search_with_widget_3d/index.html)

###Bonus
* Add a button that clears the search results and graphic from the map. Hint: check the API reference on which method to use.