###Extract walkable areas

In ArcGIS Online, you can use analyses to overlay and extract data that overlaps geographically by using the Map Viewer and .

In this lab you will take overlay the 0.5 mile walking disances with neighborhoods to extract the data that meets this critera.

### Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login.  

2. Click `Map`.

3. Click `Add` > `Search for Layers` > `In: ArcGIS Online`.

	1. Search for:

		```
		PDX_Rail_Stops_Walk_Time_15_Minutes (by al_geodev)
		PDX_Neighborhoods_Enriched (by al_geodev)
		```

	2. Add the layers.

4. Click `PDX_Rail_Stops_Walk_Time_15_Minutes` > `Perform Analysis` > `Manage Data` > `Overlay Layers`.

	1. Choose `Intersect`.

	2. Result layer name `PDX_Walkable_Neighborhoods`.

	3. Run Analysis.

5. Turn off the other layers and just inspect the results.

Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=62e4da3c6ef94668bae7bcb7c40e42b7).
