###Customize Vector Map

Esri has introduced a new set of vector basemaps (now in beta release). There are several benefits to vector basemaps including high-res displays, smaller and easier to update, but perhaps the greatest benefit is the ability to customize the look and feel of the basemaps.

In this lab you will customize a vector basemap from an existing tile layer and then publish the updated style as a new tile layer.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login. Click `Map`.

2. Click `Add` to add a vector tile > `Search for Layers` > `In: ArcGIS Online`.

	1. Search for:

		```
		esri vector basemap light gray
		```
		
	2. Click `Add` to add each layer to the map > click `Done Adding Layers`.
 
4. In the table of contents, hover over the selected layer and click `More Options` > `Copy`.

5. For the layer just copied, click `More Options` > `Save Layer` > change the Title to `Light Green Canvas` and click `CREATE ITEM`.

6. Click `My Content` > click the `Light Green Canvas` tile layer > click `OPEN` > `Download style`.

7. Open the `root.json` style you downloaded in a text editor. The `root.json` file controls the map style. 
In the steps below you're going to change the color for a couple of layers in the map.
	
	1. Background, water, and marine bodies: use the find and replace tool to find `#cfcfd4` and replace with `#a6deff`. This approach is recommended because these layers appear multiple times in the map style for different zoom levels.  

		```json
			"type": "background",
      		"paint": {
        			"background-color": "#a6deff"
	
		```

		```json
			"source-layer": "Water area",
      		"paint": {
        			"fill-outline-color": "#a6deff",
        			"fill-color": "#a6deff"
		```    
	
	2. Land area: change the `fill-color` from `#ededed` to `#dfffd9`.

		```json
   			"source-layer": "Land",
      		"paint": {
        		"fill-color": "#dfffd9"
		```	
	
	3. Urban area: change the `fill-color` from `#e8e8e8` to `#d5e3ca`.

		```json
			"source-layer": "Urban area",
      			"maxzoom": 12,
      		"paint": {
        		"fill-color": "#d5e3ca"
		```
	
	4. Admin0 and Admin1 forest or park areas: change the `fill-color` from `#e4e8e4` to `#9cb297`.

		```json
			"source-layer": "Admin0 forest or park",
      		"paint": {
        		"fill-color": "#9cb297"
		```	

		```json
			"source-layer": "Admin1 forest or park",
      		"paint": {
        		"fill-color": "#9cb297"	
		```	

	5. Park or farming areas: change the `fill-color` from `#e4e8e4` to `#929991` and `Save` the file.

		```json
			"source-layer": "Park or farming",
      		"paint": {
        		"fill-color": "#929991"
		```
	
8. Go to [arcgis.com](http://www.arcgis.com) and login if necessary. Click `My Content` > click the `Light Green Canvas` tile layer > click `UPDATE` > `Choose File` > select the `root.json` file > `UPDATE ITEM`.

9. To see the changes, click `OPEN` > `Add layer to new map`.  

Your map should look like this:
* [Live Map](http://www.arcgis.com/home/webmap/viewer.html?webmap=b66770c3ad184c6a8f68cba5c19addeb)
* [Code](src/root_lightgreen.json) 
