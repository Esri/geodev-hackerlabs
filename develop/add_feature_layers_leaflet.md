###Add feature layers with Esri Leaflet

In this lab, you will add a feature layer to an Esri Leaflet application.

1. Click [starter_map_leaflet.html](src/starter_map_leaflet.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. In `JSBin` > `HTML`, add the following plugin to draw the layer styles:

	```
	<!-- Load Esri Leaflet Renderers -->
	<script src="//cdn-geoweb.s3.amazonaws.com/esri-leaflet-renderers/0.0.1-beta.3/esri-leaflet-renderers.js"></script>

	```

3. Add the following layers to the map:

	```javascript
	<script type='text/javascript'>
		var map = L.map('map').setView([45.533, -122.657], 12);
		L.esri.basemapLayer('DarkGray').addTo(map);

		 // ADD the rail lines here
		L.esri.featureLayer('http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines_Styled/FeatureServer/0').addTo(map);

	</script>
	```
4. Run and test the app.

Your app should look something like this:
 * [Code](https://github.com/Esri/geodev-hackerlabs/blob/gh-pages/develop/src/add_feature_layers_leaflet.html)
 * [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/add_feature_layers_leaflet.html)

###Extras
* Add a [Rail Stops feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops_Styled/FeatureServer/0) to the map,
 and then add a [Neighborhoods feature layer](http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Neighborhoods_Styled/FeatureServer/0).
* Use the callbacks to load the layers in the correct order.
