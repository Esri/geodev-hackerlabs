### Customize Vector Basemap

Esri has introduced a new set of vector basemaps (now in beta release). There are several benefits to vector basemaps including high-res displays, smaller and easier to update and the ability to customize the look and feel of the basemaps.

In this lab you will customize a vector basemap from an existing tile layer and then publish the updated style as a new tile layer.

### Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login. Click `Map`.

2. Click `Add` to add a vector tile > `Search for Layers` > `In: ArcGIS Online`.

	1. Search for:

		```
		owner:esri_vector gray -mature
		```

	2. Click `Add` to add the `Light Gray Canvas` layer to the map > click `Done Adding Layers`.

3. In the table of contents, click the new layer's hamburger menu `•••` and select `Copy`.

4. For the layer just copied, click `•••` > `Save Layer` > change the Title to `Light Green Canvas` and click `CREATE ITEM`.

5. Click `My Content` > click the `Light Green Canvas` tile layer > `Download style`.

6. Open the `root.json` style you downloaded in a text editor. The `root.json` file controls the map style.
In the steps below you're going to change the color for a couple of layers in the map.

	1. Background, water, and marine areas: use the find and replace tool to find `#cfcfd4` and replace with `#a6deff`. This approach is recommended because these layers appear multiple times in the map style for different zoom levels.  

    ```js
    "type": "background",
    "paint": {
	  "background-color": "#a6deff"
	```

    ```js
    "source-layer": "Water area",
    "paint": {
        "fill-outline-color": "#a6deff",
        "fill-color": "#a6deff"
    ```    

	2. Land: change the `fill-color` from `#ededed` to `#dfffd9`.

    ```js
    "source-layer": "Land",
    "paint": {
        "fill-color": "#dfffd9"
    ```

	3. Urban area: change the `fill-color` from `#e8e8e8` to `#d5e3ca`.

    ```js
    "source-layer": "Urban area",
    "maxzoom": 12,
    "paint": {
       "fill-color": "#d5e3ca"
    ```

	4. Admin0 and Admin1 forest or park areas: change the `fill-color` from `#e4e8e4` to `#9cb297`.

    ```js
    "source-layer": "Admin0 forest or park",
    "paint": {
        "fill-color": "#9cb297"
    ```

    ```js
    "source-layer": "Admin1 forest or park",
    "paint": {
        "fill-color": "#9cb297"
    ```

	5. Park or farming: change the `fill-color` from `#e4e8e4` to `#929991` and `Save` the file.

    ```js
    "source-layer": "Park or farming",
    "paint": {
        "fill-color": "#929991"
    ```

7. Go to [arcgis.com](http://www.arcgis.com) and login if necessary. Click `My Content` > click the `Light Green Canvas` tile layer > click `Update` > `Choose File` > select the `root.json` file > `Update Style File`.

8. To see the changes, click `Open in Map Viewer`.  

Your map should look like this:
* [Live Map](http://www.arcgis.com/home/webmap/viewer.html?webmap=4c7c4df0642540bba27106f1bc44ddac)
* [Code](root_lightgreen.json)

### Bonus

* Working with JSON is fun, but you can also work with the layer styles in a more "[WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)" fashion. Use the [ArcGIS Vector Basemap Style Editor](https://maps.esri.com/jg/VectorBasemapStyleEditor/) to edit the `Light Green Canvas` map you just created. Try using the colors of your organization, or maybe the colors of your [favorite team](http://teamcolors.arc90.com/)!
