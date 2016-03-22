###Filter Data

The ArcGIS Online Map Viewer allows you to filter your data by multiple criteria. This allows you to limit which features draw and focus on only certain subsets of your data that are of interest to you. In addition, Analysis Tools take note of current filters when generating their output.

In this lab you will focus in on Rail Stops on the Blue Line and generate buffers around only those stops.

###Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login.  

2. Use ArcGIS Online to find the `PDX_Rail_Stops_Styled` layer by `al_geodev` or just click [this link](http://www.arcgis.com/home/item.html?id=4acaaab6e79949328a8b2c39a593899e).

3. Click `Open` > `Add layer to new map`.

4. Click `PDX Rail Stops Styled` > `Filter`. Note you have two dropdowns and a text field. The text field has 3 radio buttons below it.

	1. Pick `LINE` in the first dropdown.
	
	2. Pick `contains` in the second dropdown.
	
	3. Type `B` into the text field (this is how the data is encoded for the Blue Line).
	
	4. Click `Apply Filter`.

5. Click `PDX Rail Stops Styled` > `Perform Analysis` > `Use Proximity` > `Create Buffers`.

	1. Choose to buffer by `Distance` and set the size to `1` `Miles`.

	2. Expand the `Options` and select `Dissolve`.

	3. Set the `Result layer name` to `1 Mile Radius from Rail Stops`.

	4. Clear the `Use current map extent` checkbox.

	5. Click `Run Analysis`.

6. Drag the `PDX Rail Stops` layer to the top of the layers list.

Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=39efc42b4920454a8241663e7764d6d5). See how buffers were only calculated for stations on the B (Blue) line.

###Bonus 

* Try filtering by `TYPE`, `is` and selecting `Unique` from the Value radio buttons. What happens to the text box?
* See if you can show only Rail Stops that are under construction (`STATUS` `is not` `Existing`).
* Remove all filters.
* Add multiple filters or filter sets. Try:
  * `LINE` `contains` `R` combined with either:
    * `STATUS` `is` `Existing`, or 
    * `STATUS` `is not` `Existing`.

###More Bonus

* You can click `Details` > `PDX Rail Stops Styled` > `Save Layer` to save this filtered "view" on the layer to your `My Content` space in your account. Perhaps name it `PDX Blue Line Stops`. This new item will point to the same unfiltered data source, but when added to the ArcGIS Online Map Viewer, will automatically filter according to the saved definitions. You can share these items with colleagues and users as a great way for them to bring focused content from a larger dataset into their own maps.