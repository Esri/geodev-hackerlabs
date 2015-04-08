###View via REST

All of feature layers are [ArcGIS REST feature services](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Feature_Service/02r3000000z2000000/). You can explore the underlying data with the REST API or the default web page that shows the metadata and exposes some query functionality.

In this lab you will explore services via the REST API.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login. Check `Keep me signed in`.

2. Click `My Content`.

3. Select any feature layer.

4. Click on the url for the layer.  Your url should look something like this:

 ```
 http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops/FeatureServer/0
 ```

5. Explore the meta data.

6. At the bottom of the page, try the `Query` functionality using the following settings:

 ```
 Where: 1=1
 Out Fields: *
 Format: HTML
 ```

7. Click `Query (GET)`

###Extras
* Explore the REST API by trying a number of different queries and different return formats.