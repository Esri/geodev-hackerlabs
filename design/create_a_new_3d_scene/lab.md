###Create a new 3D Scene

The easiest way to style a scene is to use the [Scene Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-scenes.htm).

In this lab you will use the new styling capabilities of the scene viewer to make your map more meaningful in 3D.

###Steps


1. Go to [arcgis.com](http://www.arcgis.com) and login.  

2. Click `Scene`.

3. In the upper right corner of the scene, click the `Basemap` icon to open the `Basemap` dialog and change the basemap to `Imagery`. Close the `Basemap` dialog.

4. In `Contents` click `+ Add Layers` > `Enter Layer URL`.

  1. Enter the following URL and click `Add`:

    ```
    https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines/FeatureServer/0
    ```

  2. Click `PDX Rail Lines` > `Zoom To` to zoom the map.
  

  3. On the map, click `Rotate`. Click and drag on the map to tilt and zoom the view.


  4. Click `PDX Rail Lines` > `Configure Layer` and set the following properties:

    * Elevation Mode: `Relative to ground`
    * Offset (meters): `50`
    * Symbols: `Change Symbols`
     * Type: `3D Path`
     * Size (meters): `50` Color: `Blue` (pick a medium blue)

  5. Click `Done`.

5. In `Contents` click `+ Add Layers` > `Enter Layer URL`.

  1. Enter the following URL and click `Add`:

    ```
    https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops/FeatureServer/0
    ```  

  2. Navigate to your previous zoomed in/rotated view.
  3. Click `PDX Rail Stops` > `Configure Layer` > `3D Object` > `Options` and change the following properties:

    * Color: `Red` (pick a dark red with 25% transparency)
     * Size: `80` (meters)

  5. Click `Done`.
 
4. Save your scene.

Your scene should look something like [this](https://edn.maps.arcgis.com/home/webscene/viewer.html?webscene=48403313d9bf4a39a2ca0fc4851b758e).
