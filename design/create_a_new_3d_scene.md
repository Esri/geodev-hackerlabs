###Create a new 3D Scene

The easiest way to style a scene is to use the [Scene Viewer](http://doc.arcgis.com/en/arcgis-online/use-maps/view-maps.htm).

In this lab you will use the new styling capabilities of the scene viewer to make your map more meaningful in 3D.

###Steps


1. Go to [arcgis.com](http://www.arcgis.com) and login. Check `Keep me signed in`.

2. Click `Scene`.

3. On the map, click `Basemap` to change the basemap to `Imagery`. Close the dialog.

4. In `Contents` click `+ Add Layers` > `Enter Layer URL`.

  1. Enter the following URL and click `Add`:

    ```
    http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Lines/FeatureServer/0
    ```

  2. Click `PDX Rail Lines Styled` > `Zoom To` to zoom the map.
  

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
    http://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/PDX_Rail_Stops/FeatureServer/0
    ```  

  2. Click `PDX Rail Stops` > `Configure Layer` and set the following properties:

    * Elevation Mode: `Relative to ground`
    * Offset (meters): `0`
    * Symbols: `Change Symbols`
     * Type: `3D Object`
     * Shape: `Cylinder`
     * Size (meters): `100` Color: `Red` (pick a dark red with 25% transparency)

  5. Click `Done`.
 
4. Save your scene.