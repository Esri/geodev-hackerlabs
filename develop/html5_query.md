### Use HTML5 location to query a feature service

In this lab you will write an application which uses HTML5 to glean a users location and find out which census block they are inside.

1. Click [locate-query-1.html](src/locate-query-1.html) and copy the contents to a new [jsbin.com](http://jsbin.com).

2. Use an [event listener](https://developers.arcgis.com/javascript/jsapi/locatebutton-amd.html#event-locate) to retrieve the current user's location

3. Set up a [QueryTask](https://developers.arcgis.com/javascript/jsapi/querytask-amd.html) and pass the user's location in a request to a Census feature service

4. Draw the retrieved census block as a [Graphic](https://developers.arcgis.com/javascript/jsapi/graphic-amd.html) on the map

In the end your app should look something like this:
* [Code](src/locate-query-4.html)
* [Live App](http://esri.github.io/geodev-hackerlabs/develop/src/locate-query-4.html)

### Resources (ie: some samples to steal code from)

https://developers.arcgis.com/javascript/jssamples/widget_locate.html
https://developers.arcgis.com/javascript/jssamples/fl_selection.html
https://developers.arcgis.com/javascript/jssamples/query_nomap.html

### Extras
* customize census block symbology
* zoom map to [extent](https://developers.arcgis.com/javascript/jsapi/polygon-amd.html#getextent) of census block
* add census features when the page loads instead and use our new [GeometryEngine](https://developers.arcgis.com/javascript/jsapi/esri.geometry.geometryengine-amd.html#contains) for the query
* use [Geoenrichment](https://developers.arcgis.com/javascript/jsapi/studyarea-amd.html) to find out what the population density of the census block is
