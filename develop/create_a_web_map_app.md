###Create an App from a Web Map

You can use the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/jsapi/) to easily load web maps built with the Map Viewer. The advantage to using this approach is that the map will contain all of the pre-defined settings you configured in the Map Viewer. e.g. Layer Styles, Popups, Refresh Rate.

In this lab, you will load a map by a `WebmapID` in a custom JavaScript app. Feel free to visit [this tutorial](https://developers.arcgis.com/javascript/jshelp/intro_agstemplate_amd.html) for more information.

1. Click [starter_map_jsapi.html](src/starter_map_jsapi.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, update the `require` statement and function definition:

  	```javascript
  	<script src="http://js.arcgis.com/3.13compact/"></script>
	<script>
	  	var map;
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

  	```
  		require([
	    	"esri/map",
	    	"esri/arcgis/utils",
	    	"dojo/domReady!"
	    	], function(Map, arcgisUtils) {

		    	// ADD this to create the map from the webmapid
				arcgisUtils.createMap("27970d32436a446dabb3c71cf949115e", "mapDiv").then(function(response) {
					map = response.map;
				});

      	});

      	...
  	```

Your app should look something like this:
 * [Code](https://github.com/Esri/geodev-hackerlabs/blob/gh-pages/develop/src/web_map_app_jsapi.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/web_map_app_jsapi.html)

###Extras
* Use the esri/dijit/Legend to add a legend to the upper right of the app. Apply CSS to style the legend.
* Use the esri/dijit/Scalebar to add a scalebar to lower left of the app.
