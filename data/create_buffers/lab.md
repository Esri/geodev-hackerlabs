### Create Buffers

In ArcGIS Online, you can generate a buffers for your data in the Map Viewer. This can help you analyse what's around your existing data.

In this lab you will take rail stations and buffer them by half a mile to get an idea of the parts of town they service.

### Steps

1. Go to [www.arcgis.com](https://www.arcgis.com) and login.  

2. Use `Search` > `Search for Layers` to find the `PDX_Rail_Stops` layer by `al_geodev`.

3. Click `Open` > `Add layer to new map`. 

> NOTE: If you are having difficulty finding it, just click [this link](http://www.arcgis.com/home/item.html?id=a0a71aeb0e9443399dc8c5bbf9ba980e).

4. Click `PDX Rail Stops` > `Perform Analysis` > `Use Proximity` > `Create Buffers`.

	1. Choose to buffer by `Distance` and set the size to `0.5` `Miles`.

	2. Expand the `Options` and select `Dissolve`.

	3. Set the `Result layer name` to `0.5 Mile Radius from Rail Stops`.

	4. Clear the `Use current map extent` checkbox.

	5. Run Analysis.

5. Drag the `PDX Rail Stops` layer to the top of the layers list.

6. Save your map.

> Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=aa3e5b4e656f49af9e9ca893ed1c610e).

### Bonus 

* Use the small blue `i` icons in the analysis tool to learn more about the tools' various options.
* Click `Show credits` to see how many credits the analysis will consume.
* Experiment with the `Overlap` and `Dissolve` options.
* Try using multiple distances (e.g. `0.25 0.5 1` `Miles`) to generate multiple buffers per point, and experiment with the new options that appear when you add more  than 1 distance.
