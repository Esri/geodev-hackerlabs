###Enrich with Population Data

ArcGIS Online allows you interactively geoenrich your data with [social demographic and business data](https://developers.arcgis.com/en/features/geo-enrichment/). The easiest way to do accomplish this is to use the Map Viewer and add the field data interactively. You can also use the [raw REST API](https://developers.arcgis.com/rest/geoenrichment/api-reference/geoenrichment-service-overview.htm).

In this lab you will add neighborhood polygons and enrich them with population data.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login.

2. Use `Search` > `Search for Layers` to find the `PDX Neighborhoods` layer by `al_geodev`.

3. Click `Open` > `Add layer to new map`.

> NOTE: If you are having difficulty finding it, just click [this link](http://www.arcgis.com/home/item.html?id=cc1d37e67e934a93b489ca4d82b07d9c).

4. Click `PDX Neighborhoods` > `Perform Analysis` > `Data Enrichment` > `Enrich Layer`.

  1. Click `Select Variables` and `Search` and select the following:

    ```
    Population > 2016 Total Population (Esri)
    Income > 2016 Average Household Income (Esri)
    Age > 2016 Median Age (Esri)
    ```

    ```HINT: After you select each variable, click `Back` to select each variable and `Apply` when you are done.```

  2. Now `Run Analysis`.

5. Click `PDX Neighborhood` to turn off the original layer.

6. Click on the map and scroll down in the popup to see the new demographic variable fields.

7. Click `Enriched PDX Neighborhoods` > `Change Style`.

  1. Set the following properties:

    ```
    Choose and attribute to show: 2016 Total Population
    ```

  2. Done.

8. Save your map.

> Your map should look something like [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=93cd156deb3e49abb7e48bf1b202cc61).

###Bonus
* Explore some of the other enrichment fields available.
* Perform different types of geoenrichment analyses.
* Style the map to use some of the other fields.