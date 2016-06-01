### Create walking distance

> **Note:** This service consumes more credits than most, so use it sparingly!

In ArcGIS Online, you can perform a Drive Time, Drive Distance, Walk Time or Walk Distance analysis on your data in the Map Viewer. Drive Times and Walk Times can be used in similar ways to Buffers, but provide a more context-aware idea of what's around your existing data. Rather than a crow-flies distance from a point, you can answer the question "Where can I drive to within 10 minutes?". As well Time-based questions, these answers can also be calculated for Distance. For example "Where can I walk to if I walk no more than 1/2 a mile?".

In this lab you will take rail stations and see what's within half a mile's walk from them to get an idea of the parts of town they service.

### Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login.  

2. Use `Search` > `Search for Layers` to find the `PDX_Rail_Stops` layer by `al_geodev`.

3. Click `Open` > `Add layer to new map`.

> NOTE: If you are having difficulty finding it, just click [this link](http://www.arcgis.com/home/item.html?id=a0a71aeb0e9443399dc8c5bbf9ba980e).

4. Click `PDX Rail Stops` > `Perform Analysis` > `Use Proximity` > `Create Drive-Time Areas`.

	a. Choose `Walking Time` and set the size to `15` `Minutes`.

	b. Select `Dissolve`.

	c. Set the `Result layer name` to `15 Minutes Walk from Rail Stops`.

	d. Clear the `Use current map extent` checkbox.

	e. In order to ensure that you don't overrun your credit allotment, click `Show credits` to see how many will be consumed. Close the report.

	f. Run Analysis.

5. Drag the `PDX Rail Stops` layer to the top of the layers list.

> Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=5bd7a5da276042edbee8171edb2d03d4).

### Bonus

* Add a 0.5 Mile Buffer to the map (or see [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=b9327ec156fc43ea91f4722d557ed2ec)) and explore how 0.5 Mile Walk Distance and 0.5 Mile Buffer compare.
* Use the `Show credits` link to see how the service cost would vary as you add more times or distances (separated by spaces) to the `Measure` parameters. For example, try `0.5 1` or `0.5 1 2` and compare to the cost from step 9 above.
* Use the small blue `i` icons in the analysis tool to learn more about the tools' various options.
	* Look at the `Measure` help to learn about Traffic in Drive Time analysis.
	* Look at the `Areas from different points` help and consider how `Overlap`, `Dissolve` and `Split` are useful in different scenarios. Sample output can be found here:
		* `Overlap`: [0.5 Miles from Rail Stops (Overlap)](http://www.arcgis.com/home/item.html?id=858515a25fc6481c8fe809778b007a50)
		* `Dissolve`: [0.5 Miles from Rail Stops (Dissolve)](http://www.arcgis.com/home/item.html?id=87c3c2d21b6f417297157ddedcf6c199)
		* `Split`: [0.5 Miles from Rail Stops (Split)](http://www.arcgis.com/home/item.html?id=09a1b5b03ab14d0a96d92655f024ccca)
* Find out more about the Esri Directions and Routing Services [here](https://developers.arcgis.com/en/features/directions/).
