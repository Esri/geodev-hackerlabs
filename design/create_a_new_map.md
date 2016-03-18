###Create a new map

The easiet way to create a new map is to use the [Map Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-maps.htm).

In this lab you will create a new map from existing layers that have been already been published.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login.  

2. Click `MAP`.

3. Click `Add` > `Search for Layers` > `In: ArcGIS Online`.

	1. Search for:

		```
		PDX_Rail_Stops (by al_geodev)
		PDX_Rail_Lines (by al_geodev)
		PDX_Neighborhoods_Enriched (by al_geodev)
		```

		NOTE: Do not select the `xxx_Styled` layers.

	2. Click `Add` to add each layer to the map.

	3. Click `Done Adding Layers`.
 
4. Drag to reorder the layers so that `PDX Rail Stops` is on top, `PDX Rail Lines` is next and `PDX Neighborhoods Enriched` is on the bottom.

5. Choose a new basemap.

6. Save your map. With the default styles, your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=c8cd4b6f2d724c99be9a2d14fb31603e).

7. Explore the data by clicking on the map.

###Bonus 
* Use the map viewer to try to improve the layer names in the TOC. 
* Go to the [style_a_map.md]() lab to improve the symbols.