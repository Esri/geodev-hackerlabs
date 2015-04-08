###Save a Layer

With the [Map Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-maps.htm) you can easily update and save the metadata for your layers. Saving layers updates and stores the styling and extent information with the layer itself. If you own the layer, you can save directly to the layer. If you don't, you can copy other people's layers and save the layer with your own style and extent information. This technique is handy when you want to render a layer the same way in all apps/APIs that access the layer.

In this lab you will style and save a layer to your account.

###Steps

1. Go to [arcgis.com](http://www.arcgis.com) and login. Check `Keep me signed in`.

2. Click `MAP`.

3. Click `Add` > `Search for Layers` > `In: ArcGIS Online`.

4. Search for `PDX Neighborhoods` by (al_geodev) and add this layer.

5. Click `PDX Neighborhoods` > `Copy`. This creates a new Layer Item in your account.

6. Change the extent of the map and style the layer. See [Style a Map](./style a map.md) for help.

7. Click `PDX Neighborhoods Copy` > `Save layer`. Set the following properties:

 ```
 * Title: PDX Neighborhoods Copy
 * Tags: PDX Neighborhoods
 * Summary: PDX Neighborhoods Copy
 * Save In Folder: <your account>
 Done
 ```

8. Go to `My Contents` to view the layer.

###Extras
* View your layer's metadata via REST to verify the changes have been persisted. See (View Via REST)[./data/view via rest.md] for help.