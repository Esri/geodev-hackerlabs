###Save a Layer

With the [Map Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-maps.htm) you can easily update and save the metadata for your layers. Saving layers updates and stores the styling and extent information with the layer itself. If you own the layer, you can save directly to the layer. If you don't, you can copy other people's layers and save the layer with your own style and extent information. This technique is handy when you want to render a layer the same way in all apps/APIs that access the layer.

In this lab you will style and save a layer to your account.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login.  

2. Click `MAP`.

3. Click `Add` > `Search for Layers` > `In: ArcGIS Online`.

4. Search for `PDX Neighborhoods Enriched` by (al_geodev) and add this layer.

5. Click `PDX Neighborhoods Enriched` > `Copy`. This creates a new Layer Item in your account.

6. Change the extent of the map and style the layer as desired. See [Style a Map](./style a map.md) for help on styling.

7. Click `PDX Neighborhoods Enriched Copy` > `Save layer`. Set the following properties:

 ```
 * Title: PDX Neighborhoods Enriched Copy
 * Tags: PDX Neighborhoods
 * Summary: PDX Neighborhoods Copy
 * Save In Folder: <your account>
 Done
 ```

8. Go to `My Contents` to view the layer with the symbology.

###Bonus
* View the layer's symbology as JSON by accessing it via the REST API. 

In your web browser, paste in this url. Identify the `renderer` section.

```
https://www.arcgis.com/sharing/rest/content/items/d07ec497291b470f9038d3759838f51f/data

```

NOTE: Replace the item ID above with yours.

