###Create an App from a Web Map

You can use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/jsapi/) to easily load web maps built with the Map Viewer. The advantage to using this approach is that the map will contain all of the pre-defined settings you configured in the Map Viewer. e.g. Layer Styles, Popups, Refresh Rate.

In this lab, you will use the ArcGIS JS 3.x API to load a map by a `WebmapID` in a custom JavaScript app. Feel free to visit [this tutorial](https://developers.arcgis.com/javascript/jshelp/intro_agstemplate_amd.html) for more information.

1. Click [JS API 3 starter map HTML](../../jsapi3/create_starter_map/index.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  	```javascript
	  	require([
	    	"esri/map",
	    	// ADD the ArcGIS library to load the web map
	    	"esri/arcgis/utils",
	    	"dojo/domReady!"
	    	], function(Map, arcgisUtils) {
      	
      		...

      	});
  	```

3. Now add code to create the map from the webmapid. 
	
	NOTE: Feel free to use your own webmapid below!

  	```javascript
  		require([
	    	"esri/map",
	    	"esri/arcgis/utils",
	    	"dojo/domReady!"
	    	], function(Map, arcgisUtils) {

		    	// ADD this to create the map from the webmapid
				arcgisUtils.createMap("7186a92406194797aa518c06c189a71f", "mapDiv").then(function(response) {
					map = response.map;
				});

      	});

      	...
  	```

Your app should look something like this:
 * [Code](index.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/webmap_apps/create_jsapi3_app/index.html)

###Bonus
* Use the esri/dijit/Legend to add a legend to the upper right of the app. Apply CSS to style the legend.
* Use the esri/dijit/Scalebar to add a scalebar to lower left of the app.
