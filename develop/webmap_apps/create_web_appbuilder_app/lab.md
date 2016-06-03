###Create a Web AppBuilder Application

You can use the [Web AppBuilder for ArcGIS](http://doc.arcgis.com/en/web-appbuilder/) to build an HTML, CSS, JS app that will run on any device. All apps are developed on top of an existing web map and are shared out as a web application.

In this lab, you will build a simple WAB app.

1. Click [this map](http://www.arcgis.com/home/webmap/viewer.html?webmap=7186a92406194797aa518c06c189a71f) to open the map in the Map Viewer. If you have your own map, you can try to use that too.

2. Click `Share` > `Create a Web App` > `Web App Builder`.

3. Set the following properties:

 ```
 Title: 2015 Portland Population Density
 Tags: Portland, Map, Population, Density,Template App
 Summary: Portland population map built with the Public Information Template
 ```

 Click `Get Started`

4. Explore the different themes and pick `Foldable Theme`.

5. In `Theme` and set the `Style` > `Orange`.

6. In `Theme` try a different `Layout`.

6. In `Map` zoom in and select `Use Current Map View`.

7. Click `Widget`

 * Configure the `Search` widget to search
 * Add Search Source: Neighborhoods
 * Name: Neighborhoods
 * Search Fields: Name
 * Display Fiends: Name

 Click `Ok`.

6. Click `Attribute` and change the subtitle to `Demographics of Neighbourhoods`.

7. Click `Save`.

8. Click `Preview` to view the application at different screen sizes.

9. Click `Launch` to test the application.

Your app should look something like [this](http://edn.maps.arcgis.com/apps/webappviewer/index.html?id=53ee22673c5c4f5bb543e18a7dd1f277).

###Bonus
* Scan the QR code to view the app on your mobile device.
* Try adding and configuring different themes and widgets.
